import "./Footer.css"

const Footer = () => {
    return (
      <div className="footer-container">
          <div className="company-links">
          <h4>Company</h4>
          {/* fake links for footer */}
          <a href="">About Us</a>
          <a href="">Blog</a>
          <a href="">Careers</a>
          <a href="">Contact Us</a>
          </div>
          <div className="legal-links">
          <h4>Legal</h4>
          {/* fake links for footer */}
          <a href="">Cookies Policy</a>
          <a href="">Privacy Policy</a>
          <a href="">Terms of Serfice</a>
          <a href="">Law Enforcement</a>
          </div>
          <div className="support-links">
          <h4>Support</h4>
          {/* fake links for footer */}
          <a href="">Help Center</a>
          <a href="">Safety Center</a>
          <a href="">Community Guidelines</a>
          </div>
      </div>
  
    )
  }
  
  export default Footer