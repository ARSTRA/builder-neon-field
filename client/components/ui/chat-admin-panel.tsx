import { useState, useEffect } from "react";
import {
  Settings,
  Save,
  RefreshCw,
  ExternalLink,
  Check,
  AlertCircle,
  Info,
  MessageCircle,
  Users,
  BarChart3,
  Clock,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  ChatIntegrationConfig, 
  defaultChatConfig, 
  chatProviderConfigs 
} from "./chat-integrations";

interface ChatStats {
  totalChats: number;
  activeChats: number;
  avgResponseTime: string;
  satisfaction: number;
  dailyChats: number;
  weeklyChats: number;
  monthlyChats: number;
}

export function ChatAdminPanel() {
  const [config, setConfig] = useState<ChatIntegrationConfig>(defaultChatConfig);
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [testConnection, setTestConnection] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');
  
  // Mock stats - in real app, fetch from API
  const [stats, setStats] = useState<ChatStats>({
    totalChats: 1247,
    activeChats: 8,
    avgResponseTime: "1.2 min",
    satisfaction: 4.8,
    dailyChats: 45,
    weeklyChats: 312,
    monthlyChats: 1247,
  });

  // Load saved configuration
  useEffect(() => {
    const savedConfig = localStorage.getItem('chat-config');
    if (savedConfig) {
      try {
        const parsed = JSON.parse(savedConfig);
        setConfig({ ...defaultChatConfig, ...parsed });
      } catch (error) {
        console.error('Failed to load chat config:', error);
      }
    }
  }, []);

  const handleConfigChange = (updates: Partial<ChatIntegrationConfig>) => {
    setConfig(prev => ({ ...prev, ...updates }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      // Save to localStorage (in real app, save to API)
      localStorage.setItem('chat-config', JSON.stringify(config));
      setLastSaved(new Date());
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error('Failed to save chat config:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleTestConnection = async () => {
    if (config.provider === 'internal') {
      setTestConnection('success');
      setTimeout(() => setTestConnection('idle'), 3000);
      return;
    }

    setTestConnection('testing');
    try {
      // Simulate testing external provider connection
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Check if required fields are filled
      const providerConfig = chatProviderConfigs[config.provider];
      const hasRequiredFields = providerConfig?.fields.every(field => {
        switch (field) {
          case 'apiKey': return !!config.apiKey;
          case 'widgetId': return !!config.widgetId;
          case 'siteId': return !!config.siteId;
          case 'appId': return !!config.appId;
          default: return true;
        }
      });

      setTestConnection(hasRequiredFields ? 'success' : 'error');
    } catch (error) {
      setTestConnection('error');
    }
    
    setTimeout(() => setTestConnection('idle'), 5000);
  };

  const getConnectionStatus = () => {
    switch (testConnection) {
      case 'testing':
        return <Badge variant="secondary"><RefreshCw className="h-3 w-3 mr-1 animate-spin" />Testing...</Badge>;
      case 'success':
        return <Badge variant="default" className="bg-green-600"><Check className="h-3 w-3 mr-1" />Connected</Badge>;
      case 'error':
        return <Badge variant="destructive"><AlertCircle className="h-3 w-3 mr-1" />Error</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Chat Management</h2>
          <p className="text-gray-600 mt-2">Configure and manage your customer support chat system</p>
        </div>
        <div className="flex items-center space-x-3">
          {getConnectionStatus()}
          <Button
            onClick={handleTestConnection}
            variant="outline"
            disabled={testConnection === 'testing'}
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${testConnection === 'testing' ? 'animate-spin' : ''}`} />
            Test Connection
          </Button>
          <Button
            onClick={handleSave}
            disabled={isSaving}
            className="bg-royal-600 hover:bg-royal-700"
          >
            {isSaving ? (
              <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <Save className="h-4 w-4 mr-2" />
            )}
            Save Changes
          </Button>
        </div>
      </div>

      {lastSaved && (
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            Configuration saved successfully on {lastSaved.toLocaleString()}
          </AlertDescription>
        </Alert>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <MessageCircle className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Chats</p>
                <p className="text-2xl font-bold text-gray-900">{stats.activeChats}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Daily Chats</p>
                <p className="text-2xl font-bold text-gray-900">{stats.dailyChats}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Avg Response</p>
                <p className="text-2xl font-bold text-gray-900">{stats.avgResponseTime}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Star className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Satisfaction</p>
                <p className="text-2xl font-bold text-gray-900">{stats.satisfaction}/5</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Configuration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Settings className="h-5 w-5 mr-2" />
            Chat Configuration
          </CardTitle>
          <p className="text-sm text-gray-600 mt-2">
            Configure chat settings for all customer-facing pages. These settings are managed centrally and do not expose configuration options to public users.
          </p>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="provider" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="provider">Provider</TabsTrigger>
              <TabsTrigger value="appearance">Appearance</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>

            <TabsContent value="provider" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="provider">Chat Provider</Label>
                  <Select
                    value={config.provider}
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
                  <p className="text-sm text-gray-600 mt-1">
                    Choose your chat service provider
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="enabled"
                    checked={config.enabled}
                    onCheckedChange={(checked) => handleConfigChange({ enabled: checked })}
                  />
                  <Label htmlFor="enabled">Enable Chat Widget</Label>
                </div>
              </div>

              {config.provider !== 'internal' && (
                <div className="space-y-4">
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                      Using {chatProviderConfigs[config.provider]?.name}. Configure your credentials below.
                      <a
                        href={chatProviderConfigs[config.provider]?.setupUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center ml-2 text-blue-600 hover:text-blue-800"
                      >
                        Visit {chatProviderConfigs[config.provider]?.name} <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </AlertDescription>
                  </Alert>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {chatProviderConfigs[config.provider]?.fields.includes('apiKey') && (
                      <div>
                        <Label htmlFor="api-key">API Key</Label>
                        <Input
                          id="api-key"
                          type="password"
                          placeholder="Enter your API key"
                          value={config.apiKey || ''}
                          onChange={(e) => handleConfigChange({ apiKey: e.target.value })}
                        />
                      </div>
                    )}
                    
                    {chatProviderConfigs[config.provider]?.fields.includes('widgetId') && (
                      <div>
                        <Label htmlFor="widget-id">Widget ID</Label>
                        <Input
                          id="widget-id"
                          placeholder="Enter your widget ID"
                          value={config.widgetId || ''}
                          onChange={(e) => handleConfigChange({ widgetId: e.target.value })}
                        />
                      </div>
                    )}
                    
                    {chatProviderConfigs[config.provider]?.fields.includes('siteId') && (
                      <div>
                        <Label htmlFor="site-id">Site ID</Label>
                        <Input
                          id="site-id"
                          placeholder="Enter your site ID"
                          value={config.siteId || ''}
                          onChange={(e) => handleConfigChange({ siteId: e.target.value })}
                        />
                      </div>
                    )}
                    
                    {chatProviderConfigs[config.provider]?.fields.includes('appId') && (
                      <div>
                        <Label htmlFor="app-id">App ID</Label>
                        <Input
                          id="app-id"
                          placeholder="Enter your app ID"
                          value={config.appId || ''}
                          onChange={(e) => handleConfigChange({ appId: e.target.value })}
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="appearance" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="position">Widget Position</Label>
                  <Select
                    value={config.position}
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
                  <div className="flex space-x-2">
                    <Input
                      id="primary-color"
                      type="color"
                      value={config.theme?.primaryColor || '#2563eb'}
                      onChange={(e) => handleConfigChange({ 
                        theme: { 
                          ...config.theme, 
                          primaryColor: e.target.value 
                        } 
                      })}
                      className="w-16"
                    />
                    <Input
                      value={config.theme?.primaryColor || '#2563eb'}
                      onChange={(e) => handleConfigChange({ 
                        theme: { 
                          ...config.theme, 
                          primaryColor: e.target.value 
                        } 
                      })}
                      placeholder="#2563eb"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Widget Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="show-avatar"
                      checked={config.customization?.showAvatar ?? true}
                      onCheckedChange={(checked) => handleConfigChange({ 
                        customization: { 
                          ...config.customization, 
                          showAvatar: checked 
                        } 
                      })}
                    />
                    <Label htmlFor="show-avatar">Show Avatar</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="show-typing"
                      checked={config.customization?.showTypingIndicator ?? true}
                      onCheckedChange={(checked) => handleConfigChange({ 
                        customization: { 
                          ...config.customization, 
                          showTypingIndicator: checked 
                        } 
                      })}
                    />
                    <Label htmlFor="show-typing">Typing Indicator</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="sound-enabled"
                      checked={config.customization?.soundEnabled ?? true}
                      onCheckedChange={(checked) => handleConfigChange({ 
                        customization: { 
                          ...config.customization, 
                          soundEnabled: checked 
                        } 
                      })}
                    />
                    <Label htmlFor="sound-enabled">Sound Notifications</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="show-timestamp"
                      checked={config.customization?.showTimestamp ?? true}
                      onCheckedChange={(checked) => handleConfigChange({ 
                        customization: { 
                          ...config.customization, 
                          showTimestamp: checked 
                        } 
                      })}
                    />
                    <Label htmlFor="show-timestamp">Show Timestamps</Label>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="messages" className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="welcome-message">Welcome Message</Label>
                  <Textarea
                    id="welcome-message"
                    placeholder="Enter welcome message..."
                    value={config.welcomeMessage || ''}
                    onChange={(e) => handleConfigChange({ welcomeMessage: e.target.value })}
                    rows={3}
                  />
                  <p className="text-sm text-gray-600 mt-1">
                    First message visitors see when opening the chat
                  </p>
                </div>

                <div>
                  <Label htmlFor="offline-message">Offline Message</Label>
                  <Textarea
                    id="offline-message"
                    placeholder="Enter offline message..."
                    value={config.offlineMessage || ''}
                    onChange={(e) => handleConfigChange({ offlineMessage: e.target.value })}
                    rows={3}
                  />
                  <p className="text-sm text-gray-600 mt-1">
                    Message shown when support is offline
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="advanced" className="space-y-6">
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Advanced settings. Changes here may affect chat functionality.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <div>
                  <Label>Configuration JSON</Label>
                  <Textarea
                    value={JSON.stringify(config, null, 2)}
                    onChange={(e) => {
                      try {
                        const parsed = JSON.parse(e.target.value);
                        setConfig(parsed);
                      } catch (error) {
                        // Invalid JSON, ignore
                      }
                    }}
                    rows={15}
                    className="font-mono text-sm"
                  />
                  <p className="text-sm text-gray-600 mt-1">
                    Raw configuration in JSON format
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
