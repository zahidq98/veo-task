import "./Header.css"
import NavbarLink from "./NavbarLink"

const Header = () => {
  return (
    <div className="header-container">
      <nav className="nav-container">
        <NavbarLink link="Home" href="#home"/>
        <NavbarLink link="Products" href="#products"/>
        <NavbarLink link="Reviews" href="#reviews"/>
      </nav>
    </div>
    )
}

export default Header