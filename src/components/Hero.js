import video from "../assets/Videos/newHero.mp4";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <section>
      <video autoPlay loop muted className="hero-video">
        <source src={video} type="video/mp4" />
      </video>
    </section>
  );
}
