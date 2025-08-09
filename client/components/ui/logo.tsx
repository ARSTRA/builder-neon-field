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
      {/* Professional ShipNexa Logo - Modern logistics and shipping design */}
      <div className={cn("relative", sizeClasses[size])}>
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Professional gradient definitions */}
          <defs>
            {/* Primary brand gradient - Deep blue to teal */}
            <linearGradient
              id="brandPrimary"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="50%" stopColor="#0891b2" />
              <stop offset="100%" stopColor="#0d9488" />
            </linearGradient>

            {/* Secondary gradient - Ocean blues */}
            <linearGradient
              id="oceanGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#0c4a6e" />
              <stop offset="50%" stopColor="#0e7490" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>

            {/* Accent gradient - Warm oranges for energy */}
            <linearGradient
              id="energyGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#ea580c" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#eab308" />
            </linearGradient>

            {/* Technology gradient - Purple to blue */}
            <linearGradient
              id="techGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>

            {/* Container gradient - Professional grays with blue tint */}
            <linearGradient
              id="containerGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#475569" />
              <stop offset="50%" stopColor="#64748b" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>

            {/* Shadow filter for depth */}
            <filter
              id="logoShadow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3" />
            </filter>
          </defs>

          {/* Outer tech ring - representing global network */}
          <circle
            cx="60"
            cy="60"
            r="55"
            fill="none"
            stroke="url(#brandPrimary)"
            strokeWidth="2"
            strokeDasharray="10,5"
            className="opacity-30"
            filter="url(#logoShadow)"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 60 60"
              to="360 60 60"
              dur="30s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Inner connection ring */}
          <circle
            cx="60"
            cy="60"
            r="45"
            fill="none"
            stroke="url(#techGradient)"
            strokeWidth="1.5"
            strokeDasharray="8,3"
            className="opacity-40"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="360 60 60"
              to="0 60 60"
              dur="25s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Main shipping vessel - modern cargo ship design */}
          <g transform="translate(25,50)" filter="url(#logoShadow)">
            {/* Ship hull - sleek modern design */}
            <path
              d="M8 25 Q8 22 12 22 L65 22 Q70 22 70 27 L70 32 Q70 35 65 35 L12 35 Q8 35 8 32 Z"
              fill="url(#brandPrimary)"
              className="opacity-90"
            />

            {/* Ship superstructure */}
            <rect
              x="55"
              y="15"
              width="12"
              height="7"
              rx="2"
              fill="url(#containerGradient)"
            />
            <rect
              x="58"
              y="12"
              width="6"
              height="3"
              rx="1"
              fill="url(#techGradient)"
            />

            {/* Modern container stack - representing cargo efficiency */}
            <rect
              x="15"
              y="8"
              width="8"
              height="14"
              rx="1"
              fill="url(#energyGradient)"
            />
            <rect
              x="25"
              y="6"
              width="8"
              height="16"
              rx="1"
              fill="url(#oceanGradient)"
            />
            <rect
              x="35"
              y="10"
              width="8"
              height="12"
              rx="1"
              fill="url(#techGradient)"
            />
            <rect
              x="45"
              y="7"
              width="8"
              height="15"
              rx="1"
              fill="url(#brandPrimary)"
            />

            {/* Container details for realism */}
            <rect
              x="17"
              y="10"
              width="4"
              height="2"
              rx="0.5"
              fill="rgba(255,255,255,0.3)"
            />
            <rect
              x="27"
              y="8"
              width="4"
              height="2"
              rx="0.5"
              fill="rgba(255,255,255,0.3)"
            />
            <rect
              x="37"
              y="12"
              width="4"
              height="2"
              rx="0.5"
              fill="rgba(255,255,255,0.3)"
            />
            <rect
              x="47"
              y="9"
              width="4"
              height="2"
              rx="0.5"
              fill="rgba(255,255,255,0.3)"
            />

            {/* Dynamic wave pattern */}
            <path
              d="M5 37 Q15 35 25 37 Q35 39 45 37 Q55 35 65 37 Q75 39 85 37"
              fill="none"
              stroke="url(#oceanGradient)"
              strokeWidth="2"
              className="opacity-60"
            >
              <animate
                attributeName="d"
                values="M5 37 Q15 35 25 37 Q35 39 45 37 Q55 35 65 37 Q75 39 85 37;M5 39 Q15 37 25 39 Q35 37 45 39 Q55 37 65 39 Q75 37 85 39;M5 37 Q15 35 25 37 Q35 39 45 37 Q55 35 65 37 Q75 39 85 37"
                dur="3s"
                repeatCount="indefinite"
              />
            </path>
          </g>

          {/* Digital connectivity nodes - representing AI and IoT */}
          <g className="opacity-80">
            {/* Primary connection hub */}
            <circle cx="60" cy="60" r="8" fill="url(#techGradient)">
              <animate
                attributeName="r"
                values="6;10;6"
                dur="2.5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.8;1;0.8"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Satellite connection points */}
            <circle cx="85" cy="35" r="4" fill="url(#energyGradient)">
              <animate
                attributeName="opacity"
                values="0.6;1;0.6"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="35" cy="35" r="4" fill="url(#oceanGradient)">
              <animate
                attributeName="opacity"
                values="1;0.6;1"
                dur="2.2s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="85" cy="85" r="4" fill="url(#brandPrimary)">
              <animate
                attributeName="opacity"
                values="0.6;1;0.6"
                dur="1.8s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="35" cy="85" r="4" fill="url(#techGradient)">
              <animate
                attributeName="opacity"
                values="1;0.6;1"
                dur="2.1s"
                repeatCount="indefinite"
              />
            </circle>
          </g>

          {/* Data flow connections */}
          <g className="opacity-50">
            <line
              x1="60"
              y1="60"
              x2="85"
              y2="35"
              stroke="url(#energyGradient)"
              strokeWidth="2"
              strokeDasharray="4,2"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0;12"
                dur="1.5s"
                repeatCount="indefinite"
              />
            </line>
            <line
              x1="60"
              y1="60"
              x2="35"
              y2="35"
              stroke="url(#oceanGradient)"
              strokeWidth="2"
              strokeDasharray="4,2"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0;12"
                dur="1.7s"
                repeatCount="indefinite"
              />
            </line>
            <line
              x1="60"
              y1="60"
              x2="85"
              y2="85"
              stroke="url(#brandPrimary)"
              strokeWidth="2"
              strokeDasharray="4,2"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0;12"
                dur="1.3s"
                repeatCount="indefinite"
              />
            </line>
            <line
              x1="60"
              y1="60"
              x2="35"
              y2="85"
              stroke="url(#techGradient)"
              strokeWidth="2"
              strokeDasharray="4,2"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0;12"
                dur="1.6s"
                repeatCount="indefinite"
              />
            </line>
          </g>

          {/* Modern geometric accents - representing next-gen technology */}
          <g className="opacity-60">
            <path
              d="M20 20 L30 20 L30 30"
              fill="none"
              stroke="url(#energyGradient)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M100 20 L90 20 L90 30"
              fill="none"
              stroke="url(#techGradient)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M20 100 L30 100 L30 90"
              fill="none"
              stroke="url(#oceanGradient)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M100 100 L90 100 L90 90"
              fill="none"
              stroke="url(#brandPrimary)"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </g>

          {/* Speed lines representing fast delivery */}
          <g transform="translate(80,25)" className="opacity-40">
            <path
              d="M0 8 L15 3 L20 6 L25 1 L27 3 L23 12 L25 15 L23 17 L20 12 L15 20 L13 18 L15 15 L0 25 L-2 22 Z"
              fill="url(#energyGradient)"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0;3,0;0,0"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        </svg>
      </div>

      {/* Professional Company Name - ShipNexa */}
      <div className="flex flex-col">
        <div className="flex items-baseline">
          <span
            className={cn(
              "font-bold bg-gradient-to-r from-blue-700 via-blue-600 to-teal-600 bg-clip-text text-transparent tracking-tight",
              textSizeClasses[size],
            )}
          >
            Ship
          </span>
          <span
            className={cn(
              "font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent ml-0.5",
              textSizeClasses[size],
            )}
          >
            Nexa
          </span>
        </div>
        {size !== "sm" && (
          <span className="text-xs text-slate-600 font-medium tracking-wider bg-gradient-to-r from-slate-700 to-slate-600 bg-clip-text text-transparent">
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
        viewBox="0 0 120 120"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Professional mark version with same gradients */}
        <defs>
          <linearGradient
            id="brandPrimaryMark"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#1e40af" />
            <stop offset="50%" stopColor="#0891b2" />
            <stop offset="100%" stopColor="#0d9488" />
          </linearGradient>
          <linearGradient
            id="oceanGradientMark"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#0c4a6e" />
            <stop offset="50%" stopColor="#0e7490" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient
            id="energyGradientMark"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ea580c" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#eab308" />
          </linearGradient>
          <linearGradient
            id="techGradientMark"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <filter id="markShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="1" dy="1" stdDeviation="2" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Simplified mark with core elements */}
        <circle
          cx="60"
          cy="60"
          r="55"
          fill="none"
          stroke="url(#brandPrimaryMark)"
          strokeWidth="2"
          strokeDasharray="10,5"
          className="opacity-30"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 60 60"
            to="360 60 60"
            dur="30s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Simplified ship */}
        <g transform="translate(25,50)" filter="url(#markShadow)">
          <path
            d="M8 25 Q8 22 12 22 L65 22 Q70 22 70 27 L70 32 Q70 35 65 35 L12 35 Q8 35 8 32 Z"
            fill="url(#brandPrimaryMark)"
          />
          <rect
            x="15"
            y="8"
            width="8"
            height="14"
            rx="1"
            fill="url(#energyGradientMark)"
          />
          <rect
            x="25"
            y="6"
            width="8"
            height="16"
            rx="1"
            fill="url(#oceanGradientMark)"
          />
          <rect
            x="35"
            y="10"
            width="8"
            height="12"
            rx="1"
            fill="url(#techGradientMark)"
          />
          <rect
            x="45"
            y="7"
            width="8"
            height="15"
            rx="1"
            fill="url(#brandPrimaryMark)"
          />
        </g>

        {/* Central hub */}
        <circle cx="60" cy="60" r="8" fill="url(#techGradientMark)">
          <animate
            attributeName="r"
            values="6;10;6"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
}
