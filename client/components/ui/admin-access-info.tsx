import { Shield, Lock, User, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Badge } from "./badge";
import { Button } from "./button";
import { Link } from "react-router-dom";

export function AdminAccessInfo() {
  return (
    <div className="space-y-6">
      {/* Main Info Card */}
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-shipblue-600" />
            <CardTitle className="text-xl font-bold text-gray-800">
              Administrative Access
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Access Method */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 rounded-full p-2">
                <Lock className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Secure Admin Login
                </h3>
                <p className="text-blue-800 mb-4">
                  Administrative access is integrated into the main login system. 
                  Use your admin credentials in the regular login form to access the admin panel.
                </p>
                <div className="flex space-x-4">
                  <Link to="/auth">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <User className="h-4 w-4 mr-2" />
                      Go to Login
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Admin Features</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-gray-700">User Management</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-gray-700">System Configuration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-gray-700">Analytics & Reporting</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-gray-700">Content Management</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Security</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-gray-700">Role-based Access Control</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-gray-700">Session Management</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-gray-700">Audit Logging</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-gray-700">Secure Authentication</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Access Levels */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Access Levels</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                <Badge className="bg-red-100 text-red-800 border-red-200 mb-2">
                  Super Admin
                </Badge>
                <p className="text-sm text-red-700">Full system access</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                <Badge className="bg-blue-100 text-blue-800 border-blue-200 mb-2">
                  Operations
                </Badge>
                <p className="text-sm text-blue-700">Operations management</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <Badge className="bg-green-100 text-green-800 border-green-200 mb-2">
                  Support
                </Badge>
                <p className="text-sm text-green-700">Customer support</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
                <Badge className="bg-purple-100 text-purple-800 border-purple-200 mb-2">
                  Finance
                </Badge>
                <p className="text-sm text-purple-700">Financial oversight</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Instructions Card */}
      <Card className="w-full max-w-4xl mx-auto">
        <CardContent className="p-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              How to Access Admin Panel
            </h3>
            <p className="text-gray-600 mb-4">
              Simply use your admin credentials in the main login form. The system will 
              automatically detect admin accounts and redirect to the administrative interface.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 inline-block">
              <p className="text-amber-800 text-sm">
                <strong>Note:</strong> No separate admin login page is required. 
                The unified login system handles both user and admin authentication.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
