import { useState } from "react";
import { 
  Settings, 
  Bell, 
  Shield, 
  Download, 
  Trash2, 
  AlertTriangle,
  Key,
  Database,
  Globe,
  Smartphone,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

export function SettingsSection() {
  const [showApiKey, setShowApiKey] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState("");

  const apiKey = "gt_live_sk_1a2b3c4d5e6f7g8h9i0j";

  const integrations = [
    {
      name: "Shopify",
      description: "E-commerce platform integration",
      connected: true,
      lastSync: "2 hours ago"
    },
    {
      name: "WooCommerce",
      description: "WordPress e-commerce plugin",
      connected: false,
      lastSync: "Never"
    },
    {
      name: "Zapier",
      description: "Automation platform",
      connected: true,
      lastSync: "5 minutes ago"
    },
    {
      name: "Slack",
      description: "Team communication",
      connected: false,
      lastSync: "Never"
    }
  ];

  const activityLog = [
    {
      action: "Password changed",
      timestamp: "2024-12-12 10:30 AM",
      ip: "192.168.1.100",
      device: "Chrome on Windows"
    },
    {
      action: "API key regenerated",
      timestamp: "2024-12-11 03:45 PM", 
      ip: "192.168.1.100",
      device: "Chrome on Windows"
    },
    {
      action: "Profile updated",
      timestamp: "2024-12-10 09:15 AM",
      ip: "192.168.1.100",
      device: "Chrome on Windows"
    },
    {
      action: "New device login",
      timestamp: "2024-12-09 02:20 PM",
      ip: "192.168.1.101",
      device: "Mobile App on iOS"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>
        <p className="text-gray-600">Manage your account preferences and integrations</p>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="api">API & Integrations</TabsTrigger>
          <TabsTrigger value="privacy">Privacy & Data</TabsTrigger>
          <TabsTrigger value="danger">Danger Zone</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="h-5 w-5 mr-2" />
                General Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="timezone">Default Timezone</Label>
                  <Select defaultValue="america-new_york">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="america-new_york">Eastern Time (ET)</SelectItem>
                      <SelectItem value="america-chicago">Central Time (CT)</SelectItem>
                      <SelectItem value="america-denver">Mountain Time (MT)</SelectItem>
                      <SelectItem value="america-los_angeles">Pacific Time (PT)</SelectItem>
                      <SelectItem value="europe-london">London (GMT)</SelectItem>
                      <SelectItem value="europe-paris">Paris (CET)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="currency">Default Currency</Label>
                  <Select defaultValue="usd">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">USD - US Dollar</SelectItem>
                      <SelectItem value="eur">EUR - Euro</SelectItem>
                      <SelectItem value="gbp">GBP - British Pound</SelectItem>
                      <SelectItem value="cad">CAD - Canadian Dollar</SelectItem>
                      <SelectItem value="aud">AUD - Australian Dollar</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="language">Interface Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                      <SelectItem value="zh">Chinese</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="dateFormat">Date Format</Label>
                  <Select defaultValue="mm-dd-yyyy">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mm-dd-yyyy">MM/DD/YYYY</SelectItem>
                      <SelectItem value="dd-mm-yyyy">DD/MM/YYYY</SelectItem>
                      <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Dashboard Preferences</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Dark Mode</p>
                      <p className="text-sm text-gray-600">Use dark theme across the application</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Compact View</p>
                      <p className="text-sm text-gray-600">Show more information in less space</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Auto-refresh Data</p>
                      <p className="text-sm text-gray-600">Automatically refresh tracking data</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button className="bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600">
                  Save Preferences
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="h-5 w-5 mr-2" />
                Notification Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Email Notifications</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Shipment Updates</p>
                        <p className="text-sm text-gray-600">Get notified when shipment status changes</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Delivery Confirmations</p>
                        <p className="text-sm text-gray-600">Receive confirmation when packages are delivered</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Invoice & Billing</p>
                        <p className="text-sm text-gray-600">Get notified about invoices and payment reminders</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Marketing Updates</p>
                        <p className="text-sm text-gray-600">Receive news, offers, and product updates</p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">SMS Notifications</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Critical Updates</p>
                        <p className="text-sm text-gray-600">Urgent shipment issues and delivery attempts</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Delivery Notifications</p>
                        <p className="text-sm text-gray-600">SMS when packages are out for delivery</p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Push Notifications</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Browser Notifications</p>
                        <p className="text-sm text-gray-600">Show notifications in your browser</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Mobile App Notifications</p>
                        <p className="text-sm text-gray-600">Push notifications to your mobile device</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button className="bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600">
                  Save Notification Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="api" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Key className="h-5 w-5 mr-2" />
                API Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="apiKey">API Key</Label>
                <div className="flex space-x-2 mt-1">
                  <div className="relative flex-1">
                    <Input
                      id="apiKey"
                      value={showApiKey ? apiKey : "••••••••••••••••••••••••"}
                      readOnly
                      className="font-mono"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2"
                      onClick={() => setShowApiKey(!showApiKey)}
                    >
                      {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                  <Button variant="outline">
                    Regenerate
                  </Button>
                  <Button variant="outline">
                    Copy
                  </Button>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Use this API key to integrate GlobalTrack with your applications.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">API Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Rate Limiting</p>
                      <p className="text-sm text-gray-600">Current limit: 1000 requests per hour</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Request Increase
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Webhook Notifications</p>
                      <p className="text-sm text-gray-600">Receive real-time updates via webhooks</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">API Documentation</h3>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Docs
                  </Button>
                </div>
                <p className="text-sm text-gray-600">
                  Access comprehensive API documentation with examples and testing tools.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Third-party Integrations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {integrations.map((integration) => (
                  <div key={integration.name} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">{integration.name}</h4>
                      <p className="text-sm text-gray-600">{integration.description}</p>
                      <p className="text-xs text-gray-500">Last sync: {integration.lastSync}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={integration.connected ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}>
                        {integration.connected ? "Connected" : "Not Connected"}
                      </Badge>
                      <Button variant="outline" size="sm">
                        {integration.connected ? "Configure" : "Connect"}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Privacy & Data Management
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Data Privacy</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Data Analytics</p>
                      <p className="text-sm text-gray-600">Help improve our service by sharing usage data</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Marketing Personalization</p>
                      <p className="text-sm text-gray-600">Use your data to personalize marketing content</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Third-party Sharing</p>
                      <p className="text-sm text-gray-600">Share data with trusted partners for better service</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Data Export & Control</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="justify-start w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download My Data
                  </Button>
                  <Button variant="outline" className="justify-start w-full">
                    <Database className="h-4 w-4 mr-2" />
                    View Data Usage Report
                  </Button>
                  <Button variant="outline" className="justify-start w-full">
                    <Globe className="h-4 w-4 mr-2" />
                    Privacy Policy
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Account Activity</h3>
                <div className="space-y-3">
                  {activityLog.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{activity.action}</p>
                        <p className="text-sm text-gray-600">{activity.device}</p>
                        <p className="text-xs text-gray-500">IP: {activity.ip}</p>
                      </div>
                      <span className="text-sm text-gray-500">{activity.timestamp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="danger" className="space-y-6">
          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center text-red-700">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Danger Zone
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Alert className="border-yellow-200 bg-yellow-50">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  Actions in this section are irreversible. Please proceed with caution.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <div className="border border-red-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-red-700 mb-2">Reset Account Data</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    This will permanently delete all your shipment history, tracking data, and settings. Your account will remain active but all data will be lost.
                  </p>
                  <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-50">
                    Reset All Data
                  </Button>
                </div>

                <div className="border border-red-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-red-700 mb-2">Close Account</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Permanently delete your GlobalTrack account and all associated data. This action cannot be undone.
                  </p>
                  <Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
                    <DialogTrigger asChild>
                      <Button className="bg-red-600 hover:bg-red-700 text-white">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete Account
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="text-red-700">Delete Account</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <Alert className="border-red-200 bg-red-50">
                          <AlertTriangle className="h-4 w-4" />
                          <AlertDescription>
                            This action is permanent and cannot be undone. All your data will be permanently deleted.
                          </AlertDescription>
                        </Alert>
                        <div>
                          <Label htmlFor="deleteConfirmation">
                            Type "DELETE" to confirm account deletion:
                          </Label>
                          <Input
                            id="deleteConfirmation"
                            value={deleteConfirmation}
                            onChange={(e) => setDeleteConfirmation(e.target.value)}
                            placeholder="Type DELETE here"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button variant="outline" onClick={() => setIsDeleteModalOpen(false)}>
                          Cancel
                        </Button>
                        <Button
                          className="bg-red-600 hover:bg-red-700 text-white"
                          disabled={deleteConfirmation !== "DELETE"}
                        >
                          Delete Account Permanently
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
