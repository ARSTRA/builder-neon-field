/**
 * Admin Configuration
 * 
 * IMPORTANT SECURITY NOTE:
 * In production, these credentials should be:
 * 1. Stored securely in environment variables
 * 2. Hashed using bcrypt or similar
 * 3. Validated against a secure backend API
 * 4. Protected with proper authentication middleware
 */

export interface AdminCredential {
  email: string;
  password: string;
  role: string;
  permissions: string[];
  department?: string;
}

export const ADMIN_CREDENTIALS: AdminCredential[] = [
  {
    email: "admin@globaltrack.com",
    password: "GT2024@Admin!",
    role: "Super Admin",
    permissions: ["full_access", "user_management", "system_settings", "reports", "billing"],
    department: "Administration"
  },
  {
    email: "manager@globaltrack.com", 
    password: "GT2024@Manager!",
    role: "Operations Manager",
    permissions: ["shipment_management", "customer_support", "reports", "tracking"],
    department: "Operations"
  },
  {
    email: "support@globaltrack.com",
    password: "GT2024@Support!",
    role: "Support Admin",
    permissions: ["customer_support", "tracking", "basic_reports"],
    department: "Customer Support"
  },
  {
    email: "finance@globaltrack.com",
    password: "GT2024@Finance!",
    role: "Finance Admin", 
    permissions: ["billing", "financial_reports", "payment_management"],
    department: "Finance"
  }
];

/**
 * Validates admin credentials
 * @param email - Admin email
 * @param password - Admin password
 * @returns Admin credential object if valid, null otherwise
 */
export function validateAdminCredentials(email: string, password: string): AdminCredential | null {
  const normalizedEmail = email.trim().toLowerCase();
  const admin = ADMIN_CREDENTIALS.find(
    (cred) => cred.email.toLowerCase() === normalizedEmail && cred.password === password
  );
  
  return admin || null;
}

/**
 * Gets admin by email
 * @param email - Admin email
 * @returns Admin credential object if found, null otherwise
 */
export function getAdminByEmail(email: string): AdminCredential | null {
  const normalizedEmail = email.trim().toLowerCase();
  return ADMIN_CREDENTIALS.find(cred => cred.email.toLowerCase() === normalizedEmail) || null;
}

/**
 * Production deployment notes:
 * 
 * 1. Move credentials to environment variables:
 *    - ADMIN_EMAIL_1, ADMIN_PASSWORD_1, ADMIN_ROLE_1, etc.
 * 
 * 2. Use proper password hashing:
 *    - bcrypt.hash() for storing passwords
 *    - bcrypt.compare() for validation
 * 
 * 3. Implement JWT tokens for session management
 * 
 * 4. Add rate limiting for login attempts
 * 
 * 5. Use HTTPS and secure cookies
 * 
 * 6. Implement proper backend authentication API
 */
