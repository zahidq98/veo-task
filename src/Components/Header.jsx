import "./Header.css"

const Header = () => {
  return (
    <div className="header-container">
        <h1>Zahid's Shop</h1>
        <p>The UK's most sustainable online shopping destination. </p>
        <ul>
          <li><a href="http://">Home</a></li>
          <li><a href="http://">Products</a></li>
          <li><a href="http://">About Us</a></li>
        </ul>
    </div>

  )
}

export default Header