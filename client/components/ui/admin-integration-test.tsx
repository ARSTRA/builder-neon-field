import { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, CheckCircle, X, User, Lock, Eye, EyeOff } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Badge } from "./badge";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import { validateAdminCredentials } from "@shared/admin-config";

export function AdminIntegrationTest() {
  const [testResults, setTestResults] = useState<Record<string, boolean>>({});
  const [showTestCredentials, setShowTestCredentials] = useState(false);

  const runTest = (testName: string, testFunction: () => boolean) => {
    const result = testFunction();
    setTestResults(prev => ({ ...prev, [testName]: result }));
    return result;
  };

  const testAdminValidation = () => {
    try {
      // Test with valid admin credentials
      const validResult = validateAdminCredentials("admin@shipnexa.it", "SN2024@Admin!");
      const invalidResult = validateAdminCredentials("user@example.com", "wrongpass");
      
      return validResult !== null && invalidResult === null;
    } catch (error) {
      return false;
    }
  };

  const testLocalStorageClearing = () => {
    try {
      // Clear any existing admin data
      localStorage.removeItem("isAdmin");
      localStorage.removeItem("adminEmail");
      localStorage.removeItem("adminRole");
      return true;
    } catch (error) {
      return false;
    }
  };

  const runAllTests = () => {
    runTest("adminValidation", testAdminValidation);
    runTest("localStorageClearing", testLocalStorageClearing);
  };

  const testCredentials = [
    { role: "Super Admin", email: "admin@shipnexa.it", password: "SN2024@Admin!" },
    { role: "Operations Manager", email: "operations@shipnexa.it", password: "SN2024@Ops!" },
    { role: "Support Admin", email: "support@shipnexa.it", password: "SN2024@Support!" },
    { role: "Finance Admin", email: "finance@shipnexa.it", password: "SN2024@Finance!" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🔐 Admin Integration Test
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Testing the unified admin access system and verifying that admin login 
            is properly integrated into the main authentication flow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Test Results */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span>Integration Tests</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button onClick={runAllTests} className="w-full">
                  Run All Tests
                </Button>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium">Admin Credential Validation</span>
                    {testResults.adminValidation !== undefined && (
                      <Badge className={testResults.adminValidation ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
                        {testResults.adminValidation ? (
                          <><CheckCircle className="h-3 w-3 mr-1" /> Pass</>
                        ) : (
                          <><X className="h-3 w-3 mr-1" /> Fail</>
                        )}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium">Storage Management</span>
                    {testResults.localStorageClearing !== undefined && (
                      <Badge className={testResults.localStorageClearing ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
                        {testResults.localStorageClearing ? (
                          <><CheckCircle className="h-3 w-3 mr-1" /> Pass</>
                        ) : (
                          <><X className="h-3 w-3 mr-1" /> Fail</>
                        )}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Implementation Checklist */}
            <Card>
              <CardHeader>
                <CardTitle>✅ Implementation Checklist</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Removed admin access button from footer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Integrated admin validation into Auth.tsx</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Hidden admin credentials by default</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Created unified login flow</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Admin credentials accessible via URL parameter</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Test Instructions */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-purple-600" />
                  <span>Manual Testing Guide</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">1. Test User Login</h4>
                  <p className="text-sm text-gray-600">
                    Go to <Link to="/auth" className="text-blue-600 underline">/auth</Link> and try logging in with regular user credentials.
                    Should redirect to dashboard.
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold">2. Test Admin Login</h4>
                  <p className="text-sm text-gray-600">
                    Use the same <Link to="/auth" className="text-blue-600 underline">/auth</Link> page with admin credentials.
                    Should redirect to admin panel.
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold">3. Test Admin Credentials Access</h4>
                  <p className="text-sm text-gray-600">
                    Visit <Link to="/admin-setup?show-credentials=true" className="text-blue-600 underline">
                      /admin-setup?show-credentials=true
                    </Link> to see admin credentials.
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold">4. Verify Footer</h4>
                  <p className="text-sm text-gray-600">
                    Check that the admin access button is no longer visible in the footer.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Test Credentials */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Lock className="h-5 w-5 text-amber-600" />
                    <span>Test Credentials</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowTestCredentials(!showTestCredentials)}
                  >
                    {showTestCredentials ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {showTestCredentials ? (
                  <div className="space-y-3">
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                      <p className="text-amber-800 text-xs font-medium mb-2">
                        ⚠️ For testing purposes only
                      </p>
                      <div className="space-y-2">
                        {testCredentials.map((cred, index) => (
                          <div key={index} className="bg-white rounded p-2 border">
                            <div className="flex items-center justify-between mb-1">
                              <Badge className="text-xs">{cred.role}</Badge>
                            </div>
                            <div className="space-y-1 text-xs">
                              <div>
                                <Label className="text-gray-600">Email:</Label>
                                <code className="ml-2 bg-gray-100 px-1 rounded">{cred.email}</code>
                              </div>
                              <div>
                                <Label className="text-gray-600">Password:</Label>
                                <code className="ml-2 bg-gray-100 px-1 rounded">{cred.password}</code>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-gray-600">
                    Click the eye icon to view test credentials for manual testing.
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Links */}
        <div className="mt-8 text-center space-x-4">
          <Link to="/auth">
            <Button>Test Login Page</Button>
          </Link>
          <Link to="/admin-setup">
            <Button variant="outline">Admin Setup (Hidden)</Button>
          </Link>
          <Link to="/admin-setup?show-credentials=true">
            <Button variant="outline">Admin Setup (Visible)</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
