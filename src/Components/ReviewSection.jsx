import "./ReviewSection.css"
import ReviewQuote from "./ReviewQuote"

const ReviewSection = () => {
  return (
    <div className="reviewSection-container">
        <div className="reviewSection-header">
            <h1 className="reviewSection-h1">Reviews</h1>
        </div>
        <div className="reviewSection-quote">
          <ReviewQuote
            bubbleTitle="Mission"
            bubbleDescription="Brindar artículos de calidad a un costo justo, otorgándoles la oportunidad a nuestros clientesrealizar sus compras de manera, segura y eficiente."
            name="Allan Alburto"
            jobTitle="CEO, ABC Corporation"  
          />
          <ReviewQuote
            bubbleTitle="Mission"
            bubbleDescription="Ser una microempresa líder en ventas de ropa femenina y masculina  de marcas prestigio, contando con los mejores precios del mercado nacional.."
            name="Allan Alburto"
            jobTitle="CEO, ABC Corporation"  
          />
        </div>
    </div>
  )
}

export default ReviewSection