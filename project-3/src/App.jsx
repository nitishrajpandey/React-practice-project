import DetailsOfBike from "./components/body/DetailsOfBike"
import HeroSection from "./components/body/HeroSection"
import OneNumber from "./components/body/OneNumber"
import Color from "./components/body/main/Color"
import Gallery from "./components/body/main/Gallery"
import HighEfficiency from "./components/body/main/HighEfficiency"
import MultipleAccessories from "./components/body/main/MultipleAccessories"
import ProductInformation from "./components/body/main/ProductInformation"
import MainFooter from "./components/footer/MainFooter"
import Newsletter from "./components/footer/Newsletter"
import Testimonials from "./components/footer/Testimonials"
import Navbar from "./components/header/Navbar"



function App() {


  return (
    <>
    <Navbar/>
    <HeroSection/>
    <OneNumber/>
    <DetailsOfBike/>
    <ProductInformation/>
    <HighEfficiency/>
    <MultipleAccessories/>
    <Gallery/>
    <Color/>
    <Testimonials/>
    <Newsletter/>
    <MainFooter/>


    </>
  )
}

export default App
