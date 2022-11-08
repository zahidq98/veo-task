import "./ReviewQuote.css"

const ReviewQuote = (props) => {
  return (
    <div className="reviewQuote-container">
       <div className="reviewQuote-bubble">
          <h4 className="reviewQuote-h4">{props.bubbleTitle}</h4>
          <p className="reviewQuote-p">{props.bubbleDescription}</p>
       </div>
       <div className="reviewQuote-profile">
          {/* <img src="" alt="" /> */}
          <h5 className="reviewQuote-profile-h5">{props.name}</h5>
          <p className="reviewQuote-profile-p">{props.jobTitle}</p>
       </div>
    </div>
  )
}

export default ReviewQuote