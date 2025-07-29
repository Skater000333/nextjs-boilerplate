"use client";
import React, { useState } from "react";

const suggestedQuestions = [
  "What is Parth’s greatest achievement?",
  "Tell me about Parth’s product management style.",
  "What’s a fun fact about Parth?",
  "Describe Parth’s leadership experience.",
  "What does Parth do for fun?",
];

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm Parth's AI Assistant. Ask me anything about Parth's experience, projects, or skills!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async (messageOverride?: string) => {
    const question = messageOverride ?? input;
    if (!question) return;
    const newMessages = [...messages, { role: "user", content: question }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: newMessages }),
    });
    const data = await res.json();
    console.log("API response:", data);

    const reply =
      data.choices?.[0]?.message?.content ||
      data.error ||
      JSON.stringify(data) ||
      "Sorry, something went wrong!";
    setMessages([...newMessages, { role: "assistant", content: reply }]);
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-xl mx-auto mt-8">
      <h3 className="font-bold text-lg mb-2">💬 Ask Parth’s AI</h3>

      {/* Suggested Questions */}
      <div className="mb-3 flex flex-wrap gap-2 justify-center">
        {suggestedQuestions.map((q) => (
          <button
            key={q}
            className="bg-blue-200 hover:bg-blue-400 text-blue-800 text-xs rounded-full px-4 py-1 shadow transition"
            onClick={() => sendMessage(q)}
            disabled={loading}
            type="button"
          >
            {q}
          </button>
        ))}
      </div>

      <div className="h-48 overflow-y-auto border p-2 mb-2 rounded bg-gray-50">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={msg.role === "user" ? "text-right" : "text-left"}
          >
            <span
              className={
                msg.role === "user"
                  ? "font-semibold text-blue-600"
                  : "font-semibold text-gray-600"
              }
            >
              {msg.role === "user" ? "You" : "AI"}:
            </span>{" "}
            {msg.content}
          </div>
        ))}
        {loading && <div className="text-gray-500 mt-2">Typing…</div>}
      </div>
      <div className="flex gap-2">
        <input
          className="border rounded p-2 flex-1"
          type="text"
          value={input}
          disabled={loading}
          placeholder="Type your question here..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          className="bg-blue-600 text-white rounded px-4 py-2"
          disabled={loading || !input}
          onClick={() => sendMessage()}
        >
          Send
        </button>
      </div>
    </div>
  );
}
