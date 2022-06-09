import ReactPlayer from "react-player";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <section className="heroVideo">
      {/* <ReactPlayer autoPlay loop muted src={Video} type="video/mp4" /> */}
      <ReactPlayer
        url="https://youtu.be/LJFCUuN-P2k"
        className="react-player"
        playing
        width="100%"
        height="100%"
        muted="true"
      />
    </section>
  );
}
