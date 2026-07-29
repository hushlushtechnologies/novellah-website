// components/ui/ChatbotButton.tsx
"use client";

import { Bot } from "lucide-react";

export function ChatbotButton() {
  return (
    <button
      type="button"
      aria-label="Open chat assistant"
      onClick={() => {
        // wire up your chatbot open logic here
      }}
      className="fixed bottom-10 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform hover:scale-105"
    >
      <Bot size={24} />
    </button>
  );
}