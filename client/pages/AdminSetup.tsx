import { AdminCredentialsInfo } from "@/components/ui/admin-credentials-info";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function AdminSetup() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Logo size="lg" className="justify-center mb-6" />
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Admin Panel Setup
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are your admin login credentials for ShipNexa. Use
            these to access the administrative features of your website.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Link to="/">
            <Button variant="outline" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Website</span>
            </Button>
          </Link>
          <Link to="/admin/login">
            <Button className="flex items-center space-x-2 bg-royal-600 hover:bg-royal-700">
              <span>Go to Admin Login</span>
              <ExternalLink className="h-4 w-4" />
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="outline" className="flex items-center space-x-2">
              <span>Unified Login Page</span>
              <ExternalLink className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Admin Credentials Info */}
        <AdminCredentialsInfo />

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>
            These credentials are automatically configured for your GlobalTrack
            Logistics website.
          </p>
          <p className="mt-1">
            For production use, please implement proper security measures as
            outlined above.
          </p>
        </div>
      </div>
    </div>
  );
}
