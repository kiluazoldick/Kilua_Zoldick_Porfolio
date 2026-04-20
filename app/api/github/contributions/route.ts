import { NextResponse } from 'next/server'
import { GITHUB_USERNAME } from '@/app/data'

export const revalidate = 3600 // 1h

type Contribution = {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

export async function GET() {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`,
      { next: { revalidate: 3600 } },
    )

    if (!res.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch contributions' },
        { status: 502 },
      )
    }

    const data = (await res.json()) as {
      total: { lastYear: number }
      contributions: Contribution[]
    }

    return NextResponse.json({
      total: data.total?.lastYear ?? 0,
      contributions: data.contributions ?? [],
    })
  } catch (e) {
    return NextResponse.json(
      { error: 'Internal error', contributions: [], total: 0 },
      { status: 500 },
    )
  }
}
