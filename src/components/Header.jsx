import { Link, NavLink } from "react-router"
import './Header.css'

export function Header() {
    return (
        <div className="header">
            <div className="page-width">
                <div className="header__inner">
                    <div className="header__logo-text montserrat-semibold">
                        <Link to="/">Mernuel Abella</Link>
                    </div>
                    <div className="header__links">
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/work">Work</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}