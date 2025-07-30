"use client";
import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const suggestedQuestions = [
  "What is Parth’s greatest achievement?",
  "Describe Parth’s leadership style.",
];

export default function Chatbot() {
  const [open, setOpen] = useState(true); // Open on load
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "👋 Hi! I'm Parth's AI Assistant.\n\nAsk me anything about Parth’s experience, projects, or skills!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Responsive handling
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const updateSize = () => setIsMobile(window.innerWidth < 640);
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Scroll to last message
  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const sendMessage = async (msgOverride?: string) => {
    const question = msgOverride ?? input;
    if (!question.trim()) return;
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

    const reply =
      data.choices?.[0]?.message?.content ||
      data.error ||
      JSON.stringify(data) ||
      "Sorry, something went wrong!";

    setMessages([...newMessages, { role: "assistant", content: reply }]);
    setLoading(false);
  };

  // If closed, show floating avatar button
  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed z-50 bottom-4 right-4 sm:bottom-8 sm:right-8 bg-white/80 backdrop-blur border-2 border-blue-400 shadow-2xl rounded-full p-2 transition hover:scale-105"
        aria-label="Open Parth's AI Chatbot"
        style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.18)" }}
      >
        <img
          src="/avatar.png"
          alt="AI Avatar"
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-blue-500"
        />
      </button>
    );
  }

  return (
    <div
      className={`
        fixed z-50
        bottom-0 right-0
        flex flex-col
        ${isMobile ? "w-[98vw] max-w-none h-[72vh] rounded-t-2xl" : "w-[430px] h-[550px] max-w-[98vw] rounded-3xl"}
        bg-white/80 backdrop-blur-xl shadow-2xl border border-blue-300
        m-2 sm:bottom-8 sm:right-8
        transition-all duration-300
      `}
      style={{ boxShadow: "0 2px 28px rgba(0,0,0,0.19)" }}
    >
      {/* Header */}
      <div className="flex items-center px-4 py-3 border-b border-blue-200 bg-blue-200/90 rounded-t-2xl justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/avatar.png"
            alt="AI Avatar"
            className="w-14 h-14 rounded-full border-2 border-blue-400 bg-white"
          />
          <span className="font-bold text-xl text-blue-900">Parth’s AI</span>
        </div>
        <button
          onClick={() => setOpen(false)}
          className="text-2xl text-blue-500 hover:bg-blue-100 rounded-full px-2 py-1 transition"
          aria-label="Close chatbot"
        >
          ×
        </button>
      </div>

      {/* Suggested Questions */}
      <div className="flex gap-3 px-5 py-2 flex-wrap">
        {suggestedQuestions.map((q) => (
          <button
            key={q}
            className="bg-blue-100 hover:bg-blue-300 text-blue-800 text-sm rounded-full px-4 py-1 shadow font-medium transition"
            onClick={() => sendMessage(q)}
            disabled={loading}
            type="button"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Message Area */}
      <div className="flex-1 overflow-y-auto px-4 py-2 bg-blue-50/80">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex gap-2 mb-4 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.role === "assistant" && (
              <img
                src="/avatar.png"
                alt="AI"
                className="w-10 h-10 rounded-full border border-blue-400 bg-white flex-shrink-0"
              />
            )}
            <div
              className={`
                rounded-2xl px-4 py-2 shadow-md whitespace-pre-wrap
                ${msg.role === "user" ? "bg-blue-500 text-white ml-10" : "bg-white text-blue-900 mr-10"}
                prose prose-blue max-w-xs sm:max-w-md
              `}
              style={{ maxWidth: isMobile ? "82vw" : "78%" }}
            >
              <ReactMarkdown>{msg.content}</ReactMarkdown>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form
        className="flex gap-2 p-4 border-t border-blue-200 bg-blue-100/50 rounded-b-2xl"
        onSubmit={e => {
          e.preventDefault();
          sendMessage();
        }}
      >
        <input
          className="border border-blue-300 rounded-lg p-2 flex-1 focus:ring-2 focus:ring-blue-400 outline-none text-base"
          type="text"
          value={input}
          disabled={loading}
          placeholder="Type your question here..."
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => {
            if (e.key === "Enter" && !e.shiftKey) sendMessage();
          }}
        />
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-2 font-semibold transition"
          disabled={loading || !input.trim()}
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
}
