// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// //import PetitionList from "./features/Petitions/PetitionList";
// import PetitionDetail from "./features/Petitions/PetitionDetail";
// import UserProfile from "./features/User/UserProfile";
// import Top100Petitions from "./features/Petitions/Top100Petitions";
// import CreatePetitionForm from "./forms/CreatePetitionForm";
// import Home from "./features/Home/home";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <div className="container mt-3">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/petitions/:id" element={<PetitionDetail />} />
//           <Route path="/user-profile" element={<UserProfile />} />
//           <Route path="/top-100" element={<Top100Petitions />} />
//           <Route path="/create-petition" element={<CreatePetitionForm />} />
//           {/* Add more routes as needed */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
//import HeroSection from "./components/HeroSection";
//import FeatureSection from "./components/FeatureSection";
//import FAQSection from "./components/FAQSection";
//import PetitionSection from "./components/PetitionSection";
//import Footer from "./components/Footer";
import Home from "../src/views/home";
import CreatePetition from "../src/forms/CreatePetitionForm";
import Login from "../src/components/login";
import Register from "../src/components/register";
import PetitionList from "../src/features/Petitions/PetitionList";
import Footer from "../src/components/Footer";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         {/* Define your routes within Routes component */}
//         <Routes>
//           <Route path="/" element={<HeroSection />} />
//           <Route path="/features" element={<FeatureSection />} />
//           <Route path="/faq" element={<FAQSection />} />
//           <Route path="/petitions" element={<PetitionSection />} />
//           {/* Add more routes as needed */}
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-petition" element={<CreatePetition />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/top-petition" element={<PetitionList />} />
          {/* Define other routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
