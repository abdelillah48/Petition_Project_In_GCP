import React from "react";
import { Helmet } from "react-helmet";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import PetitionSection from "../components/PetitionSection";
import FAQSection from "../components/FAQSection";

const Home = () => {
  // // This would normally come from state or props.
  // const petitions = []; // Placeholder for petitions data
  // const faqs = []; // Placeholder for FAQs data

  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <PetitionSection />
      <FAQSection />
    </div>
  );
};

export default Home;
