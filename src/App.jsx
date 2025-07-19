import React from "react";
import LandPage from "./components/LandPage";
import NavBar from "./components/NavBar";
import Features from "./components/Features";
import Questions from "./components/Questions";
import Planes from "./components/Planes";
import Start from "./components/Start";
import Footer from "./components/Footer";
import DisplayMovies from "./components/DisplayMovies";

const App = () => {
  return (
    <div className="w-screen overflow-x-hidden min-h-dvh bg-black relative">
      <NavBar />
      <LandPage />
      <DisplayMovies />
      <Features />
      <Questions />
      <Planes />
      <Start />
      <Footer />
    </div>
  );
};

export default App;
