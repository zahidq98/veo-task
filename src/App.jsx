import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProductsList from "./Components/ProductsList";
import "./App.css"
import MainContent from "./Components/MainContent";

function App() {
  return (
    <div className="Contanier">
      <Header />
      <MainContent/>
      <ProductsList/>
      <Footer/>   
    </div>
  );
}

export default App;