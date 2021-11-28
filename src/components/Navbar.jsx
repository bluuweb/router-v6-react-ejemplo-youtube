import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const Navbar = () => {
    const { user } = useContext(UserContext);

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <Link to="/">{user ? "Juanito" : "SinConexión"}</Link>
                <NavLink className="btn btn-sm btn-outline-primary" to="/">
                    Inicio
                </NavLink>
                <NavLink className="btn btn-sm btn-outline-primary" to="/blog">
                    Blog
                </NavLink>
                <NavLink
                    className="btn btn-sm btn-outline-primary"
                    to="/contacto"
                >
                    Contacto
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
