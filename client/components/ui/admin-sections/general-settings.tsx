import { useState } from "react";
import {
  Settings,
  Globe,
  Shield,
  Bell,
  Mail,
  Database,
  Server,
  Key,
  Eye,
  EyeOff,
  Upload,
  Download,
  Save,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Info,
  Lock,
  Users,
  FileText,
  Palette,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";

export function GeneralSettings() {
  const { toast } = useToast();
  const [showApiKey, setShowApiKey] = useState(false);
  const [showSecretKey, setShowSecretKey] = useState(false);

  // Sample settings data
  const [settings, setSettings] = useState({
    general: {
      siteName: "ShipNexa.it",
      siteDescription:
        "Next-generation shipping and logistics solutions for Italy and worldwide",
      contactEmail: "info@shipnexa.it",
      supportPhone: "+39 02 1234 5678",
      timezone: "UTC-5",
      language: "en",
      currency: "USD",
      maintenanceMode: false,
    },
    notifications: {
      emailNotifications: true,
      smsNotifications: false,
      pushNotifications: true,
      adminAlerts: true,
      customerUpdates: true,
      systemAlerts: true,
    },
    security: {
      twoFactorAuth: true,
      sessionTimeout: "30",
      passwordPolicy: "strong",
      loginAttempts: "5",
      apiRateLimit: "1000",
      sslRequired: true,
    },
    integrations: {
      googleMapsApiKey: "AIzaSyC...",
      stripeApiKey: "sk_test_...",
      twilioApiKey: "AC...",
      emailService: "sendgrid",
      analyticsId: "GA-...",
    },
    appearance: {
      theme: "light",
      primaryColor: "#2563eb",
      secondaryColor: "#ea580c",
      logoUrl: "/logo.png",
      faviconUrl: "/favicon.ico",
    },
    socialMedia: {
      enableInFooter: true,
      enableInHeader: true,
      enableSharing: true,
      platforms: {
        facebook: {
          enabled: true,
          url: "https://facebook.com/globaltracklogistics",
          displayInFooter: true,
          displayInHeader: false,
        },
        twitter: {
          enabled: true,
          url: "https://twitter.com/globaltrack",
          displayInFooter: true,
          displayInHeader: true,
        },
        instagram: {
          enabled: true,
          url: "https://instagram.com/globaltrack_logistics",
          displayInFooter: true,
          displayInHeader: false,
        },
        linkedin: {
          enabled: true,
          url: "https://linkedin.com/company/globaltrack-logistics",
          displayInFooter: true,
          displayInHeader: false,
        },
        youtube: {
          enabled: true,
          url: "https://youtube.com/@globaltracklogistics",
          displayInFooter: true,
          displayInHeader: false,
        },
        whatsapp: {
          enabled: true,
          url: "https://wa.me/15551234567",
          displayInFooter: true,
          displayInHeader: true,
        },
      },
    },
  });

  const handleSave = (section: string) => {
    toast({
      title: "Settings Saved",
      description: `${section} settings have been saved successfully.`,
    });
  };

  const handleBackup = () => {
    toast({
      title: "Backup Created",
      description: "System backup has been created and downloaded.",
    });
  };

  const handleRestore = () => {
    toast({
      title: "System Restored",
      description: "System has been restored from backup successfully.",
    });
  };

  const handleTestEmail = () => {
    toast({
      title: "Test Email Sent",
      description: "Test email has been sent to verify email configuration.",
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">General Settings</h1>
          <p className="text-gray-600">
            Configure system-wide settings and preferences
          </p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <Button variant="outline" onClick={handleBackup}>
            <Download className="h-4 w-4 mr-2" />
            Create Backup
          </Button>
          <Button variant="outline" onClick={handleRestore}>
            <Upload className="h-4 w-4 mr-2" />
            Restore Backup
          </Button>
        </div>
      </div>

      {/* System Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  System Status
                </p>
                <div className="flex items-center mt-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-lg font-semibold text-green-600">
                    Operational
                  </span>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-green-100">
                <Server className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Database Status
                </p>
                <div className="flex items-center mt-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-lg font-semibold text-green-600">
                    Connected
                  </span>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-green-100">
                <Database className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Security Status
                </p>
                <div className="flex items-center mt-2">
                  <Shield className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-lg font-semibold text-green-600">
                    Secure
                  </span>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-green-100">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Settings Tabs */}
      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        {/* General Settings Tab */}
        <TabsContent value="general" className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>General Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="site-name">Site Name</Label>
                  <Input
                    id="site-name"
                    value={settings.general.siteName}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        general: {
                          ...settings.general,
                          siteName: e.target.value,
                        },
                      })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="contact-email">Contact Email</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    value={settings.general.contactEmail}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        general: {
                          ...settings.general,
                          contactEmail: e.target.value,
                        },
                      })
                    }
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="site-description">Site Description</Label>
                <Textarea
                  id="site-description"
                  value={settings.general.siteDescription}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      general: {
                        ...settings.general,
                        siteDescription: e.target.value,
                      },
                    })
                  }
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select value={settings.general.timezone}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="UTC-8">
                        Pacific Time (UTC-8)
                      </SelectItem>
                      <SelectItem value="UTC-7">
                        Mountain Time (UTC-7)
                      </SelectItem>
                      <SelectItem value="UTC-6">
                        Central Time (UTC-6)
                      </SelectItem>
                      <SelectItem value="UTC-5">
                        Eastern Time (UTC-5)
                      </SelectItem>
                      <SelectItem value="UTC+0">UTC (UTC+0)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="language">Default Language</Label>
                  <Select value={settings.general.language}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="currency">Default Currency</Label>
                  <Select value={settings.general.currency}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD ($)</SelectItem>
                      <SelectItem value="EUR">EUR (€)</SelectItem>
                      <SelectItem value="GBP">GBP (£)</SelectItem>
                      <SelectItem value="JPY">JPY (¥)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
                  <p className="text-sm text-gray-600">
                    Enable to put the site in maintenance mode
                  </p>
                </div>
                <Switch
                  id="maintenance-mode"
                  checked={settings.general.maintenanceMode}
                  onCheckedChange={(checked) =>
                    setSettings({
                      ...settings,
                      general: {
                        ...settings.general,
                        maintenanceMode: checked,
                      },
                    })
                  }
                />
              </div>

              <Button
                onClick={() => handleSave("General")}
                className="bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600"
              >
                <Save className="h-4 w-4 mr-2" />
                Save General Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications" className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="email-notifications">
                      Email Notifications
                    </Label>
                    <p className="text-sm text-gray-600">
                      Receive notifications via email
                    </p>
                  </div>
                  <Switch
                    id="email-notifications"
                    checked={settings.notifications.emailNotifications}
                    onCheckedChange={(checked) =>
                      setSettings({
                        ...settings,
                        notifications: {
                          ...settings.notifications,
                          emailNotifications: checked,
                        },
                      })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="sms-notifications">SMS Notifications</Label>
                    <p className="text-sm text-gray-600">
                      Receive notifications via SMS
                    </p>
                  </div>
                  <Switch
                    id="sms-notifications"
                    checked={settings.notifications.smsNotifications}
                    onCheckedChange={(checked) =>
                      setSettings({
                        ...settings,
                        notifications: {
                          ...settings.notifications,
                          smsNotifications: checked,
                        },
                      })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="push-notifications">
                      Push Notifications
                    </Label>
                    <p className="text-sm text-gray-600">
                      Receive browser push notifications
                    </p>
                  </div>
                  <Switch
                    id="push-notifications"
                    checked={settings.notifications.pushNotifications}
                    onCheckedChange={(checked) =>
                      setSettings({
                        ...settings,
                        notifications: {
                          ...settings.notifications,
                          pushNotifications: checked,
                        },
                      })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="admin-alerts">Admin Alerts</Label>
                    <p className="text-sm text-gray-600">
                      Critical system alerts for admins
                    </p>
                  </div>
                  <Switch
                    id="admin-alerts"
                    checked={settings.notifications.adminAlerts}
                    onCheckedChange={(checked) =>
                      setSettings({
                        ...settings,
                        notifications: {
                          ...settings.notifications,
                          adminAlerts: checked,
                        },
                      })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="customer-updates">Customer Updates</Label>
                    <p className="text-sm text-gray-600">
                      Notifications about customer activities
                    </p>
                  </div>
                  <Switch
                    id="customer-updates"
                    checked={settings.notifications.customerUpdates}
                    onCheckedChange={(checked) =>
                      setSettings({
                        ...settings,
                        notifications: {
                          ...settings.notifications,
                          customerUpdates: checked,
                        },
                      })
                    }
                  />
                </div>
              </div>

              <Separator />

              <div className="flex items-center space-x-3">
                <Button onClick={handleTestEmail} variant="outline">
                  <Mail className="h-4 w-4 mr-2" />
                  Test Email
                </Button>
                <Button
                  onClick={() => handleSave("Notifications")}
                  className="bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save Notification Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security" className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Security Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Alert>
                <Shield className="h-4 w-4" />
                <AlertDescription>
                  Security settings affect all users. Changes take effect
                  immediately.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="two-factor">
                      Two-Factor Authentication
                    </Label>
                    <p className="text-sm text-gray-600">
                      Require 2FA for all admin accounts
                    </p>
                  </div>
                  <Switch
                    id="two-factor"
                    checked={settings.security.twoFactorAuth}
                    onCheckedChange={(checked) =>
                      setSettings({
                        ...settings,
                        security: {
                          ...settings.security,
                          twoFactorAuth: checked,
                        },
                      })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="ssl-required">SSL Required</Label>
                    <p className="text-sm text-gray-600">
                      Force HTTPS for all connections
                    </p>
                  </div>
                  <Switch
                    id="ssl-required"
                    checked={settings.security.sslRequired}
                    onCheckedChange={(checked) =>
                      setSettings({
                        ...settings,
                        security: {
                          ...settings.security,
                          sslRequired: checked,
                        },
                      })
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="session-timeout">
                    Session Timeout (minutes)
                  </Label>
                  <Input
                    id="session-timeout"
                    type="number"
                    value={settings.security.sessionTimeout}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        security: {
                          ...settings.security,
                          sessionTimeout: e.target.value,
                        },
                      })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="login-attempts">Max Login Attempts</Label>
                  <Input
                    id="login-attempts"
                    type="number"
                    value={settings.security.loginAttempts}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        security: {
                          ...settings.security,
                          loginAttempts: e.target.value,
                        },
                      })
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="password-policy">Password Policy</Label>
                  <Select value={settings.security.passwordPolicy}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weak">Weak (6+ characters)</SelectItem>
                      <SelectItem value="medium">
                        Medium (8+ characters, mixed case)
                      </SelectItem>
                      <SelectItem value="strong">
                        Strong (12+ characters, mixed case, numbers, symbols)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="api-rate-limit">
                    API Rate Limit (per hour)
                  </Label>
                  <Input
                    id="api-rate-limit"
                    type="number"
                    value={settings.security.apiRateLimit}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        security: {
                          ...settings.security,
                          apiRateLimit: e.target.value,
                        },
                      })
                    }
                  />
                </div>
              </div>

              <Button
                onClick={() => handleSave("Security")}
                className="bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600"
              >
                <Save className="h-4 w-4 mr-2" />
                Save Security Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Integrations Tab */}
        <TabsContent value="integrations" className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Third-Party Integrations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  API keys and secrets are encrypted and stored securely.
                </AlertDescription>
              </Alert>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="google-maps-key">Google Maps API Key</Label>
                  <div className="flex items-center space-x-2 mt-1">
                    <Input
                      id="google-maps-key"
                      type={showApiKey ? "text" : "password"}
                      value={settings.integrations.googleMapsApiKey}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          integrations: {
                            ...settings.integrations,
                            googleMapsApiKey: e.target.value,
                          },
                        })
                      }
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowApiKey(!showApiKey)}
                    >
                      {showApiKey ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="stripe-key">Stripe API Key</Label>
                  <div className="flex items-center space-x-2 mt-1">
                    <Input
                      id="stripe-key"
                      type={showSecretKey ? "text" : "password"}
                      value={settings.integrations.stripeApiKey}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          integrations: {
                            ...settings.integrations,
                            stripeApiKey: e.target.value,
                          },
                        })
                      }
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowSecretKey(!showSecretKey)}
                    >
                      {showSecretKey ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email-service">
                      Email Service Provider
                    </Label>
                    <Select value={settings.integrations.emailService}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sendgrid">SendGrid</SelectItem>
                        <SelectItem value="mailgun">Mailgun</SelectItem>
                        <SelectItem value="ses">Amazon SES</SelectItem>
                        <SelectItem value="smtp">Custom SMTP</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="analytics-id">Google Analytics ID</Label>
                    <Input
                      id="analytics-id"
                      value={settings.integrations.analyticsId}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          integrations: {
                            ...settings.integrations,
                            analyticsId: e.target.value,
                          },
                        })
                      }
                    />
                  </div>
                </div>
              </div>

              <Button
                onClick={() => handleSave("Integrations")}
                className="bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600"
              >
                <Save className="h-4 w-4 mr-2" />
                Save Integration Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Appearance Tab */}
        <TabsContent value="appearance" className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Appearance & Branding</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="theme">Theme</Label>
                  <Select value={settings.appearance.theme}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="auto">Auto (System)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="primary-color">Primary Color</Label>
                  <div className="flex items-center space-x-2 mt-1">
                    <Input
                      id="primary-color"
                      type="color"
                      value={settings.appearance.primaryColor}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          appearance: {
                            ...settings.appearance,
                            primaryColor: e.target.value,
                          },
                        })
                      }
                      className="w-16 h-10"
                    />
                    <Input
                      value={settings.appearance.primaryColor}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          appearance: {
                            ...settings.appearance,
                            primaryColor: e.target.value,
                          },
                        })
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="logo-url">Logo URL</Label>
                  <Input
                    id="logo-url"
                    value={settings.appearance.logoUrl}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        appearance: {
                          ...settings.appearance,
                          logoUrl: e.target.value,
                        },
                      })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="favicon-url">Favicon URL</Label>
                  <Input
                    id="favicon-url"
                    value={settings.appearance.faviconUrl}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        appearance: {
                          ...settings.appearance,
                          faviconUrl: e.target.value,
                        },
                      })
                    }
                  />
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  onClick={() =>
                    toast({
                      title: "Upload Logo",
                      description:
                        "File upload dialog would open here to select new logo.",
                    })
                  }
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Logo
                </Button>
                <Button
                  onClick={() => handleSave("Appearance")}
                  className="bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save Appearance Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Advanced Tab */}
        <TabsContent value="advanced" className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Advanced Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  Advanced settings should only be modified by experienced
                  administrators.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="debug-mode">Debug Mode</Label>
                  <p className="text-sm text-gray-600 mb-2">
                    Enable detailed error logging
                  </p>
                  <Switch id="debug-mode" />
                </div>

                <div>
                  <Label htmlFor="cache-enabled">Cache Enabled</Label>
                  <p className="text-sm text-gray-600 mb-2">
                    Enable application caching
                  </p>
                  <Switch id="cache-enabled" defaultChecked />
                </div>

                <div>
                  <Label htmlFor="api-versioning">API Versioning</Label>
                  <p className="text-sm text-gray-600 mb-2">
                    Enable API version control
                  </p>
                  <Switch id="api-versioning" defaultChecked />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-semibold">Database Management</h4>
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    onClick={() =>
                      toast({
                        title: "Cache Cleared",
                        description:
                          "Application cache has been cleared successfully.",
                      })
                    }
                  >
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Clear Cache
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() =>
                      toast({
                        title: "Database Optimized",
                        description:
                          "Database optimization completed successfully.",
                      })
                    }
                  >
                    <Database className="h-4 w-4 mr-2" />
                    Optimize Database
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() =>
                      toast({
                        title: "System Logs",
                        description: "Opening system logs viewer...",
                      })
                    }
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    View Logs
                  </Button>
                </div>
              </div>

              <Button
                onClick={() => handleSave("Advanced")}
                className="bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600"
              >
                <Save className="h-4 w-4 mr-2" />
                Save Advanced Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
