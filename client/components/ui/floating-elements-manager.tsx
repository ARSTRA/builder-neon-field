import { ReactNode } from "react";

interface FloatingElementsManagerProps {
  children: ReactNode;
  className?: string;
}

/**
 * FloatingElementsManager ensures proper positioning and prevents overlap
 * of floating UI elements like chat, social media, and action buttons
 */
export function FloatingElementsManager({
  children,
  className = "",
}: FloatingElementsManagerProps) {
  return (
    <div className={`relative ${className}`}>
      {children}

      {/* Mobile-specific floating elements positioning guide */}
      <style>{`
        @media (max-width: 640px) {
          /* Ensure floating elements don't overlap with bottom navigation */
          .floating-bottom-space {
            padding-bottom: 80px;
          }

          /* Stack floating elements vertically on mobile */
          .floating-stack {
            display: flex;
            flex-direction: column;
            gap: 8px;
            position: fixed;
            bottom: 16px;
            right: 16px;
            z-index: 45;
          }

          /* Hide tooltips on mobile to save space */
          .mobile-hide-tooltip {
            display: none;
          }
        }

        @media (min-width: 641px) {
          /* Desktop spacing for floating elements */
          .floating-bottom-space {
            padding-bottom: 40px;
          }

          .floating-stack {
            gap: 12px;
            bottom: 24px;
            right: 24px;
          }
        }

        /* Ensure proper z-index stacking */
        .z-floating-low {
          z-index: 35;
        }
        .z-floating-medium {
          z-index: 40;
        }
        .z-floating-high {
          z-index: 45;
        }
        .z-floating-top {
          z-index: 50;
        }
      `}</style>
    </div>
  );
}

/**
 * Hook to calculate safe floating element positions
 */
export function useFloatingPositions() {
  const positions = {
    // Social media bar - bottom left, hidden on mobile
    socialBar: {
      mobile: "hidden",
      desktop: "fixed bottom-8 left-8 z-floating-medium",
    },

    // Chat widget - bottom right, stacked above action buttons
    chatWidget: {
      mobile: "fixed bottom-20 right-4 z-floating-medium",
      desktop: "fixed bottom-32 right-6 z-floating-medium",
    },

    // Action buttons - bottom right, lowest in stack
    actionButtons: {
      mobile: "fixed bottom-4 right-4 z-floating-high",
      desktop: "fixed bottom-6 right-6 z-floating-high",
    },

    // Notifications - top right
    notifications: {
      mobile: "fixed top-4 right-4 z-floating-top",
      desktop: "fixed top-6 right-6 z-floating-top",
    },
  };

  return positions;
}
