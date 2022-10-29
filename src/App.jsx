import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProductsList from "./Components/ProductsList";
import "./App.css"

function App() {
  return (
    <div className="Contanier">
      <Header />
      <ProductsList/>
      <Footer/>    
    </div>
  );
}

export default App;
