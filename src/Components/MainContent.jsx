import "./MainContent.css"
import { ReactComponent as MainContentImg } from "../images/image1.svg"

const MainContent = () => {
  return (
    <div className="mainContent-container">
        <div className="main-features">
          <h1 className="mainContent-h1">Zahid's Shop</h1>
          <p className="mainContant-p">The UK's most sustainable online shopping destination.</p>
          <div className="main-button">
              <button>Products</button>
          </div>
        </div>
        <div className="mainContent-img">
          <MainContentImg /> 
        </div>
    </div>
  )
}

export default MainContent