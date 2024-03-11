import React from "react";

const FeatureSection = () => {
  const sectionStyle = {
    padding: "2em 1em",
  };

  const h2Style = {
    textAlign: "center",
    marginBottom: "2em",
  };

  const featureContainerStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  };

  const featureStyle = {
    width: "45%",
    margin: "1em",
    flex: "1 0 auto",
  };

  const h3Style = {
    fontSize: "1.5em",
  };

  const pStyle = {
    color: "#666",
  };

  return (
    <section id="features" style={sectionStyle}>
      <h2 style={h2Style}>Key Features</h2>
      <div style={featureContainerStyle}>
        {/* First two features aligned towards the left center */}
        <div style={featureStyle}>
          <h3 style={h3Style}>Create a Petition</h3>
          <p style={pStyle}>
            Users can create their own petitions to raise awareness and gather
            support for their cause.
          </p>
        </div>
        <div style={featureStyle}>
          <h3 style={h3Style}>Sign a Petition</h3>
          <p style={pStyle}>
            Authenticated users can sign petitions, ensuring that each user can
            only sign once.
          </p>
        </div>

        {/* Next two features aligned towards the right center */}
        <div style={featureStyle}>
          <h3 style={h3Style}>List Signed Petitions</h3>
          <p style={pStyle}>
            Users can view a list of petitions they have signed, sorted by date.
          </p>
        </div>
        <div style={featureStyle}>
          <h3 style={h3Style}>Top 100 Petitions</h3>
          <p style={pStyle}>
            A list of the top 100 petitions, sorted by date, is available for
            users to explore and support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
