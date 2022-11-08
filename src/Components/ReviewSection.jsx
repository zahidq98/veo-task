import "./ReviewSection.css"
// import { ReactComponent as ReviewQuoteMarkImg } from "../images/QuoteMark.svg"
import ReviewQuote from "./ReviewQuote"
import Review from "./Review"
const ReviewSection = () => {
  return (
    <div className="review-container">
        <div className="review-header">
            <h1>Reviews</h1>
            <img src="" alt="" />
            <ReviewQuote />
            <Review />
        </div>
    
    </div>
  )
}

export default ReviewSection