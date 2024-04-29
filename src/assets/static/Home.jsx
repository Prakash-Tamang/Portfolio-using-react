import React from "react";
import NavBar from "./NavBar";
import Section1 from "../components/Section1";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";

const Home = () => {
  return (
    <main className="bg-primary pb-28">
      <div className="h-screen bg-hero-pattern">
        <NavBar />
        <Section1 />
      </div>
      <About/>
      <Work/>
      <Contact/>
    </main>
  );
};

export default Home;
