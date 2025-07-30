"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const suggestedQuestions = [
  "What is Parth’s greatest achievement?",
  "Tell me about Parth’s product management style.",
  "What’s a fun fact about Parth?",
  "Describe Parth’s leadership experience.",
  "What does Parth do for fun?",
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! I'm Parth's AI Assistant. Ask me anything about Parth’s experience, projects, or skills!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

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

    const reply =
      data.choices?.[0]?.message?.content ||
      data.error ||
      JSON.stringify(data) ||
      "Sorry, something went wrong!";
    setMessages([...newMessages, { role: "assistant", content: reply }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Floating Avatar Button */}
      {!open && (
        <motion.button
          aria-label="Open Chatbot"
          onClick={() => setOpen(true)}
          className="rounded-full shadow-2xl border-4 border-blue-500 bg-white hover:scale-105 transition-all relative"
          style={{
            width: 68,
            height: 68,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          whileHover={{ scale: 1.1 }}
        >
          {/* Animated glowing ring */}
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="block w-[64px] h-[64px] rounded-full bg-blue-400/30 blur-lg animate-pulse"></span>
          </span>
          <Image
            src="/avatar.png"
            alt="Chatbot Avatar"
            width={60}
            height={60}
            className="rounded-full relative z-10"
            priority
          />
        </motion.button>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, y: 50, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="backdrop-blur-xl bg-white/80 border border-blue-100 rounded-2xl shadow-2xl p-0 max-w-full flex flex-col"
            style={{
              minWidth: 350,
              maxWidth: 410,
              minHeight: 440,
            }}
          >
            <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 rounded-t-2xl border-b border-blue-100">
              <div className="flex items-center gap-2">
                <span className="relative flex h-8 w-8">
                  {/* Animated avatar ring */}
                  <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-blue-400/40 opacity-75"></span>
                  <Image
                    src="/avatar.png"
                    alt="Chatbot Avatar"
                    width={32}
                    height={32}
                    className="rounded-full border-2 border-blue-500 z-10"
                    priority
                  />
                  {/* Status dot */}
                  <span className={`absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white ${loading ? "bg-orange-400" : "bg-green-500"}`}></span>
                </span>
                <span className="font-bold text-blue-900 text-lg tracking-tight">Parth’s AI</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-2xl text-gray-500 hover:text-blue-500 px-2 font-bold transition"
                title="Close"
              >×</button>
            </div>

            {/* Suggested Questions */}
            <div className="flex flex-wrap gap-2 justify-center p-3 pb-1">
              {suggestedQuestions.map((q) => (
                <button
                  key={q}
                  className="bg-blue-200/80 hover:bg-blue-400/80 text-blue-900 text-xs rounded-full px-4 py-1 font-semibold shadow transition"
                  onClick={() => sendMessage(q)}
                  disabled={loading}
                  type="button"
                >
                  {q}
                </button>
              ))}
            </div>
            {/* Chat messages */}
            <div className="h-56 overflow-y-auto border mx-3 p-3 rounded-xl bg-blue-50/70 space-y-4 mb-2">
              <AnimatePresence initial={false}>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15, delay: 0.04 * i }}
                    className={
                      msg.role === "user"
                        ? "flex justify-end items-center"
                        : "flex items-center"
                    }
                    style={{ marginBottom: "0.3rem" }}
                  >
                    {msg.role === "assistant" && (
                      <Image
                        src="/avatar.png"
                        alt="AI Avatar"
                        width={28}
                        height={28}
                        className="rounded-full border border-blue-300 mr-2"
                      />
                    )}
                    <span
                      className={
                        msg.role === "user"
                          ? "font-semibold text-blue-600 bg-blue-100 px-3 py-2 rounded-xl shadow-md"
                          : "font-semibold text-gray-800 bg-white/90 px-3 py-2 rounded-xl shadow-md"
                      }
                      style={{ maxWidth: "75%", lineHeight: "1.7" }}
                    >
                      {msg.content}
                    </span>
                  </motion.div>
                ))}
                {loading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-gray-500 mt-2"
                  >
                    Typing…
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </AnimatePresence>
            </div>
            <form
              className="flex gap-2 px-3 pb-4"
              onSubmit={e => {
                e.preventDefault();
                sendMessage();
              }}
            >
              <input
                className="border rounded-lg p-2 flex-1 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                type="text"
                value={input}
                disabled={loading}
                placeholder="Type your question here..."
                onChange={e => setInput(e.target.value)}
              />
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-5 py-2 shadow font-bold transition"
                disabled={loading || !input}
                type="submit"
              >
                Send
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
