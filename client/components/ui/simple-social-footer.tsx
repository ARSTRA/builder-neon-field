import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
} from "lucide-react";

interface SimpleSocialFooterProps {
  className?: string;
}

export function SimpleSocialFooter({
  className = "",
}: SimpleSocialFooterProps) {
  const socialPlatforms = [
    {
      name: "Facebook",
      url: "https://facebook.com/globaltracklogistics",
      icon: Facebook,
      bgColor: "bg-blue-600 hover:bg-blue-700",
      shadowColor: "hover:shadow-blue-500/30",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/globaltrack",
      icon: Twitter,
      bgColor: "bg-sky-500 hover:bg-sky-600",
      shadowColor: "hover:shadow-sky-500/30",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/globaltrack_logistics",
      icon: Instagram,
      bgColor:
        "bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700",
      shadowColor: "hover:shadow-pink-500/30",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/globaltrack-logistics",
      icon: Linkedin,
      bgColor: "bg-blue-700 hover:bg-blue-800",
      shadowColor: "hover:shadow-blue-700/30",
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@globaltracklogistics",
      icon: Youtube,
      bgColor: "bg-red-600 hover:bg-red-700",
      shadowColor: "hover:shadow-red-500/30",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/15551234567",
      icon: MessageCircle,
      bgColor: "bg-green-600 hover:bg-green-700",
      shadowColor: "hover:shadow-green-500/30",
    },
  ];

  const handleSocialClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={`${className}`}>
      <h4 className="text-lg font-semibold text-orange-500 mb-4">Follow Us</h4>

      <div className="flex items-center flex-wrap gap-3 mb-6">
        {socialPlatforms.map((social) => {
          const Icon = social.icon;
          return (
            <button
              key={social.name}
              onClick={() => handleSocialClick(social.url)}
              className={`
                w-10 h-10 sm:w-11 sm:h-11
                ${social.bgColor}
                ${social.shadowColor}
                text-white
                rounded-full
                flex items-center justify-center
                transition-all duration-300
                shadow-lg hover:shadow-xl
                transform hover:scale-110 hover:-translate-y-1
                active:scale-95
                group
                relative
                overflow-hidden
                touch-manipulation
              `}
              title={`Follow us on ${social.name}`}
              aria-label={`Follow GlobalTrack on ${social.name}`}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </div>

              <Icon className="h-5 w-5 sm:h-5.5 sm:w-5.5 relative z-10" />
            </button>
          );
        })}
      </div>

      <div className="text-xs sm:text-sm text-gray-300 space-y-1">
        <p>
          🌟 <strong>63.8K+</strong> followers across all platforms
        </p>
        <p>
          📈 <strong>5.2%</strong> average engagement rate
        </p>
        <p>📱 Join our growing community!</p>
      </div>
    </div>
  );
}
