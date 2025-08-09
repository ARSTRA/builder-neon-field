import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import UnifiedAdmin from "./UnifiedAdmin";

export default function SmartDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check user type and redirect accordingly
    const isAdmin = localStorage.getItem("isAdmin") === "true";
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (!isAdmin && !isLoggedIn) {
      // Neither admin nor regular user logged in
      navigate("/login");
      return;
    }
  }, [navigate]);

  // Check if user is admin
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  if (isAdmin) {
    // Admin user - show unified admin control center
    return <UnifiedAdmin />;
  } else {
    // Regular user - show standard dashboard
    return <Dashboard />;
  }
}
