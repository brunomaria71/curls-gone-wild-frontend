import { createContext } from "react";
import HairCards from "../components/HairCards";
import Hero from "../components/Hero";
import ReviewPage from "../components/ReviewPage";

export const RoutineContext = createContext(null);

export default function Home() {
  return (
    <>
      <Hero />
      <HairCards />
      <ReviewPage />
    </>
  );
}
