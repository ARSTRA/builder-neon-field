import { ChatOnlyLayout } from "./chat-only-layout";

interface SimpleChatWidgetProps {
  className?: string;
  theme?: {
    primaryColor?: string;
    secondaryColor?: string;
    backgroundColor?: string;
    textColor?: string;
  };
  showQuickActions?: boolean;
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
}: SimpleChatWidgetProps) {
  return (
    <ChatOnlyLayout
      className={className}
      theme={theme}
      showQuickActions={showQuickActions}
      mobileBreakpoint={768}
    />
  );
}
