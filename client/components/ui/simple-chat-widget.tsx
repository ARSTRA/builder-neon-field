import { ResponsiveChatLayout } from "./responsive-chat-layout";

interface SimpleChatWidgetProps {
  className?: string;
  theme?: {
    primaryColor?: string;
    secondaryColor?: string;
    backgroundColor?: string;
    textColor?: string;
  };
  showQuickActions?: boolean;
  showSettings?: boolean;
}

export function SimpleChatWidget({
  className,
  theme = {
    primaryColor: "#2563eb", // ShipNexa blue
    secondaryColor: "#f59e0b", // ShipNexa orange
    backgroundColor: "#ffffff",
    textColor: "#1f2937",
  },
  showQuickActions = true,
  showSettings = false,
}: SimpleChatWidgetProps) {
  return (
    <ResponsiveChatLayout
      className={className}
      theme={theme}
      showQuickActions={showQuickActions}
      showSettings={showSettings}
      mobileBreakpoint={768}
    />
  );
}
