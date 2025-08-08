import { useState } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
  Globe,
  Plus,
  Edit,
  Eye,
  EyeOff,
  Trash2,
  Save,
  Copy,
  ExternalLink,
  BarChart3,
  Users,
  TrendingUp,
  Share2,
  Settings,
  Link as LinkIcon,
  Image,
  CalendarDays,
  Clock,
  CheckCircle,
  AlertCircle,
  Zap,
  Target,
  Hash,
  AtSign,
  Smartphone,
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";

export function SocialMediaManagement() {
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState<Record<string, boolean>>({});
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newPlatform, setNewPlatform] = useState({
    name: "",
    platform: "",
    url: "",
    username: "",
    apiKey: "",
    accessToken: "",
    enabled: true,
    displayInFooter: true,
    displayInHeader: false,
    autoPost: false,
  });

  // Social Media Platforms Configuration
  const [socialPlatforms, setSocialPlatforms] = useState([
    {
      id: "facebook",
      name: "Facebook",
      platform: "facebook",
      icon: Facebook,
      url: "https://facebook.com/globaltracklogistics",
      username: "@globaltracklogistics",
      followers: "12.5K",
      apiKey: "fb_api_key_hidden",
      accessToken: "fb_access_token_hidden",
      enabled: true,
      displayInFooter: true,
      displayInHeader: false,
      autoPost: true,
      color: "#1877F2",
      description: "Connect with our community and get updates",
      lastPost: "2024-12-15 10:30",
      engagement: "4.2%",
      posts: 847,
    },
    {
      id: "twitter",
      name: "Twitter",
      platform: "twitter",
      icon: Twitter,
      url: "https://twitter.com/globaltrack",
      username: "@globaltrack",
      followers: "8.3K",
      apiKey: "twitter_api_key_hidden",
      accessToken: "twitter_access_token_hidden",
      enabled: true,
      displayInFooter: true,
      displayInHeader: true,
      autoPost: true,
      color: "#1DA1F2",
      description: "Real-time updates and industry news",
      lastPost: "2024-12-15 14:15",
      engagement: "3.8%",
      posts: 1254,
    },
    {
      id: "instagram",
      name: "Instagram",
      platform: "instagram",
      icon: Instagram,
      url: "https://instagram.com/globaltrack_logistics",
      username: "@globaltrack_logistics",
      followers: "15.7K",
      apiKey: "ig_api_key_hidden",
      accessToken: "ig_access_token_hidden",
      enabled: true,
      displayInFooter: true,
      displayInHeader: false,
      autoPost: false,
      color: "#E4405F",
      description: "Behind the scenes and visual content",
      lastPost: "2024-12-15 09:45",
      engagement: "6.1%",
      posts: 432,
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      platform: "linkedin",
      icon: Linkedin,
      url: "https://linkedin.com/company/globaltrack-logistics",
      username: "globaltrack-logistics",
      followers: "22.1K",
      apiKey: "li_api_key_hidden",
      accessToken: "li_access_token_hidden",
      enabled: true,
      displayInFooter: true,
      displayInHeader: false,
      autoPost: true,
      color: "#0A66C2",
      description: "Professional network and B2B content",
      lastPost: "2024-12-15 08:00",
      engagement: "5.4%",
      posts: 298,
    },
    {
      id: "youtube",
      name: "YouTube",
      platform: "youtube",
      icon: Youtube,
      url: "https://youtube.com/@globaltracklogistics",
      username: "@globaltracklogistics",
      followers: "5.2K",
      apiKey: "yt_api_key_hidden",
      accessToken: "yt_access_token_hidden",
      enabled: true,
      displayInFooter: true,
      displayInHeader: false,
      autoPost: false,
      color: "#FF0000",
      description: "Educational videos and company updates",
      lastPost: "2024-12-14 16:30",
      engagement: "7.3%",
      posts: 87,
    },
    {
      id: "whatsapp",
      name: "WhatsApp Business",
      platform: "whatsapp",
      icon: MessageCircle,
      url: "https://wa.me/15551234567",
      username: "+1 (555) 123-4567",
      followers: "N/A",
      apiKey: "wa_api_key_hidden",
      accessToken: "wa_access_token_hidden",
      enabled: true,
      displayInFooter: true,
      displayInHeader: true,
      autoPost: false,
      color: "#25D366",
      description: "Direct customer support and inquiries",
      lastPost: "N/A",
      engagement: "N/A",
      posts: 0,
    },
  ]);

  const socialMediaStats = [
    {
      title: "Total Followers",
      value: "63.8K",
      change: "+12.3%",
      trend: "up",
      icon: <Users className="h-6 w-6" />,
      color: "bg-blue-500",
    },
    {
      title: "Engagement Rate",
      value: "5.2%",
      change: "+0.8%",
      trend: "up",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "bg-green-500",
    },
    {
      title: "Posts This Month",
      value: "142",
      change: "+18.5%",
      trend: "up",
      icon: <Share2 className="h-6 w-6" />,
      color: "bg-purple-500",
    },
    {
      title: "Active Platforms",
      value: "6",
      change: "0%",
      trend: "neutral",
      icon: <Globe className="h-6 w-6" />,
      color: "bg-orange-500",
    },
  ];

  const handleSavePlatform = (platformId: string, data: any) => {
    setSocialPlatforms(prev =>
      prev.map(platform =>
        platform.id === platformId ? { ...platform, ...data } : platform
      )
    );
    setIsEditing(null);
    toast({
      title: "Platform Updated",
      description: "Social media platform settings have been saved successfully.",
    });
  };

  const handleAddPlatform = () => {
    const newId = newPlatform.platform.toLowerCase().replace(/\s+/g, '');
    const platform = {
      id: newId,
      ...newPlatform,
      icon: Globe, // Default icon
      followers: "0",
      engagement: "0%",
      posts: 0,
      lastPost: "Never",
      color: "#666666",
    };
    setSocialPlatforms(prev => [...prev, platform]);
    setNewPlatform({
      name: "",
      platform: "",
      url: "",
      username: "",
      apiKey: "",
      accessToken: "",
      enabled: true,
      displayInFooter: true,
      displayInHeader: false,
      autoPost: false,
    });
    setIsAdding(false);
    toast({
      title: "Platform Added",
      description: "New social media platform has been added successfully.",
    });
  };

  const handleDeletePlatform = (platformId: string) => {
    setSocialPlatforms(prev => prev.filter(platform => platform.id !== platformId));
    toast({
      title: "Platform Deleted",
      description: "Social media platform has been removed.",
      variant: "destructive",
    });
  };

  const handleToggleVisibility = (platformId: string, field: string, value: boolean) => {
    setSocialPlatforms(prev =>
      prev.map(platform =>
        platform.id === platformId ? { ...platform, [field]: value } : platform
      )
    );
    toast({
      title: "Visibility Updated",
      description: "Platform visibility settings have been updated.",
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied",
      description: "URL copied to clipboard.",
    });
  };

  const PlatformIcon = ({ platform }: { platform: any }) => {
    const Icon = platform.icon;
    return <Icon className="h-5 w-5" style={{ color: platform.color }} />;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Social Media Management
          </h1>
          <p className="text-gray-600">
            Manage social media accounts, integrations, and display settings
          </p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <Button
            variant="outline"
            onClick={() =>
              toast({
                title: "Analytics Report",
                description: "Generating comprehensive social media analytics...",
              })
            }
          >
            <BarChart3 className="h-4 w-4 mr-2" />
            Analytics Report
          </Button>
          <Button
            onClick={() => setIsAdding(true)}
            className="bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Platform
          </Button>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {socialMediaStats.map((stat, index) => (
          <Card
            key={index}
            className="border-0 shadow-lg hover:shadow-xl transition-shadow"
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">
                    {stat.value}
                  </p>
                  <div className="flex items-center mt-2">
                    <span
                      className={`text-sm font-medium ${
                        stat.trend === "up"
                          ? "text-green-600"
                          : stat.trend === "down"
                          ? "text-red-600"
                          : "text-gray-600"
                      }`}
                    >
                      {stat.change}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">
                      from last month
                    </span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <div className="text-white">{stat.icon}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content */}
      <Tabs defaultValue="platforms" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="platforms">Platforms</TabsTrigger>
          <TabsTrigger value="settings">Display Settings</TabsTrigger>
          <TabsTrigger value="automation">Automation</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        {/* Platforms Tab */}
        <TabsContent value="platforms" className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Social Media Platforms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                {socialPlatforms.map((platform) => (
                  <div
                    key={platform.id}
                    className="p-6 border rounded-lg hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div
                          className="p-3 rounded-lg"
                          style={{ backgroundColor: `${platform.color}15` }}
                        >
                          <PlatformIcon platform={platform} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">
                              {platform.name}
                            </h3>
                            <Badge
                              className={
                                platform.enabled
                                  ? "bg-green-100 text-green-800"
                                  : "bg-gray-100 text-gray-800"
                              }
                            >
                              {platform.enabled ? "Active" : "Disabled"}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">
                            {platform.description}
                          </p>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <span className="text-gray-500">Username:</span>
                              <p className="font-medium">{platform.username}</p>
                            </div>
                            <div>
                              <span className="text-gray-500">Followers:</span>
                              <p className="font-medium">{platform.followers}</p>
                            </div>
                            <div>
                              <span className="text-gray-500">Engagement:</span>
                              <p className="font-medium">{platform.engagement}</p>
                            </div>
                            <div>
                              <span className="text-gray-500">Posts:</span>
                              <p className="font-medium">{platform.posts}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(platform.url, "_blank")}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard(platform.url)}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setIsEditing(platform.id)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeletePlatform(platform.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                          <Label className="text-sm">Footer Display</Label>
                          <Switch
                            checked={platform.displayInFooter}
                            onCheckedChange={(checked) =>
                              handleToggleVisibility(platform.id, "displayInFooter", checked)
                            }
                          />
                        </div>
                        <div className="flex items-center space-x-2">
                          <Label className="text-sm">Header Display</Label>
                          <Switch
                            checked={platform.displayInHeader}
                            onCheckedChange={(checked) =>
                              handleToggleVisibility(platform.id, "displayInHeader", checked)
                            }
                          />
                        </div>
                        <div className="flex items-center space-x-2">
                          <Label className="text-sm">Auto-Post</Label>
                          <Switch
                            checked={platform.autoPost}
                            onCheckedChange={(checked) =>
                              handleToggleVisibility(platform.id, "autoPost", checked)
                            }
                          />
                        </div>
                      </div>
                      <div className="text-xs text-gray-500">
                        Last post: {platform.lastPost}
                      </div>
                    </div>

                    {/* Edit Form */}
                    {isEditing === platform.id && (
                      <div className="mt-6 p-4 bg-gray-50 rounded-lg space-y-4">
                        <h4 className="font-semibold">Edit Platform Settings</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label>Platform Name</Label>
                            <Input defaultValue={platform.name} />
                          </div>
                          <div>
                            <Label>Username/Handle</Label>
                            <Input defaultValue={platform.username} />
                          </div>
                          <div>
                            <Label>Profile URL</Label>
                            <Input defaultValue={platform.url} />
                          </div>
                          <div>
                            <Label>API Key</Label>
                            <div className="relative">
                              <Input
                                type={showPassword[platform.id] ? "text" : "password"}
                                defaultValue={platform.apiKey}
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="absolute right-0 top-0 h-full px-3"
                                onClick={() =>
                                  setShowPassword(prev => ({
                                    ...prev,
                                    [platform.id]: !prev[platform.id],
                                  }))
                                }
                              >
                                {showPassword[platform.id] ? (
                                  <EyeOff className="h-4 w-4" />
                                ) : (
                                  <Eye className="h-4 w-4" />
                                )}
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div>
                          <Label>Description</Label>
                          <Textarea defaultValue={platform.description} />
                        </div>
                        <div className="flex justify-end space-x-2">
                          <Button
                            variant="outline"
                            onClick={() => setIsEditing(null)}
                          >
                            Cancel
                          </Button>
                          <Button
                            onClick={() => handleSavePlatform(platform.id, {})}
                          >
                            <Save className="h-4 w-4 mr-2" />
                            Save Changes
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Display Settings Tab */}
        <TabsContent value="settings" className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Display Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-4">Footer Social Links</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {socialPlatforms.filter(p => p.displayInFooter).map((platform) => (
                    <div key={platform.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <PlatformIcon platform={platform} />
                        <span className="font-medium">{platform.name}</span>
                      </div>
                      <Switch
                        checked={platform.displayInFooter}
                        onCheckedChange={(checked) =>
                          handleToggleVisibility(platform.id, "displayInFooter", checked)
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-4">Header Social Links</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {socialPlatforms.map((platform) => (
                    <div key={platform.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <PlatformIcon platform={platform} />
                        <span className="font-medium">{platform.name}</span>
                      </div>
                      <Switch
                        checked={platform.displayInHeader}
                        onCheckedChange={(checked) =>
                          handleToggleVisibility(platform.id, "displayInHeader", checked)
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-4">Style Settings</h4>
                <div className="space-y-4">
                  <div>
                    <Label>Icon Size</Label>
                    <Select defaultValue="medium">
                      <SelectTrigger className="w-48">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Small (16px)</SelectItem>
                        <SelectItem value="medium">Medium (20px)</SelectItem>
                        <SelectItem value="large">Large (24px)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Display Style</Label>
                    <Select defaultValue="icons">
                      <SelectTrigger className="w-48">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="icons">Icons Only</SelectItem>
                        <SelectItem value="text">Text Only</SelectItem>
                        <SelectItem value="both">Icons + Text</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="hover-effects" defaultChecked />
                    <Label htmlFor="hover-effects">Enable Hover Effects</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="open-new-tab" defaultChecked />
                    <Label htmlFor="open-new-tab">Open Links in New Tab</Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Automation Tab */}
        <TabsContent value="automation" className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Social Media Automation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Alert>
                <Zap className="h-4 w-4" />
                <AlertDescription>
                  Automation features help streamline your social media presence by automatically posting updates and engaging with your audience.
                </AlertDescription>
              </Alert>

              <div>
                <h4 className="font-semibold mb-4">Auto-Posting Settings</h4>
                <div className="space-y-4">
                  {socialPlatforms.map((platform) => (
                    <div key={platform.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <PlatformIcon platform={platform} />
                        <div>
                          <p className="font-medium">{platform.name}</p>
                          <p className="text-sm text-gray-600">Auto-post shipment updates and news</p>
                        </div>
                      </div>
                      <Switch
                        checked={platform.autoPost}
                        onCheckedChange={(checked) =>
                          handleToggleVisibility(platform.id, "autoPost", checked)
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-4">Posting Schedule</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Posting Frequency</Label>
                    <Select defaultValue="daily">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="realtime">Real-time</SelectItem>
                        <SelectItem value="hourly">Every Hour</SelectItem>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Preferred Time</Label>
                    <Select defaultValue="business">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (8-12 PM)</SelectItem>
                        <SelectItem value="business">Business Hours (9-5 PM)</SelectItem>
                        <SelectItem value="evening">Evening (5-9 PM)</SelectItem>
                        <SelectItem value="night">Night (9-12 PM)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-4">Content Types</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Target className="h-4 w-4 text-blue-500" />
                      <span>Shipment Updates</span>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Globe className="h-4 w-4 text-green-500" />
                      <span>Company News</span>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-purple-500" />
                      <span>Industry Updates</span>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Image className="h-4 w-4 text-orange-500" />
                      <span>Behind the Scenes</span>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Platform Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {socialPlatforms.slice(0, 4).map((platform) => (
                    <div key={platform.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <PlatformIcon platform={platform} />
                        <span className="font-medium">{platform.name}</span>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{platform.followers}</p>
                        <p className="text-sm text-gray-600">{platform.engagement} eng.</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Facebook className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">New shipment update posted</p>
                      <p className="text-xs text-gray-600">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Twitter className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Industry news shared</p>
                      <p className="text-xs text-gray-600">4 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-pink-100 rounded-lg">
                      <Instagram className="h-4 w-4 text-pink-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Behind the scenes photo</p>
                      <p className="text-xs text-gray-600">6 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Linkedin className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Company milestone post</p>
                      <p className="text-xs text-gray-600">1 day ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Add Platform Modal */}
      <Dialog open={isAdding} onOpenChange={setIsAdding}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Add New Social Media Platform</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label>Platform Name</Label>
              <Input
                value={newPlatform.name}
                onChange={(e) => setNewPlatform(prev => ({ ...prev, name: e.target.value }))}
                placeholder="e.g., TikTok"
              />
            </div>
            <div>
              <Label>Platform Type</Label>
              <Input
                value={newPlatform.platform}
                onChange={(e) => setNewPlatform(prev => ({ ...prev, platform: e.target.value }))}
                placeholder="e.g., tiktok"
              />
            </div>
            <div>
              <Label>Profile URL</Label>
              <Input
                value={newPlatform.url}
                onChange={(e) => setNewPlatform(prev => ({ ...prev, url: e.target.value }))}
                placeholder="https://..."
              />
            </div>
            <div>
              <Label>Username/Handle</Label>
              <Input
                value={newPlatform.username}
                onChange={(e) => setNewPlatform(prev => ({ ...prev, username: e.target.value }))}
                placeholder="@username"
              />
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Switch
                  checked={newPlatform.displayInFooter}
                  onCheckedChange={(checked) =>
                    setNewPlatform(prev => ({ ...prev, displayInFooter: checked }))
                  }
                />
                <Label className="text-sm">Show in Footer</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  checked={newPlatform.displayInHeader}
                  onCheckedChange={(checked) =>
                    setNewPlatform(prev => ({ ...prev, displayInHeader: checked }))
                  }
                />
                <Label className="text-sm">Show in Header</Label>
              </div>
            </div>
            <div className="flex justify-end space-x-2 pt-4">
              <Button variant="outline" onClick={() => setIsAdding(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddPlatform}>
                <Plus className="h-4 w-4 mr-2" />
                Add Platform
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
