import { useState } from "react";
import { ModernChatWidget } from "./modern-chat-widget";
import { ResponsiveChatLayout } from "./responsive-chat-layout";
import { SimpleChatWidget } from "./simple-chat-widget";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export function ChatWidgetTest() {
  const [testConfig, setTestConfig] = useState({
    showQuickActions: true,
    showSettings: false,
    position: "bottom-right" as const,
    theme: {
      primaryColor: "#2563eb",
      secondaryColor: "#f59e0b",
      backgroundColor: "#ffffff",
      textColor: "#1f2937",
    },
  });

  const [activeTest, setActiveTest] = useState("modern");

  const updateTheme = (key: string, value: string) => {
    setTestConfig(prev => ({
      ...prev,
      theme: {
        ...prev.theme,
        [key]: value,
      },
    }));
  };

  const testScenarios = [
    {
      id: "modern",
      name: "Modern Chat Widget",
      description: "Full-featured modern chat widget with all capabilities",
      component: () => (
        <ModernChatWidget
          position={testConfig.position}
          theme={testConfig.theme}
          showQuickActions={testConfig.showQuickActions}
          showSettings={testConfig.showSettings}
        />
      ),
    },
    {
      id: "responsive",
      name: "Responsive Layout",
      description: "Responsive chat layout that adapts to different screen sizes",
      component: () => (
        <ResponsiveChatLayout
          theme={testConfig.theme}
          showQuickActions={testConfig.showQuickActions}
          showSettings={testConfig.showSettings}
        />
      ),
    },
    {
      id: "simple",
      name: "Simple Widget",
      description: "Simplified widget wrapper using the modern responsive design",
      component: () => (
        <SimpleChatWidget
          theme={testConfig.theme}
          showQuickActions={testConfig.showQuickActions}
          showSettings={testConfig.showSettings}
        />
      ),
    },
  ];

  const currentTest = testScenarios.find(t => t.id === activeTest);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Chat Widget Testing Environment
          </h1>
          <p className="text-gray-600">
            Test and configure the modern chat widget implementations
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Configuration Panel */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Configuration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Widget Type Selection */}
                <div>
                  <Label>Widget Type</Label>
                  <Select value={activeTest} onValueChange={setActiveTest}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {testScenarios.map(test => (
                        <SelectItem key={test.id} value={test.id}>
                          {test.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-gray-500 mt-1">
                    {currentTest?.description}
                  </p>
                </div>

                {/* Features Toggle */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="quick-actions"
                      checked={testConfig.showQuickActions}
                      onCheckedChange={(checked) =>
                        setTestConfig(prev => ({ ...prev, showQuickActions: checked }))
                      }
                    />
                    <Label htmlFor="quick-actions">Show Quick Actions</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="settings"
                      checked={testConfig.showSettings}
                      onCheckedChange={(checked) =>
                        setTestConfig(prev => ({ ...prev, showSettings: checked }))
                      }
                    />
                    <Label htmlFor="settings">Show Settings</Label>
                  </div>
                </div>

                {/* Position Selection */}
                <div>
                  <Label>Position</Label>
                  <Select 
                    value={testConfig.position} 
                    onValueChange={(value: any) =>
                      setTestConfig(prev => ({ ...prev, position: value }))
                    }
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

                {/* Theme Configuration */}
                <div className="space-y-3">
                  <h4 className="font-medium">Theme Colors</h4>
                  
                  <div>
                    <Label htmlFor="primary-color">Primary Color</Label>
                    <div className="flex space-x-2">
                      <Input
                        id="primary-color"
                        type="color"
                        value={testConfig.theme.primaryColor}
                        onChange={(e) => updateTheme("primaryColor", e.target.value)}
                        className="w-12 h-8 p-1"
                      />
                      <Input
                        type="text"
                        value={testConfig.theme.primaryColor}
                        onChange={(e) => updateTheme("primaryColor", e.target.value)}
                        className="flex-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="secondary-color">Secondary Color</Label>
                    <div className="flex space-x-2">
                      <Input
                        id="secondary-color"
                        type="color"
                        value={testConfig.theme.secondaryColor}
                        onChange={(e) => updateTheme("secondaryColor", e.target.value)}
                        className="w-12 h-8 p-1"
                      />
                      <Input
                        type="text"
                        value={testConfig.theme.secondaryColor}
                        onChange={(e) => updateTheme("secondaryColor", e.target.value)}
                        className="flex-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="bg-color">Background Color</Label>
                    <div className="flex space-x-2">
                      <Input
                        id="bg-color"
                        type="color"
                        value={testConfig.theme.backgroundColor}
                        onChange={(e) => updateTheme("backgroundColor", e.target.value)}
                        className="w-12 h-8 p-1"
                      />
                      <Input
                        type="text"
                        value={testConfig.theme.backgroundColor}
                        onChange={(e) => updateTheme("backgroundColor", e.target.value)}
                        className="flex-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="text-color">Text Color</Label>
                    <div className="flex space-x-2">
                      <Input
                        id="text-color"
                        type="color"
                        value={testConfig.theme.textColor}
                        onChange={(e) => updateTheme("textColor", e.target.value)}
                        className="w-12 h-8 p-1"
                      />
                      <Input
                        type="text"
                        value={testConfig.theme.textColor}
                        onChange={(e) => updateTheme("textColor", e.target.value)}
                        className="flex-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Preset Themes */}
                <div>
                  <Label>Preset Themes</Label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setTestConfig(prev => ({
                        ...prev,
                        theme: {
                          primaryColor: "#2563eb",
                          secondaryColor: "#f59e0b",
                          backgroundColor: "#ffffff",
                          textColor: "#1f2937",
                        }
                      }))}
                    >
                      Default
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setTestConfig(prev => ({
                        ...prev,
                        theme: {
                          primaryColor: "#059669",
                          secondaryColor: "#10b981",
                          backgroundColor: "#ffffff",
                          textColor: "#1f2937",
                        }
                      }))}
                    >
                      Green
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setTestConfig(prev => ({
                        ...prev,
                        theme: {
                          primaryColor: "#dc2626",
                          secondaryColor: "#ef4444",
                          backgroundColor: "#ffffff",
                          textColor: "#1f2937",
                        }
                      }))}
                    >
                      Red
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setTestConfig(prev => ({
                        ...prev,
                        theme: {
                          primaryColor: "#7c3aed",
                          secondaryColor: "#8b5cf6",
                          backgroundColor: "#ffffff",
                          textColor: "#1f2937",
                        }
                      }))}
                    >
                      Purple
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Test Results */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Test Results</span>
                  <Badge variant="outline">{currentTest?.name}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="desktop" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="desktop">Desktop View</TabsTrigger>
                    <TabsTrigger value="tablet">Tablet View</TabsTrigger>
                    <TabsTrigger value="mobile">Mobile View</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="desktop" className="space-y-4">
                    <div className="border rounded-lg p-4 bg-gradient-to-br from-blue-50 to-indigo-50 min-h-[400px] relative">
                      <p className="text-sm text-gray-600 mb-4">
                        Desktop viewport simulation (1200px+)
                      </p>
                      <div className="absolute inset-4">
                        {currentTest?.component()}
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="tablet" className="space-y-4">
                    <div className="border rounded-lg p-4 bg-gradient-to-br from-green-50 to-emerald-50 min-h-[400px] relative max-w-2xl">
                      <p className="text-sm text-gray-600 mb-4">
                        Tablet viewport simulation (768px - 1199px)
                      </p>
                      <div className="absolute inset-4">
                        {currentTest?.component()}
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="mobile" className="space-y-4">
                    <div className="border rounded-lg p-4 bg-gradient-to-br from-orange-50 to-red-50 min-h-[400px] relative max-w-sm">
                      <p className="text-sm text-gray-600 mb-4">
                        Mobile viewport simulation (&lt;768px)
                      </p>
                      <div className="absolute inset-4">
                        {currentTest?.component()}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            
            {/* Test Instructions */}
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Test Instructions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-medium text-green-600">✅ Features to Test:</h4>
                    <ul className="list-disc list-inside space-y-1 mt-1 text-gray-600">
                      <li>Click the chat button to open the widget</li>
                      <li>Send a message and verify response simulation</li>
                      <li>Test minimize/maximize functionality</li>
                      <li>Try quick action buttons (if enabled)</li>
                      <li>Test responsive behavior on different screen sizes</li>
                      <li>Verify theme color changes apply correctly</li>
                      <li>Check typing indicator animation</li>
                      <li>Test message status indicators</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-blue-600">📱 Mobile-Specific Tests:</h4>
                    <ul className="list-disc list-inside space-y-1 mt-1 text-gray-600">
                      <li>Touch targets are at least 44px (accessibility)</li>
                      <li>Fullscreen mode works correctly</li>
                      <li>Input field doesn't cause zoom on iOS</li>
                      <li>Animation performance is smooth</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-purple-600">🎨 Design Tests:</h4>
                    <ul className="list-disc list-inside space-y-1 mt-1 text-gray-600">
                      <li>Theme colors update in real-time</li>
                      <li>Gradients and shadows render correctly</li>
                      <li>Text contrast is readable</li>
                      <li>Layout remains consistent across themes</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
