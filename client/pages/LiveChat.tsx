import { useState, useRef, useEffect } from "react";
import {
  Send,
  Paperclip,
  Smile,
  Phone,
  Video,
  MoreVertical,
  User,
  Clock,
  CheckCheck,
  Bot,
  FileText,
  Image,
  Download,
  Minimize2,
  Maximize2,
  Star,
  ThumbsUp,
  ThumbsDown,
  HelpCircle,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Message {
  id: string;
  sender: "user" | "agent" | "system";
  content: string;
  timestamp: Date;
  status: "sent" | "delivered" | "read";
  type: "text" | "file" | "image";
  fileUrl?: string;
  fileName?: string;
}

interface SupportAgent {
  id: string;
  name: string;
  role: string;
  avatar: string;
  isOnline: boolean;
  rating: number;
  responseTime: string;
}

export default function LiveChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "system",
      content:
        "Welcome to GlobalTrack Logistics support! How can we help you today?",
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
      status: "read",
      type: "text",
    },
    {
      id: "2",
      sender: "agent",
      content:
        "Hi there! I'm Sarah, your dedicated support specialist. I see you're interested in our shipping services. What specific questions do you have about your logistics needs?",
      timestamp: new Date(Date.now() - 1000 * 60 * 4),
      status: "read",
      type: "text",
    },
    {
      id: "3",
      sender: "user",
      content:
        "Hello! I need help with tracking my recent shipment GT240001. It seems to be delayed.",
      timestamp: new Date(Date.now() - 1000 * 60 * 3),
      status: "read",
      type: "text",
    },
    {
      id: "4",
      sender: "agent",
      content:
        "I'd be happy to help you track your shipment! Let me look up GT240001 for you right away. 📦",
      timestamp: new Date(Date.now() - 1000 * 60 * 2),
      status: "read",
      type: "text",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [selectedQuickResponse, setSelectedQuickResponse] = useState<
    string | null
  >(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const currentAgent: SupportAgent = {
    id: "agent-1",
    name: "Sarah Johnson",
    role: "Senior Support Specialist",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b332c3f2?w=150&h=150&fit=crop&crop=face",
    isOnline: true,
    rating: 4.9,
    responseTime: "< 2 min",
  };

  const quickResponses = [
    "Track my shipment",
    "Get shipping quote",
    "Delivery options",
    "Payment questions",
    "Schedule pickup",
    "Contact information",
  ];

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
        type: "text",
      };

      setMessages((prev) => [...prev, message]);
      setNewMessage("");

      // Simulate agent typing
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const agentResponse: Message = {
          id: (Date.now() + 1).toString(),
          sender: "agent",
          content:
            "Thank you for your message! I'm reviewing the details and will provide you with an update shortly. 💫",
          timestamp: new Date(),
          status: "delivered",
          type: "text",
        };
        setMessages((prev) => [...prev, agentResponse]);
      }, 2000);
    }
  };

  const handleQuickResponse = (response: string) => {
    setNewMessage(response);
    setSelectedQuickResponse(response);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const getMessageStatusIcon = (status: string) => {
    switch (status) {
      case "sent":
        return <Clock className="h-3 w-3 text-gray-400" />;
      case "delivered":
        return <CheckCheck className="h-3 w-3 text-gray-400" />;
      case "read":
        return <CheckCheck className="h-3 w-3 text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <section className="bg-gradient-to-r from-royal-600 via-royal-700 to-royal-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Live Support Chat
            </h1>
            <p className="text-xl text-gray-200 mb-6">
              Get instant help from our logistics experts • Available 24/7
            </p>
            <div className="flex justify-center items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Online Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm">Avg Response: &lt; 2 min</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-yellow-400" />
                <span className="text-sm">4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Agent Info */}
              <Card className="border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">
                    Your Support Specialist
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="relative">
                      <Avatar className="h-12 w-12">
                        <AvatarImage
                          src={currentAgent.avatar}
                          alt={currentAgent.name}
                        />
                        <AvatarFallback>SJ</AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {currentAgent.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {currentAgent.role}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <Badge className="bg-green-100 text-green-800">
                        Online
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rating:</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1">{currentAgent.rating}</span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Response Time:</span>
                      <span className="font-medium">
                        {currentAgent.responseTime}
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-2 mt-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Phone className="h-4 w-4 mr-2" />
                      Call
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Video className="h-4 w-4 mr-2" />
                      Video
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {quickResponses.map((response, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuickResponse(response)}
                        className="w-full justify-start text-left h-auto py-2 px-3"
                      >
                        <Zap className="h-4 w-4 mr-2 text-orange-500" />
                        {response}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Help Resources */}
              <Card className="border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Help Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <a
                      href="/help"
                      className="flex items-center p-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <HelpCircle className="h-5 w-5 mr-3 text-blue-600" />
                      <span className="text-sm">FAQ</span>
                    </a>
                    <a
                      href="/track"
                      className="flex items-center p-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <FileText className="h-5 w-5 mr-3 text-green-600" />
                      <span className="text-sm">Track Shipment</span>
                    </a>
                    <a
                      href="/services"
                      className="flex items-center p-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Bot className="h-5 w-5 mr-3 text-purple-600" />
                      <span className="text-sm">Service Guide</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Chat Interface */}
            <div className="lg:col-span-3">
              <Card
                className={`border-0 shadow-2xl transition-all duration-300 ${isMinimized ? "h-16" : "h-[600px]"}`}
              >
                {/* Chat Header */}
                <CardHeader className="border-b bg-gradient-to-r from-royal-600 to-orange-500 text-white rounded-t-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Avatar className="h-8 w-8">
                          <AvatarImage
                            src={currentAgent.avatar}
                            alt={currentAgent.name}
                          />
                          <AvatarFallback>SJ</AvatarFallback>
                        </Avatar>
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 border border-white rounded-full"></div>
                      </div>
                      <div>
                        <h3 className="font-semibold">GlobalTrack Support</h3>
                        <p className="text-xs opacity-90">
                          {isTyping
                            ? "Typing..."
                            : `${currentAgent.name} is online`}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsMinimized(!isMinimized)}
                        className="text-white hover:bg-white/10"
                      >
                        {isMinimized ? (
                          <Maximize2 className="h-4 w-4" />
                        ) : (
                          <Minimize2 className="h-4 w-4" />
                        )}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-white hover:bg-white/10"
                      >
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                {!isMinimized && (
                  <>
                    {/* Messages Area */}
                    <ScrollArea className="flex-1 p-4 h-[400px]">
                      <div className="space-y-4">
                        {messages.map((message) => (
                          <div
                            key={message.id}
                            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                          >
                            <div
                              className={`flex items-end space-x-2 max-w-xs lg:max-w-md ${
                                message.sender === "user"
                                  ? "flex-row-reverse space-x-reverse"
                                  : ""
                              }`}
                            >
                              {message.sender !== "user" &&
                                message.sender !== "system" && (
                                  <Avatar className="h-6 w-6 mb-1">
                                    <AvatarImage src={currentAgent.avatar} />
                                    <AvatarFallback>
                                      {message.sender === "agent" ? "A" : "S"}
                                    </AvatarFallback>
                                  </Avatar>
                                )}

                              <div
                                className={`rounded-2xl px-4 py-2 ${
                                  message.sender === "user"
                                    ? "bg-gradient-to-r from-royal-600 to-orange-500 text-white"
                                    : message.sender === "system"
                                      ? "bg-yellow-100 text-yellow-800 border border-yellow-200"
                                      : "bg-gray-100 text-gray-900"
                                }`}
                              >
                                <p className="text-sm">{message.content}</p>
                                <div
                                  className={`flex items-center space-x-1 mt-1 ${
                                    message.sender === "user"
                                      ? "justify-end"
                                      : "justify-start"
                                  }`}
                                >
                                  <span
                                    className={`text-xs ${
                                      message.sender === "user"
                                        ? "text-white/70"
                                        : "text-gray-500"
                                    }`}
                                  >
                                    {formatTime(message.timestamp)}
                                  </span>
                                  {message.sender === "user" &&
                                    getMessageStatusIcon(message.status)}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}

                        {isTyping && (
                          <div className="flex justify-start">
                            <div className="flex items-end space-x-2">
                              <Avatar className="h-6 w-6 mb-1">
                                <AvatarImage src={currentAgent.avatar} />
                                <AvatarFallback>A</AvatarFallback>
                              </Avatar>
                              <div className="bg-gray-100 rounded-2xl px-4 py-2">
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
                          </div>
                        )}
                        <div ref={messagesEndRef} />
                      </div>
                    </ScrollArea>

                    {/* Message Input */}
                    <div className="border-t p-4">
                      <div className="flex items-end space-x-2">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Button variant="ghost" size="sm">
                              <Paperclip className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Image className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Smile className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="flex space-x-2">
                            <Textarea
                              value={newMessage}
                              onChange={(e) => setNewMessage(e.target.value)}
                              placeholder="Type your message..."
                              className="min-h-[40px] max-h-[120px] resize-none"
                              onKeyPress={(e) => {
                                if (e.key === "Enter" && !e.shiftKey) {
                                  e.preventDefault();
                                  handleSendMessage();
                                }
                              }}
                            />
                            <Button
                              onClick={handleSendMessage}
                              disabled={!newMessage.trim()}
                              className="bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600"
                            >
                              <Send className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </Card>

              {/* Chat Rating */}
              {!isMinimized && (
                <Card className="border-0 shadow-lg mt-4">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        How is your chat experience?
                      </span>
                      <div className="flex space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-green-600 hover:bg-green-50"
                        >
                          <ThumbsUp className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-600 hover:bg-red-50"
                        >
                          <ThumbsDown className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-yellow-600 hover:bg-yellow-50"
                        >
                          <Star className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Why Choose Our Live Support?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  24/7 Availability
                </h3>
                <p className="text-gray-600">
                  Round-the-clock support whenever you need assistance
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Expert Specialists
                </h3>
                <p className="text-gray-600">
                  Logistics experts with years of industry experience
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Instant Solutions
                </h3>
                <p className="text-gray-600">
                  Quick responses and immediate problem resolution
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
