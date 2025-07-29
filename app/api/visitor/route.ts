import { NextRequest, NextResponse } from "next/server";

// Simple POST endpoint, no default export!
export async function POST(req: NextRequest) {
  try {
    const { name, purpose } = await req.json();
    // Log to serverless logs (for demo—no database required)
    console.log(
      `Visitor: ${name || "Guest"} | Purpose: ${purpose || "Not given"} | Time: ${new Date().toISOString()}`
    );
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || String(err) }, { status: 400 });
  }
}
