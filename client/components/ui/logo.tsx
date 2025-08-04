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
      {/* Logo Icon - Sophisticated geometric design representing global logistics */}
      <div className={cn("relative", sizeClasses[size])}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(221, 83%, 53%)" />
              <stop offset="100%" stopColor="hsl(221, 83%, 43%)" />
            </linearGradient>
            <linearGradient id="secondaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(25, 95%, 53%)" />
              <stop offset="100%" stopColor="hsl(21, 90%, 48%)" />
            </linearGradient>
            <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(25, 95%, 53%)" />
              <stop offset="100%" stopColor="hsl(221, 83%, 53%)" />
            </radialGradient>
          </defs>

          {/* Globe/World outline */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#primaryGradient)"
            strokeWidth="2"
            className="opacity-30"
          />

          {/* Continental outlines */}
          <path
            d="M25 35 Q35 30 45 35 Q55 40 65 35 Q75 30 85 35"
            fill="none"
            stroke="url(#primaryGradient)"
            strokeWidth="1.5"
            className="opacity-40"
          />
          <path
            d="M15 55 Q25 50 35 55 Q45 60 55 55 Q65 50 75 55"
            fill="none"
            stroke="url(#primaryGradient)"
            strokeWidth="1.5"
            className="opacity-40"
          />

          {/* Transportation modes integrated into the design */}
          
          {/* Airplane (top right) */}
          <g transform="translate(65,25) scale(0.8)">
            <path
              d="M2 8 L8 2 L12 6 L18 0 L20 2 L16 8 L18 10 L16 12 L12 8 L8 12 L6 10 L8 8 L2 14 L0 12 Z"
              fill="url(#secondaryGradient)"
            />
          </g>

          {/* Ship (bottom left) */}
          <g transform="translate(20,70) scale(0.9)">
            <path
              d="M2 8 Q2 6 4 6 L16 6 Q18 6 18 8 L18 10 Q18 12 16 12 L4 12 Q2 12 2 10 Z"
              fill="url(#primaryGradient)"
            />
            <rect x="6" y="2" width="1" height="4" fill="url(#secondaryGradient)" />
            <rect x="10" y="3" width="1" height="3" fill="url(#secondaryGradient)" />
            <rect x="14" y="4" width="1" height="2" fill="url(#secondaryGradient)" />
          </g>

          {/* Truck (bottom right) */}
          <g transform="translate(70,70) scale(0.8)">
            <rect x="0" y="6" width="8" height="4" rx="1" fill="url(#primaryGradient)" />
            <rect x="8" y="4" width="6" height="6" rx="1" fill="url(#secondaryGradient)" />
            <circle cx="3" cy="12" r="2" fill="url(#centerGradient)" />
            <circle cx="11" cy="12" r="2" fill="url(#centerGradient)" />
          </g>

          {/* Central connecting hub */}
          <circle
            cx="50"
            cy="50"
            r="8"
            fill="url(#centerGradient)"
          />

          {/* Connecting lines showing global network */}
          <line x1="50" y1="50" x2="70" y2="30" stroke="url(#secondaryGradient)" strokeWidth="1.5" className="opacity-60" />
          <line x1="50" y1="50" x2="30" y2="75" stroke="url(#primaryGradient)" strokeWidth="1.5" className="opacity-60" />
          <line x1="50" y1="50" x2="75" y2="75" stroke="url(#secondaryGradient)" strokeWidth="1.5" className="opacity-60" />

          {/* Tracking dots showing movement */}
          <circle cx="60" cy="40" r="1.5" fill="hsl(25, 95%, 53%)">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="40" cy="62" r="1.5" fill="hsl(221, 83%, 53%)">
            <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="62" cy="62" r="1.5" fill="hsl(25, 95%, 53%)">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      {/* Company Name */}
      <div className="flex flex-col">
        <div className="flex items-baseline">
          <span className={cn("font-bold text-royal-600 tracking-tight", textSizeClasses[size])}>
            GlobalTrack
          </span>
          <span className={cn("text-orange-500 ml-1 font-semibold", textSizeClasses[size])}>
            Logistics
          </span>
        </div>
        {size !== "sm" && (
          <span className="text-xs text-gray-500 font-medium tracking-wide">
            WORLDWIDE SHIPPING SOLUTIONS
          </span>
        )}
      </div>
    </div>
  );
}

