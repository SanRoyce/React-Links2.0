import { NavLink } from "react-router-dom";

export default function Navbar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
  return (
    <nav class="navbar bg-dark justify-content-between">
      <img className="mx-3" src="https://cdn-icons-png.flaticon.com/512/86/86481.png" alt="" width="50px"/>
      <form class="form-inline mx-3 my-2">
        <NavLink className={setActiveClass} end to="/">
          Home
        </NavLink>
        {" - "}
        <NavLink className={setActiveClass} end to="/Pokemones">
          Pokemones
        </NavLink>
      </form>
    </nav>
  );
}
