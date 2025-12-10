import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const code = searchParams.get("code");

    if (!code) {
        return NextResponse.json(
            { error: "No code provided" },
            { status: 400 }
        );
    }

    try {
        const clientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
        const clientSecret = process.env.GITHUB_CLIENT_SECRET;

        if (!clientId || !clientSecret) {
            return NextResponse.json(
                { error: "GitHub OAuth credentials not configured" },
                { status: 500 }
            );
        }

        // Exchange code for access token
        const tokenResponse = await fetch(
            "https://github.com/login/oauth/access_token",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    client_id: clientId,
                    client_secret: clientSecret,
                    code: code,
                }),
            }
        );

        const tokenData = await tokenResponse.json();

        if (tokenData.error) {
            return NextResponse.json(
                { error: tokenData.error },
                { status: 400 }
            );
        }

        // Redirect to admin with token in URL fragment (for implicit flow compatibility)
        const adminUrl = `/admin/#access_token=${tokenData.access_token}&token_type=bearer`;
        return NextResponse.redirect(new URL(adminUrl, request.url));
    } catch (error) {
        console.error("OAuth callback error:", error);
        return NextResponse.json(
            { error: "Authentication failed" },
            { status: 500 }
        );
    }
}
