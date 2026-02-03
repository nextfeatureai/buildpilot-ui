import { useState } from "react";
import { Send, Sparkles, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const initialMessages: Message[] = [
  {
    id: "1",
    role: "assistant",
    content: "Hello! I'm your AI copilot. I've analyzed your recent uploads and customer feedback. Would you like me to suggest top features to prioritize this quarter?",
  },
];

export function AIChat() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };

    const aiResponse: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: "Based on your data, I recommend prioritizing the **Dashboard Redesign** feature. It has the highest impact score (92) and addresses 340+ customer requests. The estimated effort is medium, with a projected 15% increase in user engagement.",
    };

    setMessages([...messages, userMessage, aiResponse]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-6 py-4 border-b border-border/50 flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl gradient-primary flex items-center justify-center">
          <Sparkles className="h-5 w-5 text-white" />
        </div>
        <div>
          <h2 className="font-semibold">AI Decision Copilot</h2>
          <p className="text-sm text-muted-foreground">Ask anything about your product</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex gap-3",
              message.role === "user" && "flex-row-reverse"
            )}
          >
            <div
              className={cn(
                "h-8 w-8 rounded-full flex items-center justify-center shrink-0",
                message.role === "assistant"
                  ? "gradient-primary"
                  : "bg-muted"
              )}
            >
              {message.role === "assistant" ? (
                <Sparkles className="h-4 w-4 text-white" />
              ) : (
                <User className="h-4 w-4 text-muted-foreground" />
              )}
            </div>
            <div
              className={cn(
                "max-w-[80%] rounded-2xl px-4 py-3",
                message.role === "assistant"
                  ? "chat-bubble-ai"
                  : "chat-bubble-user"
              )}
            >
              <p className="text-sm leading-relaxed">{message.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border/50">
        <div className="flex gap-3 items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask about features, priorities, or data insights..."
            className="flex-1 h-12 px-4 rounded-xl bg-muted/50 border border-border/50 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
          <Button
            variant="hero"
            size="icon"
            className="h-12 w-12 rounded-xl"
            onClick={handleSend}
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
