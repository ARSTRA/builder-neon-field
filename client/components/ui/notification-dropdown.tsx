import { useState } from "react";
import {
  Bell,
  Check,
  Clock,
  Package,
  User,
  CreditCard,
  Shield,
  AlertTriangle,
  Info,
  CheckCircle,
  X,
  Settings,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuHeader,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";

export interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: Date;
  type: "info" | "success" | "warning" | "error" | "shipment" | "payment" | "user" | "system";
  isRead: boolean;
  action?: {
    label: string;
    url?: string;
    onClick?: () => void;
  };
}

interface NotificationDropdownProps {
  notifications: Notification[];
  onNotificationRead?: (id: string) => void;
  onMarkAllRead?: () => void;
  onClearAll?: () => void;
  showManageLink?: boolean;
  type?: "user" | "admin";
}

export function NotificationDropdown({
  notifications,
  onNotificationRead,
  onMarkAllRead,
  onClearAll,
  showManageLink = false,
  type = "user",
}: NotificationDropdownProps) {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const getNotificationIcon = (type: Notification["type"]) => {
    switch (type) {
      case "shipment":
        return <Package className="h-4 w-4 text-blue-600" />;
      case "payment":
        return <CreditCard className="h-4 w-4 text-green-600" />;
      case "user":
        return <User className="h-4 w-4 text-purple-600" />;
      case "system":
        return <Settings className="h-4 w-4 text-gray-600" />;
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      case "error":
        return <X className="h-4 w-4 text-red-600" />;
      case "info":
      default:
        return <Info className="h-4 w-4 text-blue-600" />;
    }
  };

  const getNotificationBgColor = (type: Notification["type"]) => {
    switch (type) {
      case "shipment":
        return "bg-blue-50 border-blue-200";
      case "payment":
        return "bg-green-50 border-green-200";
      case "user":
        return "bg-purple-50 border-purple-200";
      case "system":
        return "bg-gray-50 border-gray-200";
      case "success":
        return "bg-green-50 border-green-200";
      case "warning":
        return "bg-yellow-50 border-yellow-200";
      case "error":
        return "bg-red-50 border-red-200";
      case "info":
      default:
        return "bg-blue-50 border-blue-200";
    }
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return "Just now";
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };

  const handleNotificationClick = (notification: Notification) => {
    if (!notification.isRead && onNotificationRead) {
      onNotificationRead(notification.id);
    }

    if (notification.action?.onClick) {
      notification.action.onClick();
    } else if (notification.action?.url) {
      window.location.href = notification.action.url;
    }
    setIsOpen(false);
  };

  const handleMarkAllRead = () => {
    if (onMarkAllRead) {
      onMarkAllRead();
      toast({
        title: "Notifications marked as read",
        description: "All notifications have been marked as read.",
      });
    }
  };

  const handleClearAll = () => {
    if (onClearAll) {
      onClearAll();
      toast({
        title: "Notifications cleared",
        description: "All notifications have been cleared.",
      });
    }
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              {unreadCount > 9 ? "9+" : unreadCount}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 mr-4" align="end">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-2">
            <Bell className="h-4 w-4 text-gray-600" />
            <h3 className="font-semibold text-gray-900">Notifications</h3>
            {unreadCount > 0 && (
              <Badge variant="destructive" className="text-xs">
                {unreadCount} new
              </Badge>
            )}
          </div>
          {notifications.length > 0 && (
            <div className="flex space-x-1">
              {unreadCount > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleMarkAllRead}
                  className="text-xs text-blue-600 hover:text-blue-700"
                >
                  <Check className="h-3 w-3 mr-1" />
                  Mark all read
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Notifications List */}
        {notifications.length === 0 ? (
          <div className="p-8 text-center">
            <Bell className="h-8 w-8 text-gray-300 mx-auto mb-2" />
            <p className="text-gray-500 text-sm">No notifications</p>
            <p className="text-gray-400 text-xs">You're all caught up!</p>
          </div>
        ) : (
          <ScrollArea className="max-h-96">
            <div className="p-2">
              {notifications.slice(0, 10).map((notification) => (
                <div
                  key={notification.id}
                  className={`p-3 rounded-lg mb-2 cursor-pointer hover:bg-gray-50 transition-colors border ${
                    !notification.isRead ? getNotificationBgColor(notification.type) : "bg-white border-gray-100"
                  }`}
                  onClick={() => handleNotificationClick(notification)}
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-0.5">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className={`text-sm font-medium text-gray-900 ${!notification.isRead ? 'font-semibold' : ''}`}>
                          {notification.title}
                        </p>
                        {!notification.isRead && (
                          <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                        {notification.message}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-gray-500 flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {formatTime(notification.timestamp)}
                        </span>
                        {notification.action && (
                          <span className="text-xs text-blue-600 hover:text-blue-700">
                            {notification.action.label} →
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        )}

        {/* Footer */}
        {notifications.length > 0 && (
          <>
            <DropdownMenuSeparator />
            <div className="p-3 space-y-2">
              {showManageLink && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-gray-600 hover:text-gray-900"
                  onClick={() => {
                    if (type === "admin") {
                      window.location.href = "/admin?view=general";
                    } else {
                      window.location.href = "/dashboard?view=settings";
                    }
                    setIsOpen(false);
                  }}
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Notification Settings
                </Button>
              )}
              {notifications.length > 10 && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-gray-600 hover:text-gray-900"
                  onClick={() => {
                    // Navigate to full notifications page
                    setIsOpen(false);
                  }}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  View All Notifications
                </Button>
              )}
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start text-red-600 hover:text-red-700"
                onClick={handleClearAll}
              >
                <X className="h-4 w-4 mr-2" />
                Clear All
              </Button>
            </div>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
