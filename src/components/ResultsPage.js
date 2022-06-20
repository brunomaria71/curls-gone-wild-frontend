import "../styles/Login.css";
import Login from "./Login";
import Products from "./Products";
import Routines from "./Routines";

export default function ResultsPage() {
  return (
    <div>
      <Products />
      <Routines />
      <Login />
    </div>
  );
}
