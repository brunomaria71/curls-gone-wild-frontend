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

  function handleGoogleLogin() {
    const auth = connectAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
        const name = res.user.displayName;
        const profilePic = res.user.photoURL;
        localStorage.setItem("name", name);
        localStorage.setItem("profilePic", profilePic);
        setUser(res.user);
      })
      .catch(console.error);
  }
  useEffect(() => {
    if (user) {
      navigate("/reviews/add");
    }
  }, [user]);

  return (
    <div className="btn-box">
      <Button onClick={handleGoogleLogin} id="btns">
        GoogleLogin to add review
      </Button>
    </div>
  );
}
