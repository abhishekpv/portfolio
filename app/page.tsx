"use client";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Experience from "@/components/experience/Experience";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import NavBar from "@/components/header/NavBar";
import Skills from "@/components/skills/Skills";
import Works from "@/components/works/Works";

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Experience />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </>
  );
}
