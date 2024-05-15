import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const Works = () => {
  return (
    <main>
      <Header />
      <div className="py-48 space-y-4">
        <p className="font-bold text-xl text-center">Works</p>
        <p className="text-center">
          I love to create something new and exciting. I am constantly learning
        </p>
        <p className="text-gray-400 italic text-center">Coming soon...</p>
      </div>
      <Footer />
    </main>
  );
};

export default Works;

export const Head = () => <title>Works</title>;