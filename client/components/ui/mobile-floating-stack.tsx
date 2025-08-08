import { ReactNode } from "react";

interface MobileFloatingStackProps {
  children: ReactNode;
  position?: "bottom-right" | "bottom-left" | "bottom-center";
  className?: string;
}

/**
 * MobileFloatingStack provides optimal stacking for floating elements on mobile
 * Prevents overlap and ensures proper touch targets
 */
export function MobileFloatingStack({ 
  children, 
  position = "bottom-right",
  className = "" 
}: MobileFloatingStackProps) {
  
  const positionClasses = {
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-center": "bottom-4 left-1/2 transform -translate-x-1/2",
  };

  return (
    <div className={`
      fixed ${positionClasses[position]} z-50
      flex flex-col-reverse gap-3
      sm:hidden
      ${className}
    `}>
      {children}
    </div>
  );
}

/**
 * FloatingButton component optimized for mobile touch
 */
interface FloatingButtonProps {
  onClick: () => void;
  icon: ReactNode;
  label: string;
  color?: "primary" | "secondary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function FloatingButton({
  onClick,
  icon,
  label,
  color = "primary",
  size = "md",
  className = ""
}: FloatingButtonProps) {
  
  const colorClasses = {
    primary: "bg-gradient-to-r from-royal-600 to-orange-500 hover:from-royal-700 hover:to-orange-600",
    secondary: "bg-gray-600 hover:bg-gray-700",
    success: "bg-green-600 hover:bg-green-700",
    warning: "bg-orange-600 hover:bg-orange-700",
    danger: "bg-red-600 hover:bg-red-700",
  };
  
  const sizeClasses = {
    sm: "w-10 h-10 p-2",
    md: "w-12 h-12 p-3",
    lg: "w-14 h-14 p-4",
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${sizeClasses[size]}
        ${colorClasses[color]}
        text-white rounded-full
        shadow-lg hover:shadow-xl
        transition-all duration-300
        transform hover:scale-105 active:scale-95
        touch-manipulation
        relative group
        ${className}
      `}
      title={label}
      aria-label={label}
    >
      {icon}
      
      {/* Mobile tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        {label}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
      </div>
    </button>
  );
}
