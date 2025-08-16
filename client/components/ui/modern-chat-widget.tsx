import { useState, useRef, useEffect } from "react";
import {
  MessageCircle,
  Send,
  X,
  Minimize2,
  Maximize2,
  Clock,
  Settings,
  Phone,
  Video,
  MoreHorizontal,
  Paperclip,
  Smile,
  Image as ImageIcon,
  Check,
  CheckCheck,
  Bot,
  User,
  Zap,
  HelpCircle,
  Star,
  ThumbsUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface Message {
  id: string;
  sender: "user" | "agent" | "system" | "bot";
  content: string;
  timestamp: Date;
  status: "sending" | "sent" | "delivered" | "read";
  type: "text" | "image" | "file";
  avatar?: string;
  agentName?: string;
}

interface ChatAgent {
  id: string;
  name: string;
  role: string;
  avatar: string;
  isOnline: boolean;
  responseTime: string;
  rating: number;
}

interface ModernChatWidgetProps {
  className?: string;
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  theme?: {
    primaryColor?: string;
    secondaryColor?: string;
    backgroundColor?: string;
    textColor?: string;
  };
  showQuickActions?: boolean;
  showSettings?: boolean;
}

export function ModernChatWidget({
  className,
  position = "bottom-right",
  theme = {
    primaryColor: "#2563eb",
    secondaryColor: "#f59e0b",
    backgroundColor: "#ffffff",
    textColor: "#1f2937",
  },
  showQuickActions = true,
  showSettings = false,
}: ModernChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const currentAgent: ChatAgent = {
    id: "agent-1",
    name: "Sarah Johnson",
    role: "Senior Support Specialist",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b332c3f2?w=150&h=150&fit=crop&crop=face",
    isOnline: true,
    responseTime: "< 2 min",
    rating: 4.9,
  };

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "system",
      content:
        "👋 Welcome to ShipNexa Support! I'm here to help you with all your shipping needs. How can I assist you today?",
      timestamp: new Date(Date.now() - 1000 * 60 * 2),
      status: "read",
      type: "text",
    },
    {
      id: "2",
      sender: "agent",
      content:
        "Hi there! I'm Sarah, your dedicated support specialist. I'm ready to help with tracking, quotes, or any questions about our services. What would you like to know?",
      timestamp: new Date(Date.now() - 1000 * 60 * 1),
      status: "read",
      type: "text",
      agentName: currentAgent.name,
      avatar: currentAgent.avatar,
    },
  ]);

  const quickActions = [
    { id: "track", label: "Track Shipment", icon: <Zap className="h-4 w-4" /> },
    { id: "quote", label: "Get Quote", icon: <HelpCircle className="h-4 w-4" /> },
    { id: "support", label: "General Help", icon: <User className="h-4 w-4" /> },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!isOpen && messages.length > 2) {
      setUnreadCount(messages.length - 2);
    } else {
      setUnreadCount(0);
    }
  }, [isOpen, messages.length]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: Date.now().toString(),
        sender: "user",
        content: newMessage,
        timestamp: new Date(),
        status: "sending",
        type: "text",
      };

      setMessages((prev) => [...prev, message]);
      setNewMessage("");

      // Update status to sent
      setTimeout(() => {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === message.id ? { ...msg, status: "sent" } : msg
          )
        );
      }, 500);

      // Update status to delivered
      setTimeout(() => {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === message.id ? { ...msg, status: "delivered" } : msg
          )
        );
      }, 1000);

      // Simulate agent response
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        // Update user message to read
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === message.id ? { ...msg, status: "read" } : msg
          )
        );

        const agentResponse: Message = {
          id: (Date.now() + 1).toString(),
          sender: "agent",
          content:
            "Thank you for your message! I'm reviewing the details and will provide you with assistance right away. Let me help you with that. 🚀",
          timestamp: new Date(),
          status: "delivered",
          type: "text",
          agentName: currentAgent.name,
          avatar: currentAgent.avatar,
        };
        setMessages((prev) => [...prev, agentResponse]);
      }, 2000);
    }
  };

  const handleQuickAction = (actionId: string) => {
    const actionTexts = {
      track: "I need help tracking my shipment",
      quote: "Can you provide me with a shipping quote?",
      support: "I need general support and assistance",
    };
    setNewMessage(actionTexts[actionId as keyof typeof actionTexts] || "");
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const getStatusIcon = (status: Message["status"]) => {
    switch (status) {
      case "sending":
        return <Clock className="h-3 w-3 text-gray-400 animate-spin" />;
      case "sent":
        return <Check className="h-3 w-3 text-gray-400" />;
      case "delivered":
        return <CheckCheck className="h-3 w-3 text-gray-400" />;
      case "read":
        return <CheckCheck className="h-3 w-3 text-blue-500" />;
      default:
        return null;
    }
  };

  const getPositionClasses = () => {
    switch (position) {
      case "bottom-left":
        return "bottom-6 left-6";
      case "top-right":
        return "top-6 right-6";
      case "top-left":
        return "top-6 left-6";
      default:
        return "bottom-6 right-6";
    }
  };

  // Floating chat button
  if (!isOpen) {
    return (
      <TooltipProvider>
        <div className={cn("fixed z-50", getPositionClasses(), className)}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={() => setIsOpen(true)}
                className={cn(
                  "relative h-16 w-16 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 group"
                )}
                style={{
                  background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
                  color: theme.backgroundColor,
                }}
              >
                <MessageCircle className="h-7 w-7 transition-transform group-hover:scale-110" />

                {/* Unread count badge */}
                {unreadCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-red-500 text-white border-2 border-white text-xs flex items-center justify-center">
                    {unreadCount > 9 ? "9+" : unreadCount}
                  </Badge>
                )}

                {/* Online indicator */}
                <div className="absolute -bottom-1 -right-1 h-5 w-5 bg-green-500 rounded-full border-2 border-white">
                  <div className="h-full w-full bg-green-500 rounded-full opacity-100"></div>
                </div>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left" className="mr-4">
              <p>Chat with our support team</p>
              {currentAgent.isOnline && (
                <p className="text-xs text-green-600">
                  {currentAgent.name} is online • Avg response: {currentAgent.responseTime}
                </p>
              )}
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    );
  }

  // Chat interface
  return (
    <div className={cn("fixed z-50", getPositionClasses(), className)}>
      <Card
        className={cn(
          "shadow-2xl border-0 transition-all duration-300 backdrop-blur-sm",
          isFullscreen 
            ? "fixed inset-4 w-auto h-auto" 
            : isMinimized 
              ? "w-80 h-20" 
              : "w-96 h-[600px]"
        )}
        style={{ backgroundColor: theme.backgroundColor }}
      >
        {/* Header */}
        <CardHeader
          className="border-b-0 p-4 rounded-t-lg"
          style={{
            background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
            color: theme.backgroundColor,
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Avatar className="h-10 w-10 border-2 border-white/20">
                  <AvatarImage src={currentAgent.avatar} alt={currentAgent.name} />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
                {currentAgent.isOnline && (
                  <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 rounded-full border-2 border-white">
                    <div className="h-full w-full bg-green-500 rounded-full animate-ping opacity-75"></div>
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm truncate">ShipNexa Support</h3>
                <p className="text-xs opacity-90 truncate">
                  {isTyping ? (
                    <span className="flex items-center">
                      <span className="mr-1">●</span>
                      {currentAgent.name} is typing...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Star className="h-3 w-3 mr-1 text-yellow-300" />
                      {currentAgent.name} • {currentAgent.rating} rating
                    </span>
                  )}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 text-white/80 hover:text-white hover:bg-white/10"
                    >
                      <Phone className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>Call support</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 text-white/80 hover:text-white hover:bg-white/10"
                    >
                      <Video className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>Video call</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="h-8 w-8 p-0 text-white/80 hover:text-white hover:bg-white/10"
              >
                <Maximize2 className="h-4 w-4" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="h-8 w-8 p-0 text-white/80 hover:text-white hover:bg-white/10"
              >
                <Minimize2 className="h-4 w-4" />
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 text-white/80 hover:text-white hover:bg-white/10"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link to="/contact">Email Support</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/help">Help Center</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setIsOpen(false)}>
                    Close Chat
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <>
            {/* Messages Area */}
            <ScrollArea className={cn("p-4", isFullscreen ? "h-[calc(100vh-200px)]" : "h-[400px]")}>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex",
                      message.sender === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    <div
                      className={cn(
                        "flex items-end space-x-2 max-w-[80%]",
                        message.sender === "user" && "flex-row-reverse space-x-reverse"
                      )}
                    >
                      {message.sender !== "user" && (
                        <Avatar className="h-7 w-7 mb-1">
                          <AvatarImage src={message.avatar} />
                          <AvatarFallback>
                            {message.sender === "agent" ? "A" : message.sender === "bot" ? "B" : "S"}
                          </AvatarFallback>
                        </Avatar>
                      )}

                      <div className="space-y-1">
                        {message.sender === "agent" && message.agentName && (
                          <p className="text-xs text-gray-500 px-3">
                            {message.agentName} • {formatTime(message.timestamp)}
                          </p>
                        )}
                        
                        <div
                          className={cn(
                            "rounded-2xl px-4 py-3 text-sm shadow-sm",
                            message.sender === "user" && "text-white",
                            message.sender === "system" && "bg-blue-50 text-blue-800 border border-blue-200",
                            message.sender === "agent" && "bg-gray-50 text-gray-900 border border-gray-200",
                            message.sender === "bot" && "bg-purple-50 text-purple-800 border border-purple-200"
                          )}
                          style={
                            message.sender === "user"
                              ? {
                                  background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
                                }
                              : {}
                          }
                        >
                          <p className="leading-relaxed">{message.content}</p>
                          
                          {message.sender === "user" && (
                            <div className="flex items-center justify-end space-x-2 mt-2">
                              <span className="text-xs text-white/70">
                                {formatTime(message.timestamp)}
                              </span>
                              {getStatusIcon(message.status)}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-end space-x-2">
                      <Avatar className="h-7 w-7 mb-1">
                        <AvatarImage src={currentAgent.avatar} />
                        <AvatarFallback>A</AvatarFallback>
                      </Avatar>
                      <div className="bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div 
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          />
                          <div 
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Quick Actions */}
            {showQuickActions && messages.length <= 2 && (
              <div className="px-4 pb-3">
                <p className="text-xs text-gray-500 mb-2">Quick actions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickActions.map((action) => (
                    <Button
                      key={action.id}
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickAction(action.id)}
                      className="h-8 text-xs border-gray-200 hover:border-gray-300"
                    >
                      {action.icon}
                      <span className="ml-1">{action.label}</span>
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Message Input */}
            <div className="border-t bg-gray-50/50 p-4 rounded-b-lg">
              <div className="flex items-end space-x-2">
                <div className="flex-1 space-y-2">
                  <div className="flex space-x-1">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Paperclip className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Attach file</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <ImageIcon className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Send image</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Smile className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Add emoji</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Textarea
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="min-h-[44px] max-h-[120px] resize-none border-gray-200 focus:border-gray-300"
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          handleSendMessage();
                        }
                      }}
                    />
                    <Button
                      onClick={handleSendMessage}
                      disabled={!newMessage.trim()}
                      className="h-11 w-11 p-0 rounded-full"
                      style={{
                        background: newMessage.trim() 
                          ? `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor})`
                          : undefined,
                      }}
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                <span>Powered by ShipNexa Support</span>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 px-2 text-xs hover:bg-green-50 hover:text-green-600"
                  >
                    <ThumbsUp className="h-3 w-3 mr-1" />
                    Helpful
                  </Button>
                  <Link 
                    to="/contact"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    More help →
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
}
