import React from "react";
import "../styles/global.css";
import Header from "../components/header";
import Footer from "../components/footer";
import AboutImage from "../images/20230328_130507.jpg";
import Introduction from "../components/introduction";
import Drawing from "../components/drawing";
import Photography from "../components/photography";

const About = () => {
  return (
    <main>
      <Header />
      <div className="flex justify-center flex-col items-center px-16 py-40">
        <img src={AboutImage} alt="about" width={960} height={540} className="photography"/>

        <Introduction />
        <Drawing />
        <Photography />
      </div>
      <Footer />
    </main>
  );
};

export default About;

export const Head = () => <title>About</title>;
