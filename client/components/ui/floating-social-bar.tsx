import { useState } from "react";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  MessageCircle,
  Share2,
  X,
  ChevronUp,
  ChevronDown
} from "lucide-react";

interface FloatingSocialBarProps {
  show?: boolean;
  position?: "bottom-left" | "bottom-right" | "bottom-center";
  className?: string;
}

export function FloatingSocialBar({ 
  show = true, 
  position = "bottom-right",
  className = "" 
}: FloatingSocialBarProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(show);

  const socialPlatforms = [
    {
      name: "Facebook",
      url: "https://facebook.com/globaltracklogistics",
      icon: Facebook,
      color: "bg-blue-600 hover:bg-blue-700",
      textColor: "text-white",
    },
    {
      name: "Twitter", 
      url: "https://twitter.com/globaltrack",
      icon: Twitter,
      color: "bg-sky-500 hover:bg-sky-600",
      textColor: "text-white",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/globaltrack_logistics", 
      icon: Instagram,
      color: "bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700",
      textColor: "text-white",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/globaltrack-logistics",
      icon: Linkedin,
      color: "bg-blue-700 hover:bg-blue-800",
      textColor: "text-white",
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@globaltracklogistics",
      icon: Youtube,
      color: "bg-red-600 hover:bg-red-700",
      textColor: "text-white",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/15551234567",
      icon: MessageCircle,
      color: "bg-green-600 hover:bg-green-700",
      textColor: "text-white",
    },
  ];

  const positionClasses = {
    "bottom-left": "bottom-4 left-4",
    "bottom-right": "bottom-4 right-4", 
    "bottom-center": "bottom-4 left-1/2 transform -translate-x-1/2",
  };

  const handleSocialClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed ${positionClasses[position]} z-50 ${className}`}>
      <div className="flex flex-col items-end space-y-2">
        {/* Social Icons */}
        <div className={`transition-all duration-300 ${
          isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}>
          <div className="flex flex-col space-y-2">
            {socialPlatforms.map((platform) => {
              const Icon = platform.icon;
              return (
                <button
                  key={platform.name}
                  onClick={() => handleSocialClick(platform.url)}
                  className={`
                    w-12 h-12 rounded-full 
                    ${platform.color}
                    ${platform.textColor}
                    flex items-center justify-center
                    shadow-lg hover:shadow-xl
                    transition-all duration-300
                    transform hover:scale-110 hover:-translate-y-1
                    group relative
                  `}
                  title={`Follow us on ${platform.name}`}
                >
                  <Icon className="h-6 w-6" />
                  
                  {/* Tooltip */}
                  <div className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    {platform.name}
                    <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-14 h-14 bg-gradient-to-br from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
        >
          <div className="relative">
            {isExpanded ? (
              <ChevronDown className="h-6 w-6 transition-transform duration-300" />
            ) : (
              <>
                <Share2 className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
              </>
            )}
          </div>
          
          {/* Main Tooltip */}
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            {isExpanded ? 'Hide Social' : 'Follow Us'}
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
          </div>
        </button>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="w-8 h-8 bg-gray-600 hover:bg-gray-700 text-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 mt-2"
          title="Hide social bar"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
