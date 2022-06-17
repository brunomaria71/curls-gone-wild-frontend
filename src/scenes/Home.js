import { createContext } from "react";
// import Pata from "../components/Footer";
import HairCards from "../components/HairCards";
import Hero from "../components/Hero";
import "../styles/Home.css";

export const RoutineContext = createContext(null);

export default function Home() {
  return (
    <>
      <Hero />
      <div className="checking">
        <h3 className="home-title">Choose Your Hair Type</h3>
      </div>
      <HairCards />
      {/* <Pata /> */}
    </>
  );
}
