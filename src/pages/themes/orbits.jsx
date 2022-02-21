import { useEffect, useRef, useState, createElement } from 'react'
import Vec2D from '../../utils/vectors.js'
import { round } from '../../utils/general'
import ReactIcon from '../../components/icons/reactIcon'
import BootstrapIcon from '../../components/icons/bootstrapIcon'
import JSIcon from '../../components/icons/jsIcon'
import ShopifyIcon from '../../components/icons/shopifyIcon'
import VueIcon from '../../components/icons/vueIcon'
import CSSIcon from '../../components/icons/css3icon'
import HTMLIcon from '../../components/icons/html5icons'
import useAnimationFrame from '../../hooks/useAnimationFrame.js'
import { GitBranch } from 'react-feather'

function OrbitingIcon({data, width, height, direction}) {

    const [size, setSize] = useState({w: 0, h: 0});
    const iconRef = useRef(null);

    useEffect(
        () => {
            setSize({w: iconRef.current.clientWidth, h: iconRef.current.clientHeight});
        }
    , []);


    function getX(dir) {
        return (round((width/2) * Math.cos(direction + dir), 3)) + (width/2) - (size.w/2);
    }

    function getY(dir) {
        return (round((height/2) * Math.sin(direction + dir), 3)) + (height/2) - (size.h/2);
    }

    return (
        createElement(data.icon,
            {
                key: data.placement,
                className: "w-6 h-6 top-0 left-0 z-10 absolute",
                style: {transform: `translate(${getX(data.direction)}px, ${getY(data.direction)}px)`},
                ref: iconRef,
            },
            null)
    )
}

function Orbit({icons, size, speed=1}) {

    const directions = {
        top: new Vec2D(0, -1),
        bottom: new Vec2D(0, 1),
        left: new Vec2D(-1, 0),
        right: new Vec2D(1, 0) 
    }
        
    const [iconsData] = useState(Object.keys(icons).map(
        key => ({
            placement: key,
            direction: directions[key].heading(),
            pos: new Vec2D(),
            icon: icons[key]
        })
    ));

    const [direction, setDirection] = useState(0);

    const orbitRef = useRef(null);

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    function updateSize() {
        setWidth(orbitRef.current.clientWidth);
        setHeight(orbitRef.current.clientHeight);
    }

    useEffect(
        () => {
            updateSize();
            // todo replace with resize observer
            window.addEventListener("resize", updateSize);
            return () => {
                window.removeEventListener("resize", updateSize);
            }
        }
    , []);

    useAnimationFrame(deltaTime => {
        setDirection(prevDirection => (prevDirection + (0.001 * deltaTime * speed)) % (Math.PI * 2));
    });
    
    return (
        <div className="center">
            <div className="center">
                <div className={`orbit orbit-spinning orbit-${size}`}></div>
            </div>
            <div ref={orbitRef} className={`orbit orbit-${size}`}>
                {iconsData.map(
                    data => (
                        <OrbitingIcon key={data.placement} data={data} width={width} height={height} direction={direction} />
                    )
                )}
            </div>
        </div>
    )
}

export default function Orbits() {
    return (
		<div className="orbits relative">
            <Orbit icons={{
                        top: HTMLIcon,
                        bottom: CSSIcon,
                        left: JSIcon,
                        right: BootstrapIcon
                    }}
                size="sm"
                speed={3} />
            <Orbit icons={{
                        top: ReactIcon,
                        bottom: VueIcon
                    }}
            size="md"/>
            <Orbit icons={{
                        left: GitBranch,
                        right: ShopifyIcon
                    }}
                size="lg"/>
        </div>
    )
}