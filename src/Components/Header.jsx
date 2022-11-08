import "./Header.css"
import NavbarLink from "./NavbarLink"

const Header = () => {
  return (
    <div className="header-container">
      <nav className="nav-container">
        {/* Header component uses 3 navbar link components to show the links on homepage. they take props data to work  */}
        <NavbarLink link="Home" href="#home"/>
        <NavbarLink link="Products" href="#products"/>
        <NavbarLink link="Reviews" href="#reviews"/>
      </nav>
    </div>
    )
}

export default Header