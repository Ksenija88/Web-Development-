import { Navigate } from "react-router-dom";
import { useAuth } from "./useAuth"; // or however you read Firebase auth

const ADMIN_EMAILS = ["youremail@example.com"];

export default function AdminOnly({ children }) {
  const { user, loading } = useAuth();

  if (loading) return null;

  const isAdmin = user && ADMIN_EMAILS.includes(user.email);

  return isAdmin ? children : <Navigate to="/" replace />;
}

