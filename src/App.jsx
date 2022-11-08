import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProductsList from "./Components/ProductsList";
import "./App.css"
import MainContent from "./Components/MainContent";
import ReviewSection from "./Components/ReviewSection";

function App() {
  return (
    <div className="Contanier">
      <Header />
      <MainContent/>
      <ProductsList/>
      <ReviewSection />
      <Footer/>   
    </div>
  );
}

export default App;