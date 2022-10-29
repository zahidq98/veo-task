import "./Product.css"

const Product = (props) => {
    return (
    <div className="product"> 
        <img className="product-img" src={props.image}/>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
    </div>
  )
}

export default Product