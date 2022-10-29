import "./Product.css"

const Product = () => {
  const dummyProduct =   {
      "slug": "hela-cactus-eco-trainer-by-genesis-black",
      "title": "Hela | Cactus Leather Eco Trainer by Genesis | Black",
      "image": "https://veo-cdn.imgix.net/products/26687/s_files_1_0863_4804_products_shoes-hela-cactus-eco-trainer-by-genesis-black-1.png?fit=clip&auto=format&w=1080",
      "description": "• Mesh/mesh fabric made from recycled PET plastic bottles • Cactus based vegan leather • Recycled EVA foam insole • Cork sole from sustainable production • Laces made from recycled PET plastic bottles • Seams made from recycled PET plastic bottles • Lining in Abacá banana canvas and recycled cotton • Sole made from at least 40% natural rubber (unbleached) from Vietnam"
    }
    return (
    <div className="product"> 
        <img className="product-img" src={dummyProduct.image}/>
        <h3>{dummyProduct.title}</h3>
        <p>{dummyProduct.description}</p>
    </div>
  )
}

export default Product