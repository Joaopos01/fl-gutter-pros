import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import VideoHero from "@/components/VideoHero";
import TrustBar from "@/components/TrustBar";
import ServicesOverview from "@/components/ServicesOverview";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import HowItWorks from "@/components/HowItWorks";
import GoogleReviews from "@/components/GoogleReviews";
import LeadCapture from "@/components/LeadCapture";
import Footer from "@/components/Footer";

const Index = () => {
  // Replace with your actual video URL from backend
  const heroVideoUrl = undefined; // e.g., "https://your-backend.com/videos/hero.mp4"

  return (
    <>
      <Helmet>
        <title>Clean Cut Gutters — Professional Gutter Installation & Repair in Florida</title>
        <meta
          name="description"
          content="Clean Cut Gutters provides seamless gutter installation, repair, cleaning and gutter guards across Florida. Licensed & insured. Free estimates — Call (555) 555-5555."
        />
        <meta property="og:title" content="Clean Cut Gutters — Florida's Trusted Gutter Experts" />
        <meta
          property="og:description"
          content="Professional gutter installation, repair and cleaning for homes across Florida. Licensed, insured and committed to clean, precise workmanship."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://cleancutgutters.com" />
      </Helmet>

      <Header />
      <main>
        <section id="home">
          <VideoHero videoUrl={heroVideoUrl} />
        </section>
        <TrustBar />
        <section id="services">
          <ServicesOverview />
        </section>
        <section id="projects">
          <BeforeAfterSection />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="reviews">
          <GoogleReviews />
        </section>
        <section id="contact">
          <LeadCapture />
        </section>
        <section id="about">
          <Footer />
        </section>
      </main>
    </>
  );
};

export default Index;
