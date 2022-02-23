export default function HamburgerMenu({isOpen}) {
    console.log(isOpen);
    return (
        <div className={"fixed top-20 right-0 h-[100vh] transition-transform z-10 pr-20 pl-4 bg-white shadow-2xl shadow-slate-400" + (isOpen ? " translate-x-0" : " translate-x-[100%]")}>
            <ul className="flex flex-col gap-5 uppercase">
                <li><a className="hover:text-orange-500" href="#">Themes</a></li>
                <li><a className="hover:text-orange-500" href="#">Plugins</a></li>
                <li><a className="hover:text-orange-500" href="#">Freebies</a></li>
                <li><a className="hover:text-orange-500" href="#">FAQs</a></li>
                <li><a className="hover:text-orange-500" href="#">Contact</a></li>
            </ul>
        </div>
    )
}