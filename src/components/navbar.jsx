import { NavLink } from "react-router-dom"
import logoImg from "../../assets/themeshop-banner-logo.png"
import { Menu as BurgerIcon, Heart as HeartIcon, ShoppingCart } from 'react-feather'
import HamburgerMenu from "./hamburgerMenu"
import { useState } from 'react'
import { X } from "react-feather"

function Logo() {
    return <NavLink to="/" className="h-[100%] relative"><img src={logoImg} alt="logo" className="h-[100%]"/></NavLink>
}

export function NavLinkItem({path, children}) {
    return (
        <NavLink
            className= {
                    ({isActive}) => `${isActive ? "text-orange-500 " : ""}uppercase hover:text-orange-500`
                }
            to={path}
        >
            {children}
        </NavLink>
    )
}

function NavItem({path, title}) {
    return (
        <li className="nav-item relative px-5 after:block after:w-1 after:aspect-square after:absolute after:bg-gray-400 after:rounded-full after:-right-0 after:top-[50%] after:-translate-y-[50%] after:translate-x-[50%] last:after:hidden">
            <NavLinkItem path={path}>
                {title}
            </NavLinkItem>
        </li>
    )
}

export default function Navbar() {
    const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

    function switchBurgerMenu() {
        setHamburgerMenuOpen(x => !x);
    }

    return (
        <nav className="navbar flex flex-row justify-between items-center sticky top-0 h-20 px-3 pt-4 bg-white z-40">
            <div className="absolute top-0 right-0 left-0 h-2 grid grid-cols-3">
                <i className="bg-[#ff4800]"></i>
                <i className="bg-[#ffba00]"></i>
                <i className="bg-[#2f2e42]"></i>
            </div>
            <Logo />
            <ul className="nav-list hidden flex-row list-none font-bold text-sm lg:flex sm:hidden">
                <NavItem path="/" title="Themes" />
                <NavItem path="/plugins" title="Plugins" />
                <NavItem path="/freebies" title="Freebies" />
                <NavItem path="/faqs" title="FAQs" />
                <NavItem path="/contact" title="Contact"/>
            </ul>
            <a href="#" className="pb-1 border-b border-black flex flex-row items-center gap-2">
                Join Club!
                <HeartIcon color="currentColor" className="text-red-800" fill="rgb(153 27 27)" />
            </a>
            <NavLink to="/shopping-cart" className="">
                <ShoppingCart />
            </NavLink>
            <button 
                className="hover:scale-125 transition-transform"
                onClick={switchBurgerMenu}>
                {hamburgerMenuOpen
                ? <X />
                : <BurgerIcon
                    size={24}
                    strokeWidth={2.5}
                />}
            </button>
            <HamburgerMenu isOpen={hamburgerMenuOpen} />
        </nav>
    )
    
}
