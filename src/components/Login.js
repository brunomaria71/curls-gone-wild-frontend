import { Button } from "antd";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserChoiceContext } from "../context/UserChoiceContext";
import app from "../secrets/secret.js";

function connectAuth() {
  return getAuth(app);
}

export default function Login() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserChoiceContext);

  function handleGoogleLogin() {
    const auth = connectAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        setUser(res.user);
        navigate("/reviews");
      })
      .catch(console.error);
  }

  return <Button onClick={handleGoogleLogin}>Google Login</Button>;
}
