import { Button } from "antd";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserChoiceContext } from "../context/UserChoiceContext";
import app from "../secrets/secret.js";
import "../styles/Login.css";

function connectAuth() {
  return getAuth(app);
}

export default function Login() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserChoiceContext);

  useEffect(() => {
    const localUser = localStorage.getItem("displayName");
    console.log("LocalUser from LS", localUser);

    if (localUser) {
      setUser({ ...user, displayName: localUser });
    }
  }, []);

  function handleGoogleLogin() {
    const auth = connectAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        setUser(res.user);
        navigate("/reviews/add");
      })
      .catch(console.error);
  }

  return (
    <div className="btn-box">
      <Button onClick={handleGoogleLogin} id="login-btn">
        Add Review
      </Button>
    </div>
  );
}
