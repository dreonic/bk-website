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

        // Return HTML that posts message to parent window (Decap CMS popup)
        const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Authorization Complete</title>
    <script>
        // Post message immediately when page loads
        (function() {
            if (!window.opener) {
                document.body.innerHTML = "<p>Error: No opener window found. Please close this window and try again.</p>";
                return;
            }

            function receiveMessage(e) {
                console.log("receiveMessage", e);
                // Send success message with token data
                window.opener.postMessage(
                    "authorization:github:success:" + JSON.stringify({
                        token: "${tokenData.access_token}",
                        provider: "github"
                    }),
                    e.origin
                );
                window.removeEventListener("message", receiveMessage, false);
            }
            
            window.addEventListener("message", receiveMessage, false);
            
            // Notify opener that we're ready
            console.log("Sending authorization message to opener");
            try {
                window.opener.postMessage("authorizing:github", "*");
            } catch (err) {
                console.error("Error posting message:", err);
                document.body.innerHTML = "<p>Error communicating with parent window. Please close this window and try again.</p>";
            }
        })();
    </script>
</head>
<body>
    <p>Authorization successful. Closing window...</p>
</body>
</html>
        `;

        return new NextResponse(html, {
            headers: {
                "Content-Type": "text/html",
            },
        });
    } catch (error) {
        console.error("OAuth callback error:", error);
        return NextResponse.json(
            { error: "Authentication failed" },
            { status: 500 }
        );
    }
}
