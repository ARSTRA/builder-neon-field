import { useState, useRef, useEffect } from "react";
import {
  MessageCircle,
  Send,
  X,
  Minimize2,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";

interface Message {
  id: string;
  sender: "user" | "agent" | "system";
  content: string;
  timestamp: Date;
  status: "sent" | "delivered" | "read";
}

export function SimpleChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "system",
      content: "👋 Welcome to GlobalTrack Support! How can we help you today?",
      timestamp: new Date(),
      status: "read",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: Date.now().toString(),
        sender: "user",
        content: newMessage,
        timestamp: new Date(),
        status: "sent",
      };

      setMessages((prev) => [...prev, message]);
      setNewMessage("");

      // Simulate agent response
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const agentResponse: Message = {
          id: (Date.now() + 1).toString(),
          sender: "agent",
          content: isOnline 
            ? "Thank you for your message! I'll help you right away. For more detailed assistance, please visit our full chat page."
            : "We are currently offline. Please leave a message and we will get back to you.",
          timestamp: new Date(),
          status: "delivered",
        };
        setMessages((prev) => [...prev, agentResponse]);
      }, 1500);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  // Floating chat button
  if (!isOpen) {
    return (
      <div className="fixed bottom-20 right-4 sm:bottom-32 sm:right-6 z-40">
        <Button
          onClick={() => setIsOpen(true)}
          className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600 shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce touch-manipulation"
        >
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
        </Button>
        <div className={`absolute -top-1.5 -left-1.5 sm:-top-2 sm:-left-2 w-3 h-3 sm:w-4 sm:h-4 border-2 border-white rounded-full animate-pulse ${isOnline ? 'bg-green-500' : 'bg-red-500'}`}></div>
        <div className="absolute -top-6 sm:-top-8 right-0 bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity hidden sm:block">
          {isOnline ? 'Online - Chat with us!' : 'Offline - Leave a message'}
        </div>
      </div>
    );
  }

  // Chat widget interface
  return (
    <div className="fixed bottom-20 right-4 sm:bottom-32 sm:right-6 z-40">
      <Card
        className={`w-72 sm:w-80 shadow-2xl transition-all duration-300 ${
          isMinimized ? "h-14 sm:h-16" : "h-80 sm:h-96"
        }`}
      >
        {/* Chat Header */}
        <CardHeader
          className="text-white rounded-t-lg p-3 sm:p-4 bg-gradient-to-r from-royal-600 to-orange-500"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Avatar className="h-5 w-5 sm:h-6 sm:w-6">
                <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b332c3f2?w=150&h=150&fit=crop&crop=face" />
                <AvatarFallback className="text-xs">GT</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-xs sm:text-sm">GlobalTrack Support</h3>
                <p className="text-xs opacity-90">
                  {isTyping ? "Typing..." : isOnline ? "Online" : "Offline"}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white hover:bg-white/10 h-5 w-5 sm:h-6 sm:w-6 p-0 touch-manipulation"
              >
                <Minimize2 className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/10 h-5 w-5 sm:h-6 sm:w-6 p-0 touch-manipulation"
              >
                <X className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <>
            {/* Messages Area */}
            <ScrollArea className="h-60 p-3">
              <div className="space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-lg px-3 py-2 text-sm ${
                        message.sender === "user"
                          ? "bg-gradient-to-r from-royal-600 to-orange-500 text-white"
                          : message.sender === "system"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      <p>{message.content}</p>
                      <p
                        className={`text-xs mt-1 ${
                          message.sender === "user"
                            ? "text-white/70"
                            : "text-gray-500"
                        }`}
                      >
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-lg px-3 py-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Message Input */}
            <div className="border-t p-3">
              <div className="flex space-x-2">
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="text-sm"
                  disabled={!isOnline}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!newMessage.trim() || !isOnline}
                  size="sm"
                  className="bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600"
                >
                  <Send className="h-3 w-3" />
                </Button>
              </div>
              <div className="mt-2 text-center">
                <Link
                  to="/contact"
                  className="text-xs text-blue-600 hover:text-blue-800 underline"
                >
                  Contact our support team →
                </Link>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
}
