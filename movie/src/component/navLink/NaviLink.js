import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
const NaviLink = () => {
    const activeStyle = {color: "#fff", background: "blue"};
    return (
    <nav className="nav">
        <NavLink to = "/" activeStyle = {activeStyle} exact className="navBar">Home</NavLink>
        <NavLink to = "/contact" activeStyle = {activeStyle} className="navBar">Contact</NavLink>
        <NavLink to = "/about" activeStyle = {activeStyle} className="navBar">About</NavLink>
    </nav>
)
}

export default NaviLink;