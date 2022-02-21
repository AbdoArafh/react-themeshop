import { useEffect, useRef, useState } from 'react';
import Vec2D from '../../utils/vectors.js';

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

    const directions = {
        top: new Vec2D(0, -1),
        bottom: new Vec2D(0, 1),
        left: new Vec2D(-1, 0),
        right: new Vec2D(1, 0) 
    }

    const IconsData = [
        {
            // placement: "top",
            direction: directions["top"].clone(),
            pos: new Vec2D()
        }
    ];

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

export default function Orbits() {
    const orbitRef = useRef(null);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    useEffect(
        () => {
            setWidth(orbitRef.current.clientWidth);
            setHeight(orbitRef.current.clientHeight);
        }
    , []);
    return (
		<div ref={orbitRef} className="orbits">
            <Orbit placements={["top", "bottom"]} size="sm"/>
            <Orbit placements={["left", "right"]} size="md"/>
            <Orbit placements={["top", "bottom", "left", "right"]} size="lg"/>
        </div>
    )
}