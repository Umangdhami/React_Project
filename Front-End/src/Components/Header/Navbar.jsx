import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="hidden lg:block">
            <div className="navigation ps-12 flex items-center ">
                <nav>
                    <ul className="flex gap-5 items-center">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/shop">Shop</NavLink>
                        </li>
                        <li>
                            <NavLink to="/page">Pages</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog">Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">Features</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

    )
}

export default Navbar
