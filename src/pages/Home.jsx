import { Navbar } from "../components/Navbar"
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"
import { SkillsSection } from "../components/SkillsSection"
import { ProjectsSection } from "../components/ProjectsSection"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer"
import { StarBackground } from "../components/StarBackground"

export const Home=()=>{
    return <div className="min-h-screen relative overflow-hidden">
        {/* Background effects */}
        <StarBackground />
        
        {/* Navbar (includes ThemeToggle) */}
        <Navbar />
        
        {/* Main Content */}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
        </main>
        
        {/* Footer */}
        <Footer />
    </div>
}

