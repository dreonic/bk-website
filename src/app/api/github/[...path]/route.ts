import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ path: string[] }> }
) {
    const { path } = await params;
    return handleGitHubRequest(request, path);
}

export async function POST(
    request: NextRequest,
    { params }: { params: Promise<{ path: string[] }> }
) {
    const { path } = await params;
    return handleGitHubRequest(request, path);
}

export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ path: string[] }> }
) {
    const { path } = await params;
    return handleGitHubRequest(request, path);
}

export async function PATCH(
    request: NextRequest,
    { params }: { params: Promise<{ path: string[] }> }
) {
    const { path } = await params;
    return handleGitHubRequest(request, path);
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ path: string[] }> }
) {
    const { path } = await params;
    return handleGitHubRequest(request, path);
}

async function handleGitHubRequest(request: NextRequest, path: string[]) {
    const authorization = request.headers.get("authorization");

    if (!authorization) {
        return NextResponse.json(
            { error: "No authorization header" },
            { status: 401 }
        );
    }

    const apiPath = path.join("/");
    const searchParams = request.nextUrl.searchParams.toString();
    const url = `https://api.github.com/${apiPath}${
        searchParams ? `?${searchParams}` : ""
    }`;

    const headers: HeadersInit = {
        Authorization: authorization,
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "Decap-CMS",
    };

    let body;
    if (request.method !== "GET" && request.method !== "HEAD") {
        body = await request.text();
        if (body) {
            headers["Content-Type"] = "application/json";
        }
    }

    try {
        const response = await fetch(url, {
            method: request.method,
            headers,
            body: body || undefined,
        });

        const data = await response.text();

        return new NextResponse(data, {
            status: response.status,
            headers: {
                "Content-Type":
                    response.headers.get("Content-Type") || "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods":
                    "GET, POST, PUT, PATCH, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Authorization",
            },
        });
    } catch (error) {
        console.error("GitHub proxy error:", error);
        return NextResponse.json(
            { error: "Failed to proxy request to GitHub" },
            { status: 500 }
        );
    }
}

export async function OPTIONS() {
    return new NextResponse(null, {
        status: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":
                "GET, POST, PUT, PATCH, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
    });
}
