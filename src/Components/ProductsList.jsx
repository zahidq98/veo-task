import Product from "./Product"
import "./ProductsList.css"


const ProductsList = () => {
  const dummyProduct =   {
      "slug": "hela-cactus-eco-trainer-by-genesis-black",
      "title": "Hela | Cactus Leather Eco Trainer by Genesis | Black",
      "image": "https://veo-cdn.imgix.net/products/26687/s_files_1_0863_4804_products_shoes-hela-cactus-eco-trainer-by-genesis-black-1.png?fit=clip&auto=format&w=1080",
      "description": "• Mesh/mesh fabric made from recycled PET plastic bottles • Cactus based vegan leather • Recycled EVA foam insole • Cork sole from sustainable production • Laces made from recycled PET plastic bottles • Seams made from recycled PET plastic bottles • Lining in Abacá banana canvas and recycled cotton • Sole made from at least 40% natural rubber (unbleached) from Vietnam"
    }
    return (
      <div>
          <h1>All products</h1>
          <div className="product-container">
            <div className="product-list">
            <Product 
              title={dummyProduct.title}
              image={dummyProduct.image}
              description={dummyProduct.description}
              />
              <Product 
              title={dummyProduct.title}
              image={dummyProduct.image}
              description={dummyProduct.description}
              />
              <Product 
              title={dummyProduct.title}
              image={dummyProduct.image}
              description={dummyProduct.description}
              />
             <Product 
              title={dummyProduct.title}
              image={dummyProduct.image}
              description={dummyProduct.description}
              />
            </div>

          </div>
      </div>
  
    )
  }
  
  export default ProductsList