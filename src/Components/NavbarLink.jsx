import "./NavbarLink.css"
const NavbarLink = (props) => {
  return (
    <a className="navbar-link" href={props.href}>{props.link}</a>
  )
}

export default NavbarLink