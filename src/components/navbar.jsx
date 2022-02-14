import { NavLink } from "react-router-dom"
import logoImg from "../../assets/themeshop-banner-logo.png"
import { Menu as BurgerIcon, Heart as HeartIcon } from 'react-feather'

function Logo() {
    return <img src={logoImg} alt="logo" className="h-[100%]" />
}

function NavItem({path, title, last}) {
    return (
        <li className="nav-item relative px-5 after:block after:w-1 after:aspect-square after:absolute after:bg-gray-400 after:rounded-full after:-right-0 after:top-[50%] after:-translate-y-[50%] after:translate-x-[50%] last:after:hidden">
            <NavLink
                className= {
                        ({isActive}) => `${isActive ? "text-orange-500 " : ""}uppercase hover:text-orange-500`
                    }
                to={path}
            >
                {title}
            </NavLink>
        </li>
    )
}

export default function Navbar() {
    return (
        <nav className="navbar flex flex-row justify-between items-center sticky top-0 h-20 px-3 pt-4 bg-white z-40">
            <div className="absolute top-0 right-0 left-0 h-2 grid grid-cols-3">
                <i className="bg-[#ff4800]"></i>
                <i className="bg-[#ffba00]"></i>
                <i className="bg-[#2f2e42]"></i>
            </div>
            <Logo />
            <ul className="nav-list flex flex-row list-none font-bold text-sm">
                <NavItem path="/" title="Themes" />
                <NavItem path="/plugins" title="Plugins" />
                <NavItem path="/freebies" title="Freebies" />
                <NavItem path="/faqs" title="FAQs" />
                <NavItem path="/contact" title="Contact" last={true}/>
            </ul>
            <a href="#" className="pb-1 border-b border-black flex flex-row items-center gap-2">
                Join Club!
                <HeartIcon color="currentColor" className="text-red-800"/>
            </a>
            <BurgerIcon size={24} strokeWidth={2.5} className="cursor-pointer hover:scale-125 transition-transform" />
        </nav>
    )
    
}
