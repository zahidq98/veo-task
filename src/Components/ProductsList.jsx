import Product from "./Product"
import "./ProductsList.css"
import data from "../data/products-example.json"


const ProductsList = () => {
    return (
      <div className="product-container">
        {data.products.map( product => 
          <Product
            title={product.title}
            image={product.image}
            description={product.description}
          />
        )}
      </div>
    )
  }
  
  export default ProductsList