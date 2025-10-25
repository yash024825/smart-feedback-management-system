import { useNavigate } from "react-router-dom";

export default function authHeader() {
  const token = localStorage.getItem("token");
  if (token) {
    return { Authorization: `Bearer ${token}` };
  } else {
    return {};
  }
}

export function useLogout() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear(); // clears token, user, isLoggedIn
    try {
      navigate("/login", { replace: true });
    } catch {
      window.location.href = "/login";
    }
  };

  return logout;
}
