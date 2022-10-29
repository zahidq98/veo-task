import "./Product.css"

const Product = (props) => {
    return (
    <div className="product"> 
        <img className="product-img" src={props.image} alt={props.title}/>
        <h3 className="product-title">{props.title}</h3>
        <p className="product-description">{props.description}</p>
    </div>
  )
}

export default Product