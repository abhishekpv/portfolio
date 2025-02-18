"use client";
import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import Header from "@/components/header/Header";
import NavBar from "@/components/header/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Experience />
    </>
  );
}
