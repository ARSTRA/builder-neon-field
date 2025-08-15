import { createContext, useContext, useState, ReactNode } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
  Globe,
} from "lucide-react";

export interface SocialMediaPlatform {
  id: string;
  name: string;
  platform: string;
  icon: React.ComponentType<any>;
  url: string;
  username: string;
  followers?: string;
  apiKey?: string;
  accessToken?: string;
  enabled: boolean;
  displayInFooter: boolean;
  displayInHeader: boolean;
  autoPost: boolean;
  color: string;
  description?: string;
  lastPost?: string;
  engagement?: string;
  posts?: number;
}

export interface SocialMediaSettings {
  enableInFooter: boolean;
  enableInHeader: boolean;
  enableSharing: boolean;
  iconSize: "small" | "medium" | "large";
  displayStyle: "icons" | "text" | "both";
  hoverEffects: boolean;
  openInNewTab: boolean;
}

interface SocialMediaContextType {
  platforms: SocialMediaPlatform[];
  settings: SocialMediaSettings;
  updatePlatform: (id: string, updates: Partial<SocialMediaPlatform>) => void;
  addPlatform: (platform: Omit<SocialMediaPlatform, "id">) => void;
  removePlatform: (id: string) => void;
  updateSettings: (updates: Partial<SocialMediaSettings>) => void;
  getActivePlatforms: () => SocialMediaPlatform[];
  getFooterPlatforms: () => SocialMediaPlatform[];
  getHeaderPlatforms: () => SocialMediaPlatform[];
}

const SocialMediaContext = createContext<SocialMediaContextType | undefined>(
  undefined,
);

// Default platforms configuration
const defaultPlatforms: SocialMediaPlatform[] = [
  {
    id: "facebook",
    name: "Facebook",
    platform: "facebook",
    icon: Facebook,
    url: "https://facebook.com/globaltracklogistics",
    username: "@globaltracklogistics",
    followers: "12.5K",
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
];

const defaultSettings: SocialMediaSettings = {
  enableInFooter: true,
  enableInHeader: true,
  enableSharing: true,
  iconSize: "medium",
  displayStyle: "icons",
  hoverEffects: true,
  openInNewTab: true,
};

export function SocialMediaProvider({ children }: { children: ReactNode }) {
  const [platforms, setPlatforms] =
    useState<SocialMediaPlatform[]>(defaultPlatforms);
  const [settings, setSettings] =
    useState<SocialMediaSettings>(defaultSettings);

  const updatePlatform = (
    id: string,
    updates: Partial<SocialMediaPlatform>,
  ) => {
    setPlatforms((prev) =>
      prev.map((platform) =>
        platform.id === id ? { ...platform, ...updates } : platform,
      ),
    );
  };

  const addPlatform = (platform: Omit<SocialMediaPlatform, "id">) => {
    const newPlatform: SocialMediaPlatform = {
      ...platform,
      id: platform.platform.toLowerCase().replace(/\s+/g, "-"),
    };
    setPlatforms((prev) => [...prev, newPlatform]);
  };

  const removePlatform = (id: string) => {
    setPlatforms((prev) => prev.filter((platform) => platform.id !== id));
  };

  const updateSettings = (updates: Partial<SocialMediaSettings>) => {
    setSettings((prev) => ({ ...prev, ...updates }));
  };

  const getActivePlatforms = () => {
    return platforms.filter((platform) => platform.enabled);
  };

  const getFooterPlatforms = () => {
    return platforms.filter(
      (platform) =>
        platform.enabled && platform.displayInFooter && settings.enableInFooter,
    );
  };

  const getHeaderPlatforms = () => {
    return platforms.filter(
      (platform) =>
        platform.enabled && platform.displayInHeader && settings.enableInHeader,
    );
  };

  const value: SocialMediaContextType = {
    platforms,
    settings,
    updatePlatform,
    addPlatform,
    removePlatform,
    updateSettings,
    getActivePlatforms,
    getFooterPlatforms,
    getHeaderPlatforms,
  };

  return (
    <SocialMediaContext.Provider value={value}>
      {children}
    </SocialMediaContext.Provider>
  );
}

export function useSocialMedia() {
  const context = useContext(SocialMediaContext);
  if (context === undefined) {
    throw new Error("useSocialMedia must be used within a SocialMediaProvider");
  }
  return context;
}

// Hook for getting social media statistics
export function useSocialMediaStats() {
  const { platforms } = useSocialMedia();

  const totalFollowers = platforms
    .filter((p) => p.enabled && p.followers && p.followers !== "N/A")
    .reduce((total, platform) => {
      const followers = platform.followers!.replace(/[K,]/g, "");
      const multiplier = platform.followers!.includes("K") ? 1000 : 1;
      return total + parseFloat(followers) * multiplier;
    }, 0);

  const averageEngagement = platforms
    .filter((p) => p.enabled && p.engagement && p.engagement !== "N/A")
    .reduce((total, platform, _, array) => {
      const engagement = parseFloat(platform.engagement!.replace("%", ""));
      return total + engagement / array.length;
    }, 0);

  const totalPosts = platforms
    .filter((p) => p.enabled && p.posts)
    .reduce((total, platform) => total + (platform.posts || 0), 0);

  const activePlatforms = platforms.filter((p) => p.enabled).length;

  return {
    totalFollowers: Math.round(totalFollowers),
    averageEngagement: Math.round(averageEngagement * 10) / 10,
    totalPosts,
    activePlatforms,
  };
}
