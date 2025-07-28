import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Missing API key" }, { status: 500 });
  }

  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "mistralai/mixtral-8x7b-instruct",
      messages: [
        { role: "system", content: "You are Parth's AI assistant. Answer questions based on Parth's resume and professional background, and keep responses friendly and concise." },
        ...messages
      ],
      max_tokens: 400,
    }),
  });

  const data = await res.json();
  return NextResponse.json(data);
}
