import SiteHeader from "./components/SiteHeader.jsx";
import HeroSection from "./components/HeroSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import ContactSection from "./components/ContactSection.jsx";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Lewati ke konten</a>
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
