import Navbar from "./components/1_Navbar";
import Header from "./components/1.5_Header";
import FirstSection from "./components/2_FirstSection";
import SecondSection from "./components/3_SecondSection";
import ThirdSction from "./components/4_Galeria";
import Footer from "./components/Footer";

function App() {
  return (
    <div class="bg-gray-950 text-gray-100 relative">
      <Navbar />
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSction />
      <Footer /> 
    </div> 
  );
}

export default App;