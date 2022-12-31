import React from "react";
import Hero from "../components/Hero/Hero";
import NewReleaseSection from "../components/NewReleaseSection/NewReleaseSection";
import SneakersSection from "../components/SneakersSection/SneakersSection";
import ServicesSection from "../components/ServicesSection/Services";

const Home = () => {
  return (
    <>
      <Hero />
      <SneakersSection />
      <ServicesSection />
      <NewReleaseSection />
    </>
  );
};

export default Home;
