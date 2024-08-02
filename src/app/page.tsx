import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturedCourses from "./components/FeaturedCourses";
import WhyChooseUs from "./components/ui/WhyChooseUs";
import MusicSchoolTestimonials from "./components/TestimonialCards";
import UpcomingWebinars from "./components/ui/UpcomingWebinars";
import Instructors from "./components/Instructors";
import { WavyBackground } from "./components/ui/wavy-background";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
          
          <HeroSection />
          <FeaturedCourses />
        <WhyChooseUs />
        <MusicSchoolTestimonials />
        <UpcomingWebinars />
        <Instructors />
        <Footer/>
          
    </main>

  );
}

