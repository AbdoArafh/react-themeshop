import Logo from '../../assets/themeshop-banner-logo.png'
import { Navigation,
        Mail,
        Phone,
        Twitter,
        GitHub, 
        Facebook,
        Dribbble, 
        Instagram } from 'react-feather'

const BunchOfLinks = ({title, links}) => (
    <div className={`${title} text-gray-500 mt-10`}>
        <h2 className="title">
            {title}
        </h2>
        <ul className="flex flex-col gap-2">
            {links.map(
                (link, i) => (
                    <li key={i.toString()}>
                        <a href={link.href || "#"} className="hover:text-orange-400 transition-colors">
                            {link.text}
                        </a>
                    </li>
                )
            )}
        </ul>
    </div>
)

function NewsLetter() {
    return (
        <div className="news-letter mt-10">
            <h2>Newsletter</h2>
            <p>
                Subscribe to our newsletter and we will inform you about
                newest projects and promotions
            </p>
            <form className="flex flex-row">
                <input className="py-4 pl-4 outline-none" type="email" name="email" id="email" autoComplete="off" placeholder="Email Address" />
                <button type="submit">
                    <Mail />
                </button>
            </form>
        </div>
    )
}

function SocialIcon({Icon, href}) {
   return (
       <a href={href || "#"} className="hover:text-black transition-colors" target="_blank">
           <Icon />
       </a>
   ) 
}

const InfoPiece = ({Icon, text}) =>
    <div className="infoPiece text-gray-500 mb-3"><Icon className="inline-block mr-2" />{text}</div>

const LanguageOption = ({lang, key}) => (
    <a href="#" key={key} className="uppercase hover:text-black transition-colors">
        {lang}
    </a>
)

function FooterInfo() {
    return (
        <div className="site-info">
            <div className="logo h-14 mb-8">
                <img src={Logo} alt="site logo" className="h-[100%]"/>
            </div>
            <div className="info">
                <h2>Information</h2>
                <address>
                    <InfoPiece Icon={Navigation} text={"Lorem ipsum dolor sit amet consectetur."} />
                </address>
                <InfoPiece Icon={Mail} text="username@example.com" />
                <InfoPiece Icon={Phone} text="(+90) 543-535-226-367" />
            </div>
        </div>
    )
}

function UpperPortion() {
    return (
        <div className="upper-portion grid-footer">
            <FooterInfo />
            <BunchOfLinks title="Company" links={
                ["About Us",
                    "Team",
                    "Careers",
                    "Investors",
                    "Services",
                    "Cases",
                    "Contact Us",
                    "Offices"].map(
                        el => ({text: el, href:"#"})
                    )
            } />
            <BunchOfLinks title="Quick Links" links={
                ["Help Center",
                    "FAQs",
                    "Policy Privacy",
                    "Term Conditions",
                    "Sitemap",].map(
                        el => ({text: el, href:"#"})
                    )
            } />
            <NewsLetter />
        </div>
    )
}

function LanguageSelect({langs}) {
    return (
        <div className="language-select flex flex-row gap-3 text-gray-400 justify-self-center">
            {langs.map(lang => <LanguageOption lang={lang} key={lang} />)}
        </div>
    )
}

function LowerPortion() {
    return (
        <div className="lower-portion grid grid-cols-3 mt-20">
            <div className="social-icons flex flex-row gap-3 justify-start text-gray-400">
                <SocialIcon Icon={Twitter}/>
                <SocialIcon Icon={GitHub}/>
                <SocialIcon Icon={Facebook}/>
                <SocialIcon Icon={Dribbble}/>
                <SocialIcon Icon={Instagram}/>
            </div>
            <div className="copyrights justify-self-center">
                &copy; {new Date().getFullYear()} Tortoiz Themes All Rights Reserved
            </div>
            <LanguageSelect langs={["eng", "fra", "arb"]}/>
        </div>
    )
}

export default function Footer() {
  return (
    <footer className="container mx-auto mb-20">
        <UpperPortion />
        <LowerPortion />
    </footer>
  )
}
