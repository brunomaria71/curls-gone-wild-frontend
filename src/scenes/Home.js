import React, { createContext } from "react";
import HairCards from "../components/HairCards";
import Hero from "../components/Hero";
import "../styles/Home.css";

export const RoutineContext = createContext(null);

export default function Home() {
  return (
    <>
      <Hero />
      <h3>Choose ur hair type</h3>
      <HairCards />
    </>
  );
}
