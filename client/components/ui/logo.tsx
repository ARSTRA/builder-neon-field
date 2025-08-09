import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function Logo({ className, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-16 w-16",
    xl: "h-20 w-20",
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl",
  };

  return (
    <div className={cn("flex items-center space-x-3", className)}>
      {/* ShipNexa Logo Icon - Modern geometric design representing next-generation shipping */}
      <div className={cn("relative", sizeClasses[size])}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Enhanced Gradient Definitions with vibrant colors */}
          <defs>
            <linearGradient
              id="primaryGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#667eea" />
              <stop offset="50%" stopColor="#764ba2" />
              <stop offset="100%" stopColor="#f093fb" />
            </linearGradient>
            <linearGradient
              id="secondaryGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#4facfe" />
              <stop offset="50%" stopColor="#00f2fe" />
              <stop offset="100%" stopColor="#43e97b" />
            </linearGradient>
            <linearGradient
              id="accentGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#fa709a" />
              <stop offset="50%" stopColor="#fee140" />
              <stop offset="100%" stopColor="#ff6b6b" />
            </linearGradient>
            <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#667eea" />
              <stop offset="50%" stopColor="#764ba2" />
              <stop offset="100%" stopColor="#f093fb" />
            </radialGradient>
            <linearGradient
              id="shipGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#667eea" />
              <stop offset="100%" stopColor="#764ba2" />
            </linearGradient>
          </defs>

          {/* Outer ring with modern design */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#primaryGradient)"
            strokeWidth="3"
            strokeDasharray="5,2"
            className="opacity-60"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="20s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Modern network connections */}
          <path
            d="M20 25 Q50 15 80 25 Q85 50 80 75 Q50 85 20 75 Q15 50 20 25"
            fill="none"
            stroke="url(#secondaryGradient)"
            strokeWidth="2"
            className="opacity-40"
          />

          {/* Central Ship Icon - Modern geometric style */}
          <g transform="translate(30,35)">
            {/* Ship body */}
            <path
              d="M5 20 Q5 18 7 18 L33 18 Q35 18 35 20 L35 25 Q35 27 33 27 L7 27 Q5 27 5 25 Z"
              fill="url(#shipGradient)"
            />
            {/* Containers with colorful design */}
            <rect x="8" y="10" width="6" height="8" rx="1" fill="url(#accentGradient)" />
            <rect x="16" y="8" width="6" height="10" rx="1" fill="url(#secondaryGradient)" />
            <rect x="24" y="12" width="6" height="6" rx="1" fill="url(#primaryGradient)" />
            
            {/* Ship bridge */}
            <rect x="30" y="14" width="4" height="4" rx="1" fill="url(#centerGradient)" />
            
            {/* Wave effects */}
            <path
              d="M0 28 Q10 30 20 28 Q30 26 40 28"
              fill="none"
              stroke="url(#secondaryGradient)"
              strokeWidth="1.5"
              className="opacity-60"
            />
          </g>

          {/* Flying elements representing speed and connectivity */}
          <g transform="translate(65,20)">
            <path
              d="M0 5 L10 0 L15 3 L20 -2 L22 0 L18 6 L20 8 L18 10 L15 6 L10 12 L8 10 L10 8 L0 15 L-2 12 Z"
              fill="url(#accentGradient)"
              opacity="0.8"
            />
          </g>

          {/* Data flow lines */}
          <g>
            <line
              x1="50"
              y1="50"
              x2="75"
              y2="25"
              stroke="url(#primaryGradient)"
              strokeWidth="2"
              className="opacity-70"
              strokeDasharray="3,1"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0;8"
                dur="1s"
                repeatCount="indefinite"
              />
            </line>
            <line
              x1="50"
              y1="50"
              x2="25"
              y2="75"
              stroke="url(#secondaryGradient)"
              strokeWidth="2"
              className="opacity-70"
              strokeDasharray="3,1"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0;8"
                dur="1.5s"
                repeatCount="indefinite"
              />
            </line>
            <line
              x1="50"
              y1="50"
              x2="80"
              y2="70"
              stroke="url(#accentGradient)"
              strokeWidth="2"
              className="opacity-70"
              strokeDasharray="3,1"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0;8"
                dur="1.2s"
                repeatCount="indefinite"
              />
            </line>
          </g>

          {/* Central hub with pulsing effect */}
          <circle cx="50" cy="50" r="10" fill="url(#centerGradient)" opacity="0.9">
            <animate
              attributeName="r"
              values="8;12;8"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.7;1;0.7"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Nexus connection points */}
          <circle cx="75" cy="25" r="3" fill="url(#accentGradient)">
            <animate
              attributeName="opacity"
              values="0.5;1;0.5"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="25" cy="75" r="3" fill="url(#secondaryGradient)">
            <animate
              attributeName="opacity"
              values="1;0.5;1"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="80" cy="70" r="3" fill="url(#primaryGradient)">
            <animate
              attributeName="opacity"
              values="0.5;1;0.5"
              dur="1.8s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Modern accent elements */}
          <path
            d="M15 15 L25 15 L25 25"
            fill="none"
            stroke="url(#accentGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            className="opacity-50"
          />
          <path
            d="M85 15 L75 15 L75 25"
            fill="none"
            stroke="url(#secondaryGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            className="opacity-50"
          />
        </svg>
      </div>

      {/* Company Name - ShipNexa */}
      <div className="flex flex-col">
        <div className="flex items-baseline">
          <span
            className={cn(
              "font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-teal-500 bg-clip-text text-transparent tracking-tight",
              textSizeClasses[size],
            )}
          >
            Ship
          </span>
          <span
            className={cn(
              "font-bold bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent ml-0.5",
              textSizeClasses[size],
            )}
          >
            Nexa
          </span>
        </div>
        {size !== "sm" && (
          <span className="text-xs text-gray-600 font-medium tracking-wide bg-gradient-to-r from-slate-600 to-slate-500 bg-clip-text text-transparent">
            NEXT-GENERATION SHIPPING
          </span>
        )}
      </div>
    </div>
  );
}

