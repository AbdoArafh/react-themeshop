import { NavLinkItem } from "./navbar"

export default function HamburgerMenu({isOpen}) {
    return (
        <div className={"fixed top-20 right-0 h-[100vh] transition-transform z-10 pr-20 pl-4 bg-white shadow-2xl shadow-slate-400" + (isOpen ? " translate-x-0" : " translate-x-[100%]")}>
            <ul className="flex flex-col gap-5 uppercase font-bold">
                <li><NavLinkItem path="/">Themes</NavLinkItem></li>
                <li><NavLinkItem path="/plugins">Plugins</NavLinkItem></li>
                <li><NavLinkItem path="/freebies">Freebies</NavLinkItem></li>
                <li><NavLinkItem path="/faqs">FAQs</NavLinkItem></li>
                <li><NavLinkItem path="/contact">Contact</NavLinkItem></li>
            </ul>
        </div>
    )
}