import { NextRequest, NextResponse } from 'next/server'

export const revalidate = 600 // cache 10 min

export async function GET(req: NextRequest) {
  const user = req.nextUrl.searchParams.get('user')
  if (!user) {
    return NextResponse.json({ error: 'Missing user' }, { status: 400 })
  }

  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  }
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
  }

  try {
    const res = await fetch(
      `https://api.github.com/users/${user}/events/public?per_page=30`,
      { headers, next: { revalidate: 600 } }
    )
    if (!res.ok) {
      return NextResponse.json(
        { error: 'GitHub API error' },
        { status: res.status }
      )
    }

    const events = await res.json()

    // Summarize into simple activity items
    const items = events
      .map((e: any) => {
        const repo = e.repo?.name
        const date = e.created_at
        switch (e.type) {
          case 'PushEvent': {
            const count = e.payload?.commits?.length || 0
            return {
              type: 'push',
              repo,
              date,
              message:
                count > 0
                  ? `Pushed ${count} commit${count > 1 ? 's' : ''} to ${repo}`
                  : `Pushed to ${repo}`,
              detail: e.payload?.commits?.[0]?.message || null,
              url: `https://github.com/${repo}`,
            }
          }
          case 'PullRequestEvent':
            return {
              type: 'pr',
              repo,
              date,
              message: `${e.payload?.action === 'opened' ? 'Opened' : 'Updated'} PR in ${repo}`,
              detail: e.payload?.pull_request?.title || null,
              url: e.payload?.pull_request?.html_url || `https://github.com/${repo}`,
            }
          case 'CreateEvent':
            return {
              type: 'create',
              repo,
              date,
              message: `Created ${e.payload?.ref_type || 'repository'}${e.payload?.ref ? ` ${e.payload.ref}` : ''} in ${repo}`,
              detail: null,
              url: `https://github.com/${repo}`,
            }
          case 'IssuesEvent':
            return {
              type: 'issue',
              repo,
              date,
              message: `${e.payload?.action === 'opened' ? 'Opened' : 'Updated'} issue in ${repo}`,
              detail: e.payload?.issue?.title || null,
              url: e.payload?.issue?.html_url || `https://github.com/${repo}`,
            }
          case 'WatchEvent':
            return {
              type: 'star',
              repo,
              date,
              message: `Starred ${repo}`,
              detail: null,
              url: `https://github.com/${repo}`,
            }
          case 'ForkEvent':
            return {
              type: 'fork',
              repo,
              date,
              message: `Forked ${repo}`,
              detail: null,
              url: `https://github.com/${repo}`,
            }
          default:
            return null
        }
      })
      .filter(Boolean)
      .slice(0, 6)

    return NextResponse.json(items, {
      headers: {
        'Cache-Control': 'public, s-maxage=600, stale-while-revalidate=3600',
      },
    })
  } catch (error) {
    console.log('[v0] github activity error:', error)
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 })
  }
}
