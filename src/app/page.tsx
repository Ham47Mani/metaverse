import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Explore from "@/components/sections/Explore";
import Feedback from "@/components/sections/Feedback";
import GetStarted from "@/components/sections/GetStarted";
import Hero from "@/components/sections/Hero";
import Insights from "@/components/sections/Insights";
import WhatsNew from "@/components/sections/WhatsNew";
import World from "@/components/sections/World";

export default function Home() {
  return (
    <div className="bg-black overflow-hidden text-white">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0"></div>
        <Explore/>
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0"></div>
        <WhatsNew />
      </div>
      <World />
      <div>
        <Insights />
        <div className="gradient-04 z-0"></div>
        <Feedback />
      </div>
      <Footer />
    </div>
  )
}