export function LogoMark({
  className,
  size = "md",
}: Omit<LogoProps, "className"> & { className?: string }) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-16 w-16",
    xl: "h-20 w-20",
  };

  return (
    <div className={cn("relative", sizeClasses[size], className)}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Same advanced gradients */}
        <defs>
          <linearGradient
            id="primaryGradientMark"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#667eea" />
            <stop offset="50%" stopColor="#764ba2" />
            <stop offset="100%" stopColor="#f093fb" />
          </linearGradient>
          <linearGradient
            id="secondaryGradientMark"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#4facfe" />
            <stop offset="50%" stopColor="#00f2fe" />
            <stop offset="100%" stopColor="#43e97b" />
          </linearGradient>
          <linearGradient
            id="accentGradientMark"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#fa709a" />
            <stop offset="50%" stopColor="#fee140" />
            <stop offset="100%" stopColor="#ff6b6b" />
          </linearGradient>
          <radialGradient id="centerGradientMark" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#667eea" />
            <stop offset="50%" stopColor="#764ba2" />
            <stop offset="100%" stopColor="#f093fb" />
          </radialGradient>
        </defs>

        {/* Simplified mark version with same design elements */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="url(#primaryGradientMark)"
          strokeWidth="3"
          strokeDasharray="5,2"
          className="opacity-60"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="20s"
            repeatCount="indefinite"
          />
        </circle>

        <g transform="translate(30,35)">
          <path
            d="M5 20 Q5 18 7 18 L33 18 Q35 18 35 20 L35 25 Q35 27 33 27 L7 27 Q5 27 5 25 Z"
            fill="url(#primaryGradientMark)"
          />
          <rect x="8" y="10" width="6" height="8" rx="1" fill="url(#accentGradientMark)" />
          <rect x="16" y="8" width="6" height="10" rx="1" fill="url(#secondaryGradientMark)" />
          <rect x="24" y="12" width="6" height="6" rx="1" fill="url(#primaryGradientMark)" />
        </g>

        <circle cx="50" cy="50" r="10" fill="url(#centerGradientMark)" opacity="0.9">
          <animate
            attributeName="r"
            values="8;12;8"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
}
