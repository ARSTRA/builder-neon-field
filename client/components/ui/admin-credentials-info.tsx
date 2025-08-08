import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Button } from "./button";
import { Badge } from "./badge";
import { Separator } from "./separator";
import { 
  Eye, 
  EyeOff, 
  Copy, 
  Shield, 
  User, 
  Lock,
  CheckCircle,
  AlertTriangle 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ADMIN_CREDENTIALS } from "@shared/admin-config";

export function AdminCredentialsInfo() {
  const [showPasswords, setShowPasswords] = useState(false);
  const { toast } = useToast();

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: `${type} copied successfully`,
      duration: 2000,
    });
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Super Admin":
        return "bg-red-100 text-red-800 border-red-200";
      case "Operations Manager":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Support Admin":
        return "bg-green-100 text-green-800 border-green-200";
      case "Finance Admin":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Shield className="h-6 w-6 text-royal-600" />
          <CardTitle className="text-xl font-bold text-gray-800">
            Admin Login Credentials
          </CardTitle>
        </div>
        <div className="flex items-center space-x-4 mt-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <AlertTriangle className="h-4 w-4 text-amber-500" />
            <span>For development and testing purposes only</span>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowPasswords(!showPasswords)}
            className="flex items-center space-x-2"
          >
            {showPasswords ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            <span>{showPasswords ? "Hide" : "Show"} Passwords</span>
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {ADMIN_CREDENTIALS.map((admin, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4 border">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <User className="h-5 w-5 text-gray-600" />
                <div>
                  <h3 className="font-semibold text-gray-800">{admin.role}</h3>
                  <p className="text-sm text-gray-600">{admin.department}</p>
                </div>
              </div>
              <Badge className={`${getRoleColor(admin.role)} border`}>
                {admin.role}
              </Badge>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email:</label>
                <div className="flex items-center space-x-2">
                  <code className="flex-1 bg-white px-3 py-2 rounded border text-sm font-mono">
                    {admin.email}
                  </code>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(admin.email, "Email")}
                    className="px-2"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Password:</label>
                <div className="flex items-center space-x-2">
                  <code className="flex-1 bg-white px-3 py-2 rounded border text-sm font-mono">
                    {showPasswords ? admin.password : "••••••••••••"}
                  </code>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(admin.password, "Password")}
                    className="px-2"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <label className="text-sm font-medium text-gray-700 mb-2 block">Permissions:</label>
              <div className="flex flex-wrap gap-2">
                {admin.permissions.map((permission, idx) => (
                  <Badge 
                    key={idx} 
                    variant="secondary" 
                    className="text-xs bg-blue-50 text-blue-700 border-blue-200"
                  >
                    {permission.replace("_", " ")}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}

        <Separator />

        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">Security Notes</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• These credentials are for development/testing purposes only</li>
                <li>• In production, use environment variables and password hashing</li>
                <li>• Implement proper JWT token authentication</li>
                <li>• Add rate limiting and security middleware</li>
                <li>• Use HTTPS in production environments</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
          <div className="flex items-start space-x-3">
            <Lock className="h-5 w-5 text-amber-600 mt-0.5" />
            <div>
              <h4 className="font-semibold text-amber-800 mb-2">Access Instructions</h4>
              <div className="text-sm text-amber-700 space-y-2">
                <p>Use these credentials to log in to the admin portal:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Go to <code className="bg-white px-1 rounded">/admin/login</code> or <code className="bg-white px-1 rounded">/login</code></li>
                  <li>Enter the email and password from above</li>
                  <li>Select "Admin" account type if prompted</li>
                  <li>You'll be redirected to the admin dashboard</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
