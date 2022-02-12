import ReactIcon from '../components/icons/reactIcon';

class Vector2D {
    constructor(x=0, y=0) {
        this.x = x;
        this.y = y;
        this._heading = this.heading();
        this._mag = this.getMag();
    }
    heading() {
        return Math.acos(this.x);
    }
    setHeading(newHeading) {
        this._heading = newHeading;
    }
    setMag(mag=1) {
        this.normalize();
        this.x *= mag;
        this.y *= mag;
    }
    normalize() {
        this._mag = this.getMag();
        this.x /= this._mag;
        this.y /= this._mag;
    }
    getMag() {
        return Math.sqrt((this.x**2) + (this.y**2));
    }
    copy() {
        return new Vector2D(this.x, this.y);
    }
}

function Orbit({placements, size}) {
    // const [orbits, setOrbits] = (placements.map(
    //     placement => (
    //         {
    //             direction: {},
    //             placement,
    //             pos
    //         }
    //     )        
    // ));

    /**
     * x = cos(a)
     * y = sin(a)
     * a = acos(x)
     */

    // const directions = {
    //     top: new Vector2D(0, -1),
    //     bottom: new Vector2D(0, 1),
    //     left: new Vector2D(-1, 0),
    //     right: new Vector2D(1, 0)
    // }

    // const parentSize = {x: 200, y: 200};

    // const d = 100;

    // const orbits = placements.map(
    //     placement => {
    //         return {
    //             placement,
    //             direction: directions[placement],
    //             pos() {
    //                 return directions[placement].copy().setMag(d);
    //             },
    //         }
    //     }
    // )

    // console.log(orbits);

    // return null;

    return (
        <div className="center">
            <div className={`orbit orbit-${size}`}>
                {placements.map(
                    placement => (
                        <div key={placement} data-placement={placement} className={`icon ${placement}`}></div>
                    )
                )}
            </div>
        </div>
    //     <div className="center">
    //         <div className={`orbit orbit-${size}`}>
    //             {orbits.map(
    //                 orbit => {
    //                     return (
    //                         <div key={orbit.placement} className={"icon top-0 left-0"} style={`transform: translate(${orbit.pos().x + parentSize.x}px, ${orbit.pos().y + parentSize.y}px)`}>

    //                         </div>
    //                     )
    //                 }
    //             )    
    //             }
    //         </div>
    //     </div>
    )
}

function Orbits() {
    return (
		<div className="orbits">
            <Orbit placements={["top", "bottom"]} size="sm"/>
            <Orbit placements={["left", "right"]} size="md"/>
            <Orbit placements={["top", "bottom", "left", "right"]} size="lg"/>
        </div>
    )
}

function BrowseButton({additionalClassNames=""}) {
    return (
        <button className={"bg-orange-700 max-w-fit text-white py-3 px-12 rounded-lg hover:brightness-110 active:brightness-75 sm:mx-auto" + " " + additionalClassNames}>
            Browse
        </button>
    )
}

function Feature({title, description, Icon, blobColor}) {
    return (
        <div className="feature group pt-10 pb-14 border-b-4 border-b-transparent hover:border-orange-600 cursor-pointer relative after:block after:w-5 after:h-[2px] after:bg-gray-500 after:absolute after:bottom-5">
            {title.split("<br>").map(
                (t, i) => (
                    <h1
                        key={i.toString()}
                        className="title text-2xl group-hover:text-orange-600 last-of-type:mb-5"
                    >
                        {t}
                    </h1>
                )
            )}
            {
                description.split("<br>").map(
                    (d, i) => (
                        <p key={i.toString()} className="description text-sm last-of-type:mb-5">
                            {d}    
                        </p>
                    )
                )
            }
            <div className="relative">
                <div className={`blob ${blobColor} w-10 aspect-square absolute -top-3 left-0 rounded-full`}></div>
                {typeof Icon === "string"
                    ? <img src={Icon} alt={title} />
                    : <Icon className="scale-300 ml-6 mt-10" />
                }
            </div>
        </div>
    )
}

function WhyUs() {
    return (
        <section className="why-us my-10 mx-auto">
            <div className="text-center">
                <h1 className="font-medium text-4xl mb-5">
                    Why Choose Tortoiz Themes
                </h1>
                <p>
                    Our strategy includes consistently evolving, to ensure that we are producing
                </p>
                <p>
                    exceptional SEO for businesses.
                </p>
            </div>
            <div className="features grid grid-cols-4 gap-10 px-5 mx-auto mt-10">
                <Feature
                    title="Competitor <br> Research"
                    description="Help business with their brading <br> identity better"
                    Icon={ReactIcon}
                    blobColor="bg-red-400"
                />
                <Feature
                    title="Competitor <br> Research"
                    description="Help business with their brading <br> identity better"
                    Icon={ReactIcon}
                    blobColor="bg-red-400"
                />
                <Feature
                    title="Competitor <br> Research"
                    description="Help business with their brading <br> identity better"
                    Icon={ReactIcon}
                    blobColor="bg-red-400"
                />
                <Feature
                    title="Competitor <br> Research"
                    description="Help business with their brading <br> identity better"
                    Icon={ReactIcon}
                    blobColor="bg-red-400"
                />
            </div>
        </section>
    )
}

