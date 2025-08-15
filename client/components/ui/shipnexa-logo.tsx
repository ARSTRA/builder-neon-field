import React from 'react';
import { Ship, Package, ArrowRight } from 'lucide-react';

interface ShipNexaLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon' | 'text';
  className?: string;
}

export default function ShipNexaLogo({ 
  size = 'md', 
  variant = 'full', 
  className = '' 
}: ShipNexaLogoProps) {
  const sizeClasses = {
    sm: { container: 'h-6', icon: 'h-4 w-4', text: 'text-sm' },
    md: { container: 'h-8', icon: 'h-5 w-5', text: 'text-lg' },
    lg: { container: 'h-10', icon: 'h-6 w-6', text: 'text-xl' },
    xl: { container: 'h-12', icon: 'h-8 w-8', text: 'text-2xl' }
  };

  const sizes = sizeClasses[size];

  if (variant === 'icon') {
    return (
      <div className={`${sizes.container} aspect-square bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 rounded-lg flex items-center justify-center shadow-lg ${className}`}>
        <div className="relative">
          <Ship className={`${sizes.icon} text-white`} />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    );
  }

  if (variant === 'text') {
    return (
      <div className={`flex items-center ${className}`}>
        <span className={`font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent ${sizes.text}`}>
          Ship
        </span>
        <span className={`font-bold text-orange-500 ${sizes.text}`}>
          Nexa
        </span>
        <span className={`text-gray-600 ${sizes.text === 'text-sm' ? 'text-xs' : sizes.text === 'text-lg' ? 'text-sm' : sizes.text === 'text-xl' ? 'text-base' : 'text-lg'}`}>
          .it
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Logo Icon */}
      <div className={`${sizes.container} aspect-square bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 rounded-lg flex items-center justify-center shadow-lg relative overflow-hidden`}>
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
        
        {/* Main shipping icon */}
        <div className="relative z-10 flex items-center justify-center">
          <Ship className={`${sizes.icon} text-white`} />
          
          {/* Animated indicator */}
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-400 rounded-full animate-pulse shadow-sm"></div>
        </div>
        
        {/* Subtle container pattern */}
        <div className="absolute bottom-0 right-0 w-3 h-1 bg-white/20 rounded-tl"></div>
      </div>

      {/* Company Text */}
      <div className="flex items-center">
        <span className={`font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent ${sizes.text}`}>
          Ship
        </span>
        <span className={`font-bold text-orange-500 ${sizes.text}`}>
          Nexa
        </span>
        <span className={`text-gray-600 font-medium ${sizes.text === 'text-sm' ? 'text-xs' : sizes.text === 'text-lg' ? 'text-sm' : sizes.text === 'text-xl' ? 'text-base' : 'text-lg'}`}>
          .it
        </span>
      </div>
    </div>
  );
}
