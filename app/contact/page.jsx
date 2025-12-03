import PageTransition from "@/components/PageTransition";
import ContactSection from "@/components/ContactSection";

export default function ContactPage() {
  return (
    <PageTransition direction="left">
        <div className="white-bg">
              <ContactSection />
        </div>
    </PageTransition>
  );
}
