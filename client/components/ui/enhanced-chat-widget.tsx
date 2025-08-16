import { useState, useRef, useEffect } from "react";
import {
  MessageCircle,
  Send,
  X,
  Minimize2,
  User,
  Clock,
  Settings,
  ExternalLink,
  Bot,
  Headphones,
  Zap,
  Shield,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { 
  ChatIntegrationConfig, 
  defaultChatConfig, 
  ChatIntegrations, 
  chatProviderConfigs 
} from "./chat-integrations";

interface Message {
  id: string;
  sender: "user" | "agent" | "system";
  content: string;
  timestamp: Date;
  status: "sent" | "delivered" | "read";
}

interface EnhancedChatWidgetProps {
  config?: Partial<ChatIntegrationConfig>;
  onConfigChange?: (config: ChatIntegrationConfig) => void;
  showSettings?: boolean;
}

export function EnhancedChatWidget({ 
  config = {}, 
  onConfigChange,
  showSettings = false 
}: EnhancedChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showSettingsPanel, setShowSettingsPanel] = useState(false);
  const [currentConfig, setCurrentConfig] = useState<ChatIntegrationConfig>({
    ...defaultChatConfig,
    ...config,
  });

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "system",
      content: currentConfig.welcomeMessage || "👋 Welcome to GlobalTrack Support! How can we help you today?",
      timestamp: new Date(),
      status: "read",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize the selected chat provider
  useEffect(() => {
    if (currentConfig.provider !== 'internal' && currentConfig.enabled) {
      const integration = ChatIntegrations[currentConfig.provider];
      if (integration) {
        integration(currentConfig);
      }
    }
  }, [currentConfig]);

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

      // Simulate agent response for internal chat
      if (currentConfig.provider === 'internal') {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          const agentResponse: Message = {
            id: (Date.now() + 1).toString(),
            sender: "agent",
            content: isOnline 
              ? "Thank you for your message! I'll help you right away. For more detailed assistance, please visit our full chat page."
              : currentConfig.offlineMessage || "We are currently offline. Please leave a message and we will get back to you.",
            timestamp: new Date(),
            status: "delivered",
          };
          setMessages((prev) => [...prev, agentResponse]);
        }, 1500);
      }
    }
  };

  const handleConfigChange = (newConfig: Partial<ChatIntegrationConfig>) => {
    const updatedConfig = { ...currentConfig, ...newConfig };
    setCurrentConfig(updatedConfig);
    onConfigChange?.(updatedConfig);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const getProviderIcon = (provider: string) => {
    switch (provider) {
      case 'internal': return <Headphones className="h-4 w-4" />;
      case 'chatway': return <MessageCircle className="h-4 w-4" />;
      case 'smartsupp': return <Bot className="h-4 w-4" />;
      case 'tidio': return <Zap className="h-4 w-4" />;
      case 'intercom': return <Shield className="h-4 w-4" />;
      default: return <Globe className="h-4 w-4" />;
    }
  };

  // If external provider is enabled and configured, don't show internal widget
  if (currentConfig.provider !== 'internal' && currentConfig.enabled) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        {showSettings && (
          <Button
            onClick={() => setShowSettingsPanel(true)}
            className="mb-2 bg-gray-600 hover:bg-gray-700 text-white rounded-full p-3 shadow-lg"
            title="Chat Settings"
          >
            <Settings className="h-4 w-4" />
          </Button>
        )}
        
        {/* External provider notification */}
        <div className="bg-white rounded-lg shadow-lg p-3 mb-2 max-w-xs">
          <div className="flex items-center space-x-2">
            {getProviderIcon(currentConfig.provider)}
            <span className="text-sm font-medium">
              {chatProviderConfigs[currentConfig.provider]?.name} Active
            </span>
          </div>
          <p className="text-xs text-gray-600 mt-1">
            Chat widget powered by {chatProviderConfigs[currentConfig.provider]?.name}
          </p>
        </div>
      </div>
    );
  }

  // Floating chat button for internal chat
  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        {showSettings && (
          <Button
            onClick={() => setShowSettingsPanel(true)}
            className="mb-2 bg-gray-600 hover:bg-gray-700 text-white rounded-full p-3 shadow-lg"
            title="Chat Settings"
          >
            <Settings className="h-4 w-4" />
          </Button>
        )}
        
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          style={{
            backgroundColor: currentConfig.theme?.primaryColor || '#2563eb',
            color: currentConfig.theme?.textColor || '#ffffff'
          }}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
        <div className={`absolute -top-2 -left-2 w-4 h-4 border-2 border-white rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'}`}></div>
        <div className="absolute -top-8 right-0 bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity">
          {isOnline ? 'Online - Chat with us!' : 'Offline - Leave a message'}
        </div>

        {/* Settings Panel */}
        {showSettingsPanel && (
          <div className="absolute bottom-20 right-0 w-80 bg-white rounded-lg shadow-2xl border z-60">
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Chat Settings</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowSettingsPanel(false)}
                  className="h-6 w-6 p-0"
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            </div>
            
            <div className="p-4 max-h-96 overflow-y-auto">
              <Tabs defaultValue="provider" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="provider">Provider</TabsTrigger>
                  <TabsTrigger value="appearance">Appearance</TabsTrigger>
                </TabsList>
                
                <TabsContent value="provider" className="space-y-4">
                  <div>
                    <Label htmlFor="provider-select">Chat Provider</Label>
                    <Select
                      value={currentConfig.provider}
                      onValueChange={(value) => handleConfigChange({ provider: value as any })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="internal">Internal Chat</SelectItem>
                        {Object.entries(chatProviderConfigs).map(([key, provider]) => (
                          <SelectItem key={key} value={key}>
                            {provider.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {currentConfig.provider !== 'internal' && (
                    <div className="space-y-3">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-800 mb-2">
                          To use {chatProviderConfigs[currentConfig.provider]?.name}, you need to:
                        </p>
                        <ol className="text-sm text-blue-700 list-decimal list-inside space-y-1">
                          <li>Create an account at {chatProviderConfigs[currentConfig.provider]?.name}</li>
                          <li>Get your API credentials</li>
                          <li>Enter them below</li>
                        </ol>
                        <a
                          href={chatProviderConfigs[currentConfig.provider]?.setupUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center mt-2 text-blue-600 hover:text-blue-800"
                        >
                          Visit {chatProviderConfigs[currentConfig.provider]?.name} <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </div>
                      
                      {chatProviderConfigs[currentConfig.provider]?.fields.includes('apiKey') && (
                        <div>
                          <Label htmlFor="api-key">API Key</Label>
                          <Input
                            id="api-key"
                            type="password"
                            placeholder="Enter your API key"
                            value={currentConfig.apiKey || ''}
                            onChange={(e) => handleConfigChange({ apiKey: e.target.value })}
                          />
                        </div>
                      )}
                      
                      {chatProviderConfigs[currentConfig.provider]?.fields.includes('widgetId') && (
                        <div>
                          <Label htmlFor="widget-id">Widget ID</Label>
                          <Input
                            id="widget-id"
                            placeholder="Enter your widget ID"
                            value={currentConfig.widgetId || ''}
                            onChange={(e) => handleConfigChange({ widgetId: e.target.value })}
                          />
                        </div>
                      )}
                      
                      {chatProviderConfigs[currentConfig.provider]?.fields.includes('siteId') && (
                        <div>
                          <Label htmlFor="site-id">Site ID</Label>
                          <Input
                            id="site-id"
                            placeholder="Enter your site ID"
                            value={currentConfig.siteId || ''}
                            onChange={(e) => handleConfigChange({ siteId: e.target.value })}
                          />
                        </div>
                      )}
                      
                      {chatProviderConfigs[currentConfig.provider]?.fields.includes('appId') && (
                        <div>
                          <Label htmlFor="app-id">App ID</Label>
                          <Input
                            id="app-id"
                            placeholder="Enter your app ID"
                            value={currentConfig.appId || ''}
                            onChange={(e) => handleConfigChange({ appId: e.target.value })}
                          />
                        </div>
                      )}
                    </div>
                  )}

                  <div className="flex items-center space-x-2">
                    <Switch
                      id="enabled"
                      checked={currentConfig.enabled}
                      onCheckedChange={(checked) => handleConfigChange({ enabled: checked })}
                    />
                    <Label htmlFor="enabled">Enable Chat Widget</Label>
                  </div>
                </TabsContent>
                
                <TabsContent value="appearance" className="space-y-4">
                  <div>
                    <Label htmlFor="position">Position</Label>
                    <Select
                      value={currentConfig.position}
                      onValueChange={(value) => handleConfigChange({ position: value as any })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bottom-right">Bottom Right</SelectItem>
                        <SelectItem value="bottom-left">Bottom Left</SelectItem>
                        <SelectItem value="top-right">Top Right</SelectItem>
                        <SelectItem value="top-left">Top Left</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="primary-color">Primary Color</Label>
                    <Input
                      id="primary-color"
                      type="color"
                      value={currentConfig.theme?.primaryColor || '#2563eb'}
                      onChange={(e) => handleConfigChange({ 
                        theme: { 
                          ...currentConfig.theme, 
                          primaryColor: e.target.value 
                        } 
                      })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="welcome-message">Welcome Message</Label>
                    <Input
                      id="welcome-message"
                      placeholder="Enter welcome message"
                      value={currentConfig.welcomeMessage || ''}
                      onChange={(e) => handleConfigChange({ welcomeMessage: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="show-avatar"
                        checked={currentConfig.customization?.showAvatar ?? true}
                        onCheckedChange={(checked) => handleConfigChange({ 
                          customization: { 
                            ...currentConfig.customization, 
                            showAvatar: checked 
                          } 
                        })}
                      />
                      <Label htmlFor="show-avatar">Show Avatar</Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="sound-enabled"
                        checked={currentConfig.customization?.soundEnabled ?? true}
                        onCheckedChange={(checked) => handleConfigChange({ 
                          customization: { 
                            ...currentConfig.customization, 
                            soundEnabled: checked 
                          } 
                        })}
                      />
                      <Label htmlFor="sound-enabled">Sound Notifications</Label>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Internal chat widget interface
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card
        className={`w-80 shadow-2xl transition-all duration-300 ${
          isMinimized ? "h-16" : "h-96"
        }`}
      >
        {/* Chat Header */}
        <CardHeader 
          className="text-white rounded-t-lg p-4"
          style={{ 
            backgroundColor: currentConfig.theme?.primaryColor || '#2563eb',
            backgroundImage: `linear-gradient(45deg, ${currentConfig.theme?.primaryColor || '#2563eb'}, ${currentConfig.theme?.primaryColor || '#f59e0b'})`
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {currentConfig.customization?.showAvatar && (
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b332c3f2?w=150&h=150&fit=crop&crop=face" />
                  <AvatarFallback>GT</AvatarFallback>
                </Avatar>
              )}
              <div>
                <h3 className="font-semibold text-sm">GlobalTrack Support</h3>
                <p className="text-xs opacity-90">
                  {isTyping ? "Typing..." : isOnline ? "Online" : "Offline"}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              {showSettings && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowSettingsPanel(!showSettingsPanel)}
                  className="text-white hover:bg-white/10 h-6 w-6 p-0"
                >
                  <Settings className="h-3 w-3" />
                </Button>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white hover:bg-white/10 h-6 w-6 p-0"
              >
                <Minimize2 className="h-3 w-3" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/10 h-6 w-6 p-0"
              >
                <X className="h-3 w-3" />
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
                          ? "text-white"
                          : message.sender === "system"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-900"
                      }`}
                      style={message.sender === "user" ? {
                        backgroundColor: currentConfig.theme?.primaryColor || '#2563eb'
                      } : {}}
                    >
                      <p>{message.content}</p>
                      {currentConfig.customization?.showTimestamp && (
                        <p
                          className={`text-xs mt-1 ${
                            message.sender === "user"
                              ? "text-white/70"
                              : "text-gray-500"
                          }`}
                        >
                          {formatTime(message.timestamp)}
                        </p>
                      )}
                    </div>
                  </div>
                ))}

                {isTyping && currentConfig.customization?.showTypingIndicator && (
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
                  style={{ 
                    backgroundColor: currentConfig.theme?.primaryColor || '#2563eb'
                  }}
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
