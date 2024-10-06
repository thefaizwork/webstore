import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
// import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-pink-500 text-white">
      <Header />
      <MainContent />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
