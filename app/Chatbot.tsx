"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Minimal suggestions
const suggestedQuestions = [
  "What is Parth’s greatest achievement?",
  "What does Parth do for fun?",
];

export default function Chatbot() {
  // Track if user has dismissed the chat
  const [open, setOpen] = useState(true);
  // Only pop up automatically on first load
  const [firstMount, setFirstMount] = useState(true);
  // Chat messages
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "👋 Hey! I'm Parth's AI Assistant. Ask me anything about Parth’s work, skills, or projects.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // On close, show minimized avatar after delay
  const handleClose = () => {
    setOpen(false);
    setFirstMount(false);
  };

  // If chat closed, allow reopening from floating avatar
  const handleReopen = () => {
    setOpen(true);
  };

  // Scroll to last message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  // Animation for first mount
  useEffect(() => {
    if (firstMount) setOpen(true);
  }, [firstMount]);

  // Chat logic
  const sendMessage = async (msgOverride?: string) => {
    const question = msgOverride ?? input;
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
    <div className="fixed bottom-8 right-8 z-50 select-none">
      {/* Minimized Avatar Bubble */}
      {!open && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 40 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <button
            aria-label="Open Chatbot"
            className="rounded-full shadow-lg border-4 border-blue-500 bg-white transition-all hover:scale-105 relative"
            style={{
              width: 68,
              height: 68,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={handleReopen}
          >
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>
            <Image
              src="/avatar.png"
              alt="Chatbot Avatar"
              width={54}
              height={54}
              className="rounded-full"
              priority
            />
          </button>
        </motion.div>
      )}

      {/* Main Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, y: 80, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="backdrop-blur-xl bg-gradient-to-br from-blue-50/90 to-white/80 border border-blue-200 rounded-3xl shadow-2xl px-0 pt-0 pb-2 max-w-full flex flex-col"
            style={{
              minWidth: 350,
              maxWidth: 410,
              minHeight: 400,
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 pt-3 pb-2 rounded-t-3xl border-b border-blue-100 bg-gradient-to-r from-blue-100 via-blue-50 to-white">
              <div className="flex items-center gap-2">
                <Image
                  src="/avatar.png"
                  alt="Chatbot Avatar"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-blue-500 shadow"
                  priority
                />
                <span className="font-bold text-blue-900 text-lg tracking-tight">
                  Parth’s AI
                </span>
              </div>
              <button
                onClick={handleClose}
                className="text-2xl text-gray-400 hover:text-blue-500 px-2 font-bold transition"
                title="Close"
              >×</button>
            </div>

            {/* Minimal Suggestions */}
            <div className="flex gap-2 justify-center px-4 pt-3 pb-2">
              {suggestedQuestions.map((q) => (
                <button
                  key={q}
                  className="bg-blue-200/80 hover:bg-blue-400/90 text-blue-900 text-xs rounded-full px-3 py-1 font-semibold shadow transition"
                  onClick={() => sendMessage(q)}
                  disabled={loading}
                  type="button"
                >
                  {q}
                </button>
              ))}
            </div>
            {/* Chat Area */}
            <div className="h-52 overflow-y-auto border mx-4 p-3 rounded-xl bg-white/90 space-y-4 mb-2">
              <AnimatePresence initial={false}>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18, delay: 0.03 * i }}
                    className={
                      msg.role === "user"
                        ? "flex justify-end items-center"
                        : "flex items-center"
                    }
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
                          ? "font-semibold text-blue-600 bg-blue-100 px-4 py-2 rounded-2xl shadow-md"
                          : "font-semibold text-gray-800 bg-blue-50/80 px-4 py-2 rounded-2xl shadow"
                      }
                      style={{
                        maxWidth: "75%",
                        lineHeight: "1.6",
                        fontSize: "1.02rem",
                        letterSpacing: 0.01,
                      }}
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
            {/* Input Area */}
            <form
              className="flex gap-2 px-4 pb-2"
              onSubmit={e => {
                e.preventDefault();
                sendMessage();
              }}
            >
              <input
                className="border rounded-lg p-2 flex-1 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
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
                <span className="inline-block align-middle mr-1">💬</span> Send
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
