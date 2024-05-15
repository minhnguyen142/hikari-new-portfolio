import React from "react";
import Header from "../components/header";
import Landing from "../components/landing";
import Footer from "../components/footer";
import AboutMe from "../components/aboutme";
import BlogNavigate from "../components/blog-navigate";
import WhatIMade from "../components/what-i-made";

const Home = () => {
  return (
    <main className="bg-[url('../images/background.jpeg')] bg-center bg-cover bg-fixed bg-no-repeat">
      <Header />
      <Landing />
      <AboutMe />
      <WhatIMade />
      <BlogNavigate />
      <Footer />
    </main>
  );
};

export default Home;

export const Head = () => <title>Mochizuki Hikari</title>;
