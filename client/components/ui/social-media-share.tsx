import {
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
  Mail,
  Link,
  Share2,
  Copy,
  Check,
} from "lucide-react";
import { useState } from "react";
import { Button } from "./button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { useToast } from "@/hooks/use-toast";

interface SocialMediaShareProps {
  url?: string;
  title?: string;
  description?: string;
  hashtags?: string[];
  showText?: boolean;
  style?: "icons" | "dropdown" | "list";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function SocialMediaShare({
  url = window.location.href,
  title = document.title,
  description = "Check out this page from ShipNexa",
  hashtags = ["logistics", "shipping", "shipnexa"],
  showText = false,
  style = "icons",
  size = "md",
  className = "",
}: SocialMediaShareProps) {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);
  const hashtagString = hashtags.map((tag) => `#${tag}`).join(" ");

  const shareLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      color: "#1877F2",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      name: "Twitter",
      icon: Twitter,
      color: "#1DA1F2",
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&hashtags=${hashtags.join(",")}`,
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      color: "#0A66C2",
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      color: "#25D366",
      url: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    },
    {
      name: "Email",
      icon: Mail,
      color: "#666666",
      url: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
    },
  ];

  const iconSize = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  }[size];

  const buttonSize = {
    sm: "p-1.5",
    md: "p-2",
    lg: "p-2.5",
  }[size];

  const handleShare = (shareUrl: string, platform: string) => {
    window.open(
      shareUrl,
      "_blank",
      "width=600,height=400,scrollbars=yes,resizable=yes",
    );
    toast({
      title: "Sharing",
      description: `Opening ${platform} share dialog...`,
    });
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast({
        title: "Link Copied",
        description: "Page URL copied to clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Copy Failed",
        description: "Failed to copy link to clipboard.",
        variant: "destructive",
      });
    }
  };

  // Dropdown style
  if (style === "dropdown") {
    return (
      <div className={className}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size={size === "sm" ? "sm" : size === "lg" ? "lg" : "default"}
              className="flex items-center space-x-2"
            >
              <Share2 className={iconSize} />
              {showText && <span>Share</span>}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel>Share this page</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {shareLinks.map((platform) => {
              const Icon = platform.icon;
              return (
                <DropdownMenuItem
                  key={platform.name}
                  onClick={() => handleShare(platform.url, platform.name)}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <Icon className="h-4 w-4" style={{ color: platform.color }} />
                  <span>Share on {platform.name}</span>
                </DropdownMenuItem>
              );
            })}
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={handleCopyLink}
              className="flex items-center space-x-2 cursor-pointer"
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-600" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              <span>{copied ? "Copied!" : "Copy Link"}</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }

  // List style
  if (style === "list") {
    return (
      <div className={`space-y-2 ${className}`}>
        <h4 className="font-semibold text-gray-900 mb-3">Share this page</h4>
        {shareLinks.map((platform) => {
          const Icon = platform.icon;
          return (
            <Button
              key={platform.name}
              variant="outline"
              onClick={() => handleShare(platform.url, platform.name)}
              className="w-full justify-start space-x-3 h-12"
            >
              <Icon className="h-5 w-5" style={{ color: platform.color }} />
              <span>Share on {platform.name}</span>
            </Button>
          );
        })}
        <Button
          variant="outline"
          onClick={handleCopyLink}
          className="w-full justify-start space-x-3 h-12"
        >
          {copied ? (
            <Check className="h-5 w-5 text-green-600" />
          ) : (
            <Copy className="h-5 w-5" />
          )}
          <span>{copied ? "Link Copied!" : "Copy Link"}</span>
        </Button>
      </div>
    );
  }

  // Icons style (default)
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {showText && (
        <span className="text-sm font-medium text-gray-700 mr-2">Share:</span>
      )}
      {shareLinks.map((platform) => {
        const Icon = platform.icon;
        return (
          <TooltipProvider key={platform.name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`${buttonSize} hover:bg-gray-100 transition-all duration-200 hover:scale-110`}
                  onClick={() => handleShare(platform.url, platform.name)}
                >
                  <Icon
                    className={iconSize}
                    style={{ color: platform.color }}
                  />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Share on {platform.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}

      {/* Copy Link Button */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className={`${buttonSize} hover:bg-gray-100 transition-all duration-200 hover:scale-110`}
              onClick={handleCopyLink}
            >
              {copied ? (
                <Check className={`${iconSize} text-green-600`} />
              ) : (
                <Link className={`${iconSize} text-gray-600`} />
              )}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{copied ? "Copied!" : "Copy Link"}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
