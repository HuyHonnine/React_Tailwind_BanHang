// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../src/components/Navbar";
import Header from "../src/components/Header";
import Head from "../src/components/Head";
import Slider from "./components/Slider";
import Index from "./components/index";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="bg-white">
        <Head />
        <Header />
        <Navbar />
      </div>
      <main className="lg:px-[10%] py-[3rem]">
        <Slider />
        <Index />
      </main>
      <footer className="bg-blueBackground p-4 lg:p-8">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
