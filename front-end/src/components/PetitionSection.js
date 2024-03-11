// import React from 'react';

// const PetitionSection = ({ petitions }) => {
//   const sectionStyle = {
//     padding: '2em 1em'
//   };

//   const h2Style = {
//     textAlign: 'center',
//     marginBottom: '2em'
//   };

//   const petitionsContainerStyle = {
//     display: 'flex',
//     justifyContent: 'space-around',
//     flexWrap: 'wrap'
//   };

//   const petitionStyle = {
//     margin: '1em',
//     textAlign: 'center'
//   };

//   const imgStyle = {
//     width: '100%',
//     maxWidth: '300px',
//     marginBottom: '1em'
//   };

//   const pStyle = {
//     color: '#666'
//   };

//   return (
//     <section id="petitions" style={sectionStyle}>
//       <h2 style={h2Style}>Explore the Power of Petitions</h2>
//       <div style={petitionsContainerStyle}>
//         {petitions.map((petition, index) => (
//           <div key={index} style={petitionStyle}>
//             <img src={petition.image} alt={petition.title} style={imgStyle} />
//             <p style={pStyle}>{petition.title}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PetitionSection;

import React from "react";

const PetitionSection = () => {
  // Styles
  const sectionStyle = {
    padding: "2em 1em",
    maxWidth: "1200px", // Set a max-width if necessary
    margin: "auto", // Center the section
  };

  const h2Style = {
    textAlign: "center",
    marginBottom: "2em",
  };

  const petitionsContainerStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  };

  const petitionStyle = {
    margin: "1em",
    textAlign: "center",
    width: "300px", // Set a width for each petition card
  };

  const imgStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "8px", // If you want rounded corners
  };

  const pStyle = {
    color: "#666",
    marginTop: "0.5em",
  };

  // Hardcoded data for the petitions
  const petitions = [
    {
      image: "../../public/images/petitions/image_ 1.jpeg",
      title: "Image 1",
    },
    {
      image: "../../public/images/petitions/image_ 2.jpeg",
      title: "Image 2",
    },
    {
      image: "../../public/images/petitions/image_ 3.jpeg",
      title: "Image 3",
    },
    {
      image: "../../public/images/petitions/image_ 4.jpeg",
      title: "Image 4",
    },
    {
      image: "../../public/images/petitions/image_ 5.jpeg",
      title: "Image 5",
    },
    {
      image: "../../public/images/petitions/image_ 6.jpeg",
      title: "Image 6",
    },
    {
      image: "../../public/images/petitions/image_ 7.jpeg",
      title: "Image 7",
    },
    {
      image: "../../public/images/petitions/image_ 8.jpeg",
      title: "Image 8",
    },
    // ...add more objects for each image
  ];

  return (
    <section style={sectionStyle}>
      <h2 style={h2Style}>Explore the Power of Petitions</h2>
      <div style={petitionsContainerStyle}>
        {petitions.map((petition, index) => (
          <div key={index} style={petitionStyle}>
            <img src={petition.image} alt={petition.title} style={imgStyle} />
            <p style={pStyle}>{petition.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PetitionSection;
