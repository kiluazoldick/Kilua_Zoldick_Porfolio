import { NextRequest, NextResponse } from 'next/server'

export const revalidate = 3600 // cache 1 hour

export async function GET(req: NextRequest) {
  const user = req.nextUrl.searchParams.get('user')
  const reposParam = req.nextUrl.searchParams.get('repos')

  if (!user || !reposParam) {
    return NextResponse.json(
      { error: 'Missing user or repos parameter' },
      { status: 400 }
    )
  }

  const repos = reposParam.split(',').filter(Boolean)

  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  }
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
  }

  try {
    const results = await Promise.all(
      repos.map(async (name) => {
        const res = await fetch(
          `https://api.github.com/repos/${user}/${name}`,
          { headers, next: { revalidate: 3600 } }
        )
        if (!res.ok) return null
        const data = await res.json()
        return {
          name: data.name,
          html_url: data.html_url,
          description: data.description,
          homepage: data.homepage,
          stargazers_count: data.stargazers_count,
          forks_count: data.forks_count,
          language: data.language,
          pushed_at: data.pushed_at,
        }
      })
    )

    return NextResponse.json(results.filter(Boolean), {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    })
  } catch (error) {
    console.log('[v0] github pinned error:', error)
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 })
  }
}
