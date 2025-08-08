import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNotifications } from "@/hooks/use-notifications";
import { useToast } from "@/hooks/use-toast";
import { Bell, TestTube } from "lucide-react";

interface NotificationTestProps {
  type: "user" | "admin";
}

export function NotificationTest({ type }: NotificationTestProps) {
  const { addNotification } = useNotifications(type);
  const { toast } = useToast();

  const testNotifications = {
    user: [
      {
        title: "Test Shipment Update",
        message: "This is a test notification for shipment tracking.",
        type: "shipment" as const,
        isRead: false,
        action: {
          label: "View Details",
          url: "/dashboard?view=tracking",
        },
      },
      {
        title: "Test Payment Notification",
        message: "This is a test payment notification.",
        type: "payment" as const,
        isRead: false,
      },
      {
        title: "Test Warning",
        message: "This is a test warning notification.",
        type: "warning" as const,
        isRead: false,
      },
    ],
    admin: [
      {
        title: "Test System Alert",
        message: "This is a test system alert notification.",
        type: "error" as const,
        isRead: false,
        action: {
          label: "View Details",
          url: "/admin?view=general",
        },
      },
      {
        title: "Test User Activity",
        message: "This is a test user activity notification.",
        type: "user" as const,
        isRead: false,
      },
      {
        title: "Test System Success",
        message: "This is a test success notification.",
        type: "success" as const,
        isRead: false,
      },
    ],
  };

  const handleTestNotification = (notificationData: any) => {
    addNotification({
      ...notificationData,
      timestamp: new Date(),
    });
    
    toast({
      title: "Test Notification Added",
      description: "Check the notification bell to see the new notification.",
    });
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center">
          <TestTube className="h-5 w-5 mr-2" />
          Notification Testing ({type})
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {testNotifications[type].map((notification, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            className="w-full justify-start"
            onClick={() => handleTestNotification(notification)}
          >
            <Bell className="h-4 w-4 mr-2" />
            Add {notification.type} notification
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
