import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  MessageCircle,
  ExternalLink,
  Share2
} from "lucide-react";
import { Button } from "./button";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "./tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";

interface SocialMediaLink {
  name: string;
  url: string;
  icon: React.ComponentType<any>;
  color: string;
  enabled: boolean;
  displayInHeader?: boolean;
}

interface SocialMediaWidgetProps {
  showInHeader?: boolean;
  style?: "icons" | "dropdown" | "compact";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function SocialMediaWidget({ 
  showInHeader = false, 
  style = "icons",
  size = "md",
  className = ""
}: SocialMediaWidgetProps) {
  // This would typically come from a context/store or API
  const socialMediaLinks: SocialMediaLink[] = [
    {
      name: "Facebook",
      url: "https://facebook.com/globaltracklogistics",
      icon: Facebook,
      color: "#1877F2",
      enabled: true,
      displayInHeader: false,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/globaltrack",
      icon: Twitter,
      color: "#1DA1F2",
      enabled: true,
      displayInHeader: true,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/globaltrack_logistics",
      icon: Instagram,
      color: "#E4405F",
      enabled: true,
      displayInHeader: false,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/globaltrack-logistics",
      icon: Linkedin,
      color: "#0A66C2",
      enabled: true,
      displayInHeader: false,
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@globaltracklogistics",
      icon: Youtube,
      color: "#FF0000",
      enabled: true,
      displayInHeader: false,
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/15551234567",
      icon: MessageCircle,
      color: "#25D366",
      enabled: true,
      displayInHeader: true,
    },
  ];

  const filteredLinks = showInHeader 
    ? socialMediaLinks.filter(link => link.enabled && link.displayInHeader)
    : socialMediaLinks.filter(link => link.enabled);

  const iconSize = {
    sm: "h-4 w-4",
    md: "h-5 w-5", 
    lg: "h-6 w-6"
  }[size];

  const buttonSize = {
    sm: "p-1.5",
    md: "p-2",
    lg: "p-2.5"
  }[size];

  if (filteredLinks.length === 0) {
    return null;
  }

  const openSocialLink = (url: string, name: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Compact style - just a few key platforms
  if (style === "compact") {
    const compactLinks = filteredLinks.slice(0, 3);
    return (
      <div className={`flex items-center space-x-1 ${className}`}>
        {compactLinks.map((social) => {
          const Icon = social.icon;
          return (
            <TooltipProvider key={social.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`${buttonSize} text-gray-600 hover:text-gray-900 transition-colors`}
                    onClick={() => openSocialLink(social.url, social.name)}
                  >
                    <Icon className={iconSize} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Follow us on {social.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
        {filteredLinks.length > 3 && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className={`${buttonSize} text-gray-600 hover:text-gray-900`}
              >
                <Share2 className={iconSize} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel>More Social Links</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {filteredLinks.slice(3).map((social) => {
                const Icon = social.icon;
                return (
                  <DropdownMenuItem
                    key={social.name}
                    onClick={() => openSocialLink(social.url, social.name)}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <Icon className="h-4 w-4" style={{ color: social.color }} />
                    <span>{social.name}</span>
                    <ExternalLink className="h-3 w-3 ml-auto text-gray-400" />
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    );
  }

  // Dropdown style - all platforms in a dropdown menu
  if (style === "dropdown") {
    return (
      <div className={className}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className={`${buttonSize} text-gray-600 hover:text-gray-900`}
            >
              <Share2 className={iconSize} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel>Follow Us</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {filteredLinks.map((social) => {
              const Icon = social.icon;
              return (
                <DropdownMenuItem
                  key={social.name}
                  onClick={() => openSocialLink(social.url, social.name)}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <Icon className="h-4 w-4" style={{ color: social.color }} />
                  <span>{social.name}</span>
                  <ExternalLink className="h-3 w-3 ml-auto text-gray-400" />
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }

  // Icons style - show all platforms as individual icons
  return (
    <div className={`flex items-center space-x-1 ${className}`}>
      {filteredLinks.map((social) => {
        const Icon = social.icon;
        return (
          <TooltipProvider key={social.name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`${buttonSize} text-gray-600 hover:text-gray-900 transition-all duration-200 hover:scale-110`}
                  onClick={() => openSocialLink(social.url, social.name)}
                >
                  <Icon 
                    className={iconSize} 
                    style={{ 
                      color: social.color,
                      transition: "all 0.2s ease"
                    }}
                  />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Follow us on {social.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </div>
  );
}
