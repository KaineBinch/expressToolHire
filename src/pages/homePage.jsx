import HeroSection from "../components/sections/HeroSection"
import Slider from "../components/slider"
import FeaturesSection from "../components/sections/FeaturesSection"
import ServicesSection from "../components/sections/ServicesSection"
import FeaturedSection from "../components/sections/FeaturedSection"
import ProductsCallToAction from "../components/sections/ProductsCallToAction"
import FAQSection from "../components/sections/FAQSection"
import TeamSection from "../components/sections/TeamSection"
import MobileFooter from "../components/layout/MobileFooter"

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <Slider />
      <FeaturesSection />
      <ServicesSection />
      <FeaturedSection />
      <ProductsCallToAction />
      <FAQSection />
      <TeamSection />
      <MobileFooter />
    </div>
  )
}

export default HomePage
