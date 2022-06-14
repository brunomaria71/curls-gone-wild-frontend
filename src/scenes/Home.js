import React, { createContext } from "react";
import HairCards from "../components/HairCards";
import Hero from "../components/Hero";
import "../styles/Home.css";

export const RoutineContext = createContext(null);

export default function Home() {
  return (
    <>
      <Hero />
      <div className="checking">
        <h3>Choose Your Hair Type</h3>
      </div>
      <HairCards />
    </>
  );
}
