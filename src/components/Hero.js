import { HashLink as Link } from "react-router-hash-link";
import video from "../assets/Videos/HeroVideo720.mp4";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <Link to="#haircards" smooth>
      <video autoPlay loop muted className="hero-video">
        <source src={video} type="video/mp4" />
      </video>
    </Link>
  );
}
