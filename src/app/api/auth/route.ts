import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const provider = searchParams.get('provider');

    if (provider !== 'github') {
        return NextResponse.json({ error: 'Invalid provider' }, { status: 400 });
    }

    const clientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
    const redirectUri = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://bk-website-git-decap-cms-juanfrederick.vercel.app'}/api/callback`;

    if (!clientId) {
        return NextResponse.json({ error: 'GitHub Client ID not configured' }, { status: 500 });
    }

    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=repo,user`;

    return NextResponse.redirect(githubAuthUrl);
}
