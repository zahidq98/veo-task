import Product from "./Product"
import "./ProductsList.css"
import data from "../data/products-example.json"


const ProductsList = () => {
    return (
      <div className="product-container">
        <h1 className="product-h1">Products</h1>
        <div className="product-list">
          {data.products.map( product => 
            <Product
              title={product.title}
              image={product.image}
              description={product.description}
            />
          )}
        </div>
      </div>
    )
  }
  
  export default ProductsList