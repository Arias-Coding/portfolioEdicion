import Navbar from "./components/Navbar";
import Header from "./components/Header";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSction from "./components/ThirdSction";
import Footer from "./components/Footer";

function App() {
  return (
    <div class="bg-gray-900 text-gray-200 relative">
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