function SeperatedHeaderTitle({titles}) {
    return (
        titles.split(" <br> ").map(
            (title, i) => (
                <h1 key={i.toString()} className="title text-5xl -my-5 font-medium">
                    {title}
                </h1>
            )
        )
    )
}

function Product({key}) {
    return (
        <a href="#" key={key} className="product relative group flex flex-col gap-5">
            <img src="https://via.placeholder.com/400x300.png" alt="placeholder image" className="object-cover w-[100%]" />
            <div className="type text-sm text-orange-500">HTML</div>
            <div className="name text-2xl font-medium group-hover:underline">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit
            </div>
            <p className="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas impedit ratione repudiandae rem ea
            </p>
            <div className="buy flex flex-row justify-between mt-4">
                <a href="#" className="view-demo hover:text-orange-500 font-medium" target="_blank">
                    View Demo
                </a>
                <div className="price font-medium">
                    49$
                </div>
            </div>
        </a>
    )
}

function LatestProducts() {
    return (
        <section className="mt-20 latest-products flex flex-col gap-14">
            <h1 className="title text-3xl font-medium text-center">
                Our Latest Products
            </h1>
            <ul className="filters flex flex-row uppercase justify-around font-normal text-gray-800 select-none">
                {["All", "website seo", "fb/gg ads", "email marketing", "web design", "video viral"].map(
                    (filter, i) => (
                        <li key={i.toString()} className="hover:text-orange-500 cursor-pointer">
                            {filter}
                        </li>
                    )
                )}
            </ul>
            <div className="products grid grid-cols-3 gap-10">
                {Array.from(Array(9)).map(
                    (_, i) => <Product key={i.toString()} />
                )}
            </div>
            <BrowseButton additionalClassNames="mt-6" />
        </section>
    )
}

function JobTitle({position, company}) {
    return (
        <div className="job-title">
            <span className="position text-gray-500">{position}</span>
            {" "}
            <span className="company text-orange-500">{company}</span>
       </div>
    )
}

function Rate() {
    return (
        <div className="rate flex flex-col gap-10">
            <div className="review">
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, maiores! "
            </div>
            <div className="person flex flex-row h-16 gap-5">
                <img src="https://via.placeholder.com/100" alt="person's profile picture" className="rounded-full" />
                <div className="info my-auto">
                    <div className="name font-medium">
                        John Doe
                    </div>
                    <JobTitle position="Director At" company="Company"/>
                </div>
            </div>
        </div>
    )
}

export default function Themes() {
    return (
        <div className="container relative mx-auto mt-14">
            <section className="header mt-20 mb-52 mx-1 grid lg:gap-0 lg:grid-rows-1 lg:grid-cols-2 sm:grid-cols-1 sm:grid-rows-2 sm:gap-[100px]">
                <div className="text flex flex-col gap-10 lg:text-left sm:text-center">
                    <SeperatedHeaderTitle titles="Exquisitly <br> designed themes <br> for your next project" />
                    <div className="details flex flex-col">
                        <p>
                            Our products are hand crafted for production
                        </p>
                        <p>
                            & can get you up and running in minutes
                        </p>
                    </div>
                    <BrowseButton additionalClassNames="lg:ml-0" />
                </div>
                <Orbits />
            </section>
            <WhyUs />
            <LatestProducts />
            <section className="why-the-love my-20"> 
                <h1 className="title text-center text-4xl font-medium">
                    Why Clients Love Us
                </h1>
                <div className="description text-center my-6">
                    <p>
                        Our strategy includes consistently evolving, to ensure that we are producing
                    </p>
                    <p>
                        exceptional SEO for businesses.
                    </p>
                </div>
                <div className="rates mt-20 grid grid-cols-2 gap-10 overflow-scroll h-52">
                    <Rate />
                    <Rate />
                    <Rate />
                    <Rate />
                    <Rate />
                    <Rate />
                </div>
            </section>
            <section className="collab my-20">
                <marquee behavior="scroll" direction="left" scrolldelay="60">
                    {Array.from(Array(8)).map(
                        (_, i) => <img key={i.toString()} src="https://via.placeholder.com/500x100" alt="a company logo" className="inline-block mx-10" />
                    )}
                </marquee>
            </section>
        </div>
    )
}
