import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ChatPositioningProps {
  children: ReactNode;
  className?: string;
  forceRight?: boolean;
}

export function ChatPositioning({ 
  children, 
  className, 
  forceRight = true 
}: ChatPositioningProps) {
  const positionStyles = forceRight
    ? {
        position: 'fixed' as const,
        right: '0px',
        bottom: '24px',
        zIndex: 50
      }
    : {};

  return (
    <>
      <style>{`
        .chat-positioning-container {
          position: fixed !important;
          right: 0px !important;
          bottom: 24px !important;
          z-index: 50 !important;
          transform: translateX(-4px);
        }

        @media (max-width: 768px) {
          .chat-positioning-container {
            right: 0px !important;
            bottom: 16px !important;
            transform: translateX(-2px);
          }
        }

        @media (max-width: 480px) {
          .chat-positioning-container {
            right: 0px !important;
            bottom: 12px !important;
            transform: translateX(-1px);
          }
        }
        
        /* Ensure chat widget never gets pushed off screen - extreme right positioning */
        .chat-positioning-container * {
          max-width: calc(100vw - 16px) !important;
        }

        @media (max-width: 768px) {
          .chat-positioning-container * {
            max-width: calc(100vw - 12px) !important;
          }
        }

        @media (max-width: 480px) {
          .chat-positioning-container * {
            max-width: calc(100vw - 8px) !important;
          }
        }

        /* Additional styles for extreme right positioning */
        .chat-positioning-container {
          pointer-events: auto;
        }

        .chat-positioning-container .chat-widget {
          margin-right: 0 !important;
        }
      `}</style>
      
      <div 
        className={cn("chat-positioning-container", className)}
        style={positionStyles}
      >
        {children}
      </div>
    </>
  );
}
