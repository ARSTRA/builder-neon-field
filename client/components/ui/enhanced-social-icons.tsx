import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
  Mail,
  Phone,
} from "lucide-react";

interface SocialIcon {
  name: string;
  url: string;
  icon: React.ComponentType<any>;
  bgGradient: string;
  hoverGradient: string;
  iconColor: string;
  shadowColor: string;
  enabled: boolean;
}

interface EnhancedSocialIconsProps {
  showLabels?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function EnhancedSocialIcons({
  showLabels = false,
  size = "md",
  className = "",
}: EnhancedSocialIconsProps) {
  const socialIcons: SocialIcon[] = [
    {
      name: "Facebook",
      url: "https://facebook.com/globaltracklogistics",
      icon: Facebook,
      bgGradient: "bg-gradient-to-br from-blue-500 to-blue-700",
      hoverGradient: "hover:from-blue-400 hover:to-blue-600",
      iconColor: "text-white",
      shadowColor: "shadow-blue-500/30",
      enabled: true,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/globaltrack",
      icon: Twitter,
      bgGradient: "bg-gradient-to-br from-sky-400 to-sky-600",
      hoverGradient: "hover:from-sky-300 hover:to-sky-500",
      iconColor: "text-white",
      shadowColor: "shadow-sky-500/30",
      enabled: true,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/globaltrack_logistics",
      icon: Instagram,
      bgGradient:
        "bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500",
      hoverGradient:
        "hover:from-pink-400 hover:via-purple-400 hover:to-indigo-400",
      iconColor: "text-white",
      shadowColor: "shadow-pink-500/30",
      enabled: true,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/globaltrack-logistics",
      icon: Linkedin,
      bgGradient: "bg-gradient-to-br from-blue-600 to-blue-800",
      hoverGradient: "hover:from-blue-500 hover:to-blue-700",
      iconColor: "text-white",
      shadowColor: "shadow-blue-600/30",
      enabled: true,
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@globaltracklogistics",
      icon: Youtube,
      bgGradient: "bg-gradient-to-br from-red-500 to-red-700",
      hoverGradient: "hover:from-red-400 hover:to-red-600",
      iconColor: "text-white",
      shadowColor: "shadow-red-500/30",
      enabled: true,
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/15551234567",
      icon: MessageCircle,
      bgGradient: "bg-gradient-to-br from-green-500 to-green-700",
      hoverGradient: "hover:from-green-400 hover:to-green-600",
      iconColor: "text-white",
      shadowColor: "shadow-green-500/30",
      enabled: true,
    },
  ];

  const sizeClasses = {
    sm: {
      container: "w-10 h-10",
      icon: "h-5 w-5",
      text: "text-xs",
      gap: "gap-3",
    },
    md: {
      container: "w-12 h-12",
      icon: "h-6 w-6",
      text: "text-sm",
      gap: "gap-4",
    },
    lg: {
      container: "w-14 h-14",
      icon: "h-7 w-7",
      text: "text-base",
      gap: "gap-5",
    },
  };

  const activePlatforms = socialIcons.filter((platform) => platform.enabled);

  const handleSocialClick = (url: string, name: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={`${className}`}>
      {showLabels && (
        <h4 className="text-lg font-semibold text-orange-500 mb-6">
          Connect With Us
        </h4>
      )}

      <div className={`flex items-center ${sizeClasses[size].gap} flex-wrap`}>
        {activePlatforms.map((social) => {
          const Icon = social.icon;
          return (
            <div key={social.name} className="group">
              <button
                onClick={() => handleSocialClick(social.url, social.name)}
                className={`
                  ${sizeClasses[size].container} 
                  ${social.bgGradient} 
                  ${social.hoverGradient}
                  ${social.shadowColor}
                  rounded-full 
                  flex items-center justify-center 
                  transition-all duration-300 
                  shadow-lg 
                  hover:shadow-xl 
                  hover:scale-110 
                  transform 
                  hover:-translate-y-1
                  active:scale-95
                  relative
                  overflow-hidden
                `}
                title={`Follow us on ${social.name}`}
                aria-label={`Follow GlobalTrack on ${social.name}`}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </div>

                <Icon
                  className={`${sizeClasses[size].icon} ${social.iconColor} relative z-10`}
                />
              </button>

              {showLabels && (
                <p
                  className={`${sizeClasses[size].text} text-center text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                >
                  {social.name}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Alternative Layout: Contact Info */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          className="group cursor-pointer"
          onClick={() => window.open("tel:+15551234567", "_self")}
        >
          <div
            className={`
            ${sizeClasses[size].container}
            bg-gradient-to-br from-emerald-500 to-emerald-700
            hover:from-emerald-400 hover:to-emerald-600
            shadow-emerald-500/30
            rounded-full 
            flex items-center justify-center 
            transition-all duration-300 
            shadow-lg 
            hover:shadow-xl 
            hover:scale-110 
            transform 
            hover:-translate-y-1
            active:scale-95
            relative
            overflow-hidden
            inline-flex
          `}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </div>

            <Phone
              className={`${sizeClasses[size].icon} text-white relative z-10`}
            />
          </div>
          <div className="ml-4 inline-block align-middle">
            <h4 className="text-white font-semibold">Call Us</h4>
            <p className="text-gray-300 text-sm">+1 (555) 123-4567</p>
          </div>
        </div>

        <div
          className="group cursor-pointer"
          onClick={() => window.open("mailto:info@globaltrack.com", "_self")}
        >
          <div
            className={`
            ${sizeClasses[size].container}
            bg-gradient-to-br from-orange-500 to-orange-700
            hover:from-orange-400 hover:to-orange-600
            shadow-orange-500/30
            rounded-full 
            flex items-center justify-center 
            transition-all duration-300 
            shadow-lg 
            hover:shadow-xl 
            hover:scale-110 
            transform 
            hover:-translate-y-1
            active:scale-95
            relative
            overflow-hidden
            inline-flex
          `}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </div>

            <Mail
              className={`${sizeClasses[size].icon} text-white relative z-10`}
            />
          </div>
          <div className="ml-4 inline-block align-middle">
            <h4 className="text-white font-semibold">Email Us</h4>
            <p className="text-gray-300 text-sm">info@globaltrack.com</p>
          </div>
        </div>
      </div>

      {/* Stats Display */}
      <div className="mt-8 pt-6 border-t border-gray-700">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-orange-500">63.8K+</div>
            <div className="text-xs text-gray-400">Total Followers</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-500">5.2%</div>
            <div className="text-xs text-gray-400">Engagement Rate</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-500">142</div>
            <div className="text-xs text-gray-400">Posts This Month</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-500">6</div>
            <div className="text-xs text-gray-400">Active Platforms</div>
          </div>
        </div>
      </div>
    </div>
  );
}
