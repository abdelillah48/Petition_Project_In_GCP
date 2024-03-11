import React from "react";
import PetitionList from "./PetitionList";

const Top100Petitions = () => {
  // Fetch top 100 petitions data from your backend
  // For now, using placeholder data
  const topPetitions = [];

  return <PetitionList petitions={topPetitions} />;
};

export default Top100Petitions;
