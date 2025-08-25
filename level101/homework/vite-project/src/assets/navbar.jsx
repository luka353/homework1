import { NavLink } from "react-router-dom";

export default function Navbar() {
  const activeStyle = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
    color: isActive ? "red" : "black",
    marginRight: "10px",
  });

  return (
    <nav>
      <NavLink to="/" style={activeStyle}>Home</NavLink>
      <NavLink to="/create" style={activeStyle}>Create</NavLink>
      <NavLink to="/about" style={activeStyle}>About</NavLink>
      <NavLink to="/about/create" style={activeStyle}>About Create</NavLink>
      <NavLink to="/user/1" style={activeStyle}>User 1</NavLink>
      <NavLink to="/user/2" style={activeStyle}>User 2</NavLink>
      <NavLink to="/user/xyz" style={activeStyle}>User XYZ</NavLink>
    </nav>
  );
}
