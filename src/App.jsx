import "./App.css";
import BottomSection from "./components/BottomSection";
import CustomComponent from "./components/CustomComponent";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import GalleryComponent from "./components/GalleryComponent";
import Header from "./components/Header";
import HowItWorks from "./components/HowItWorks";
import TestimonialCarousel from "./components/TestimonialCarousel";
import TopSection from "./components/TopSection";
import TwoSectionComponent from "./components/TwoSectionComponent";
import UseCases from "./components/UseCases";

function App() {
  return (
    <>
      {/* <CustomComponent /> */}
      <TopSection />
      <Header />
      <HowItWorks />
      <UseCases />
      <TwoSectionComponent />
      <GalleryComponent />
      <TestimonialCarousel />
      <FAQ />
      <Footer />
      <BottomSection />
    </>
  );
}

export default App;
