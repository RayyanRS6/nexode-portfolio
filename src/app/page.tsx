import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <div className="relative z-10 bg-background rounded-b-[60px] pb-12 shadow-[0_40px_100px_rgba(0,0,0,0.8)] border-b border-white/5">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Team />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
