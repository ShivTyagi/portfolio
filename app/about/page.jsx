import PageTransition from "@/components/PageTransition";
import AboutSection from "@/components/AboutSection";

export default function AboutPage() {
  return (
    <PageTransition direction="left">
        <div className="white-bg">
              <AboutSection />
        </div>
    
    </PageTransition>
  );
}
