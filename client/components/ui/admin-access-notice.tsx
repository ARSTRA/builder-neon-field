import { Link } from "react-router-dom";
import { Shield, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function AdminAccessNotice() {
  return (
    <Card className="border-dashed border-2 border-gray-300 bg-gray-50/50 hover:bg-gray-50 transition-colors">
      <CardContent className="p-6 text-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 bg-royal-100 rounded-full flex items-center justify-center">
            <Shield className="h-6 w-6 text-royal-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Administrative Access
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              System administrators and staff can access the control panel using their admin credentials
            </p>
          </div>
          <div className="space-y-2">
            <Link to="/login?admin=true">
              <Button 
                variant="outline" 
                size="sm"
                className="border-royal-600 text-royal-600 hover:bg-royal-600 hover:text-white"
              >
                <Shield className="h-4 w-4 mr-2" />
                Admin Login
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
            <p className="text-xs text-gray-500">
              Or use admin credentials in the regular login form
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