export function LogoMark({ className, size = "md" }: Omit<LogoProps, "className"> & { className?: string }) {
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
        {/* Same SVG content as above but just the icon part */}
        <defs>
          <linearGradient id="primaryGradientMark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(221, 83%, 53%)" />
            <stop offset="100%" stopColor="hsl(221, 83%, 43%)" />
          </linearGradient>
          <linearGradient id="secondaryGradientMark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(25, 95%, 53%)" />
            <stop offset="100%" stopColor="hsl(21, 90%, 48%)" />
          </linearGradient>
          <radialGradient id="centerGradientMark" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(25, 95%, 53%)" />
            <stop offset="100%" stopColor="hsl(221, 83%, 53%)" />
          </radialGradient>
        </defs>

        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="url(#primaryGradientMark)"
          strokeWidth="2"
          className="opacity-30"
        />

        <path
          d="M25 35 Q35 30 45 35 Q55 40 65 35 Q75 30 85 35"
          fill="none"
          stroke="url(#primaryGradientMark)"
          strokeWidth="1.5"
          className="opacity-40"
        />
        <path
          d="M15 55 Q25 50 35 55 Q45 60 55 55 Q65 50 75 55"
          fill="none"
          stroke="url(#primaryGradientMark)"
          strokeWidth="1.5"
          className="opacity-40"
        />

        <g transform="translate(65,25) scale(0.8)">
          <path
            d="M2 8 L8 2 L12 6 L18 0 L20 2 L16 8 L18 10 L16 12 L12 8 L8 12 L6 10 L8 8 L2 14 L0 12 Z"
            fill="url(#secondaryGradientMark)"
          />
        </g>

        <g transform="translate(20,70) scale(0.9)">
          <path
            d="M2 8 Q2 6 4 6 L16 6 Q18 6 18 8 L18 10 Q18 12 16 12 L4 12 Q2 12 2 10 Z"
            fill="url(#primaryGradientMark)"
          />
          <rect x="6" y="2" width="1" height="4" fill="url(#secondaryGradientMark)" />
          <rect x="10" y="3" width="1" height="3" fill="url(#secondaryGradientMark)" />
          <rect x="14" y="4" width="1" height="2" fill="url(#secondaryGradientMark)" />
        </g>

        <g transform="translate(70,70) scale(0.8)">
          <rect x="0" y="6" width="8" height="4" rx="1" fill="url(#primaryGradientMark)" />
          <rect x="8" y="4" width="6" height="6" rx="1" fill="url(#secondaryGradientMark)" />
          <circle cx="3" cy="12" r="2" fill="url(#centerGradientMark)" />
          <circle cx="11" cy="12" r="2" fill="url(#centerGradientMark)" />
        </g>

        <circle
          cx="50"
          cy="50"
          r="8"
          fill="url(#centerGradientMark)"
        />

        <line x1="50" y1="50" x2="70" y2="30" stroke="url(#secondaryGradientMark)" strokeWidth="1.5" className="opacity-60" />
        <line x1="50" y1="50" x2="30" y2="75" stroke="url(#primaryGradientMark)" strokeWidth="1.5" className="opacity-60" />
        <line x1="50" y1="50" x2="75" y2="75" stroke="url(#secondaryGradientMark)" strokeWidth="1.5" className="opacity-60" />

        <circle cx="60" cy="40" r="1.5" fill="hsl(25, 95%, 53%)">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="40" cy="62" r="1.5" fill="hsl(221, 83%, 53%)">
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="62" cy="62" r="1.5" fill="hsl(25, 95%, 53%)">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}
