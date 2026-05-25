"use client";

import Footer from "@/components/Footer";
import Information from "@/components/Information";
import Introduction from "@/components/Introduction";
import Navbar from "@/components/Navbar";
import TechStack from "@/components/TechStack";
import ProjectsPage from "./(sections)/projects/page";
import ContactPage from "./(sections)/contact/page";
import { ScrollToTopButton } from "@/components/scroll-to-top";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Introduction />
      <Information />
      <TechStack />
      <div className="">
        <ProjectsPage />
      </div>
      <div className="">
        <ContactPage />
      </div>
      {/* <Footer /> */}
    </div>
  );
}
