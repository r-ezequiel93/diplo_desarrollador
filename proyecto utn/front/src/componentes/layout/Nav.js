import { Link } from "react-router-dom";
const Nav = (props) => {
    return (
        <nav >
            <div>
                <ul>
                    <li><link to="/">home</link></li>
                    <li><link to="/nosotros">nosotros</link></li>
                    <li><link to="/novedades">novedades</link></li>
                    <li><link to="/contacto">contacto</link></li>


                </ul>
            </div>
        </nav>

    )

}

export default Nav;