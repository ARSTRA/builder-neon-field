import { useState, useEffect } from "react";
import { ModernChatWidget } from "./modern-chat-widget";
import { cn } from "@/lib/utils";

interface ResponsiveChatLayoutProps {
  className?: string;
  mobileBreakpoint?: number;
  theme?: {
    primaryColor?: string;
    secondaryColor?: string;
    backgroundColor?: string;
    textColor?: string;
  };
  showQuickActions?: boolean;
  showSettings?: boolean;
}

export function ResponsiveChatLayout({
  className,
  mobileBreakpoint = 768,
  theme,
  showQuickActions = true,
  showSettings = false,
}: ResponsiveChatLayoutProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setScreenWidth(width);
      setIsMobile(width < mobileBreakpoint);
    };

    // Initial check
    checkScreenSize();

    // Add event listener
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [mobileBreakpoint]);

  // Mobile-specific positioning and sizing
  const getMobilePosition = () => {
    if (screenWidth < 480) {
      return "bottom-2 right-2 left-2"; // Full width on very small screens
    }
    return "bottom-4 right-4"; // Standard mobile positioning
  };

  const getMobileTheme = () => {
    if (!isMobile) return theme;
    
    // Optimize theme for mobile
    return {
      ...theme,
      primaryColor: theme?.primaryColor || "#2563eb",
      secondaryColor: theme?.secondaryColor || "#f59e0b",
      backgroundColor: theme?.backgroundColor || "#ffffff",
      textColor: theme?.textColor || "#1f2937",
    };
  };

  if (isMobile) {
    return (
      <div className={cn("mobile-chat-container", className)}>
        <style jsx>{`
          .mobile-chat-container .chat-widget {
            width: ${screenWidth < 480 ? 'calc(100vw - 16px)' : '350px'} !important;
            max-height: ${screenWidth < 600 ? '70vh' : '80vh'} !important;
          }
          
          .mobile-chat-container .chat-widget[data-fullscreen="true"] {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            border-radius: 0 !important;
            z-index: 9999 !important;
          }
          
          .mobile-chat-container .chat-messages {
            max-height: ${screenWidth < 600 ? '40vh' : '50vh'} !important;
          }
          
          .mobile-chat-container .chat-input-area {
            padding: 12px !important;
          }
          
          .mobile-chat-container .chat-header {
            padding: 12px 16px !important;
          }
          
          .mobile-chat-container .chat-floating-button {
            height: ${screenWidth < 480 ? '56px' : '64px'} !important;
            width: ${screenWidth < 480 ? '56px' : '64px'} !important;
          }
          
          /* Ensure proper touch targets */
          .mobile-chat-container button {
            min-height: 44px;
            min-width: 44px;
          }
          
          /* Optimize text sizes for mobile */
          .mobile-chat-container .chat-message-text {
            font-size: ${screenWidth < 480 ? '14px' : '15px'} !important;
            line-height: 1.5 !important;
          }
          
          .mobile-chat-container .chat-timestamp {
            font-size: 12px !important;
          }
          
          /* Mobile-optimized input */
          .mobile-chat-container textarea {
            font-size: 16px !important; /* Prevents zoom on iOS */
            padding: 12px !important;
          }
          
          /* Mobile-specific animations */
          @media (max-width: 480px) {
            .mobile-chat-container .chat-widget {
              animation: slideUpMobile 0.3s ease-out;
            }
            
            @keyframes slideUpMobile {
              from {
                transform: translateY(100%);
                opacity: 0;
              }
              to {
                transform: translateY(0);
                opacity: 1;
              }
            }
          }
          
          /* Safe area for devices with notches */
          @supports (padding: max(0px)) {
            .mobile-chat-container .chat-widget[data-fullscreen="true"] {
              padding-top: max(20px, env(safe-area-inset-top)) !important;
              padding-bottom: max(20px, env(safe-area-inset-bottom)) !important;
              padding-left: max(16px, env(safe-area-inset-left)) !important;
              padding-right: max(16px, env(safe-area-inset-right)) !important;
            }
          }
        `}</style>
        
        <ModernChatWidget
          className="chat-widget"
          position={screenWidth < 480 ? "bottom-left" : "bottom-right"}
          theme={getMobileTheme()}
          showQuickActions={showQuickActions}
          showSettings={showSettings}
        />
      </div>
    );
  }

  // Desktop version
  return (
    <div className={cn("desktop-chat-container", className)}>
      <style jsx>{`
        .desktop-chat-container .chat-widget {
          width: 384px !important;
          max-height: 600px !important;
        }
        
        .desktop-chat-container .chat-widget[data-fullscreen="true"] {
          position: fixed !important;
          top: 24px !important;
          left: 24px !important;
          right: 24px !important;
          bottom: 24px !important;
          width: auto !important;
          height: auto !important;
          border-radius: 12px !important;
          z-index: 9999 !important;
        }
        
        .desktop-chat-container .chat-messages {
          max-height: 400px !important;
        }
        
        .desktop-chat-container .chat-floating-button {
          height: 64px !important;
          width: 64px !important;
        }
        
        /* Desktop hover effects */
        .desktop-chat-container .chat-widget {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .desktop-chat-container .chat-widget:hover {
          transform: translateY(-2px);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        /* Desktop-specific animations */
        .desktop-chat-container .chat-widget {
          animation: slideInDesktop 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        @keyframes slideInDesktop {
          from {
            transform: translateY(20px) scale(0.95);
            opacity: 0;
          }
          to {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }
      `}</style>
      
      <ModernChatWidget
        className="chat-widget"
        position="bottom-right"
        theme={theme}
        showQuickActions={showQuickActions}
        showSettings={showSettings}
      />
    </div>
  );
}

// Hook for detecting mobile devices
export function useIsMobile(breakpoint: number = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, [breakpoint]);

  return isMobile;
}

// Utility for touch-friendly button sizing
export const touchTargetClass = "min-h-[44px] min-w-[44px]";

// Utility for mobile-optimized text sizing
export const mobileTextSizeClass = "text-sm sm:text-base";

// Utility for responsive spacing
export const responsiveSpacingClass = "p-3 sm:p-4 md:p-6";
