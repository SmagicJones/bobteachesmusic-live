import styles from "./logout.module.css";
import { useNavigate } from "react-router";
import { useAuth } from "~/contexts/useAuth";
import { fbAuth } from "~/firebase/firebaseConfig";
import { Button } from "../ui/button";

export default function Logout() {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  const handleLogout = async () => {
    try {
      await fbAuth.signOut();
      setUser(null);
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  if (!user) {
    return <></>;
  }

  return (
    <Button className="w-full" onClick={handleLogout}>
      Logout
    </Button>
  );
}
