import { useEffect, useRef, useState } from 'react';
import Vec2D from '../../utils/vectors.js';

function useAnimationFrame(callback) {
    const requestRef = useRef();
    const previousTimeRef = useRef();
    const animate = time => {
        if (previousTimeRef.current != undefined) {
            const deltaTime = time - previousTimeRef.current;
            callback(deltaTime);
        }
        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animate);
    }
    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, []);
}

function Orbit({placements, size}) {

    const directions = {
        top: new Vec2D(0, -1),
        bottom: new Vec2D(0, 1),
        left: new Vec2D(-1, 0),
        right: new Vec2D(1, 0) 
    }
        
    const [iconsData, setIconsData] = useState([
        {
            placement: "top",
            direction: directions["top"].heading(),
            pos: new Vec2D()
        }
    ]);

    const [direction, setDirection] = useState(0);

    const orbitRef = useRef(null);

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    useEffect(
        () => {
            setWidth(orbitRef.current.clientWidth);
            setHeight(orbitRef.current.clientHeight);
        }
    , []);

    useAnimationFrame(deltaTime => {
        setDirection(prevDirection => (prevDirection + 0.001 * deltaTime) % (Math.PI * 2));
    });

    function getX() {
        return (Math.round((width/2) * Math.cos(direction))) + (width/2);
    }

    function getY() {
        return (Math.round((height/2) * Math.sin(direction))) + (height/2);
    }
    
    return (
        <div className="center">
            <div ref={orbitRef} className={`orbit orbit-${size}`}>
                {iconsData.map(
                    icon => (
                        <div
                            key={icon.placement}
                            className={`icon absolute top-0 left-0 z-10`}
                            style={{transform: `translate(${getX()}px, ${getY()}px)`}}
                        >
                        </div>
                    )
                )}
            </div>
        </div>
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
            <Orbit width={width} height={height} placements={["top", "bottom"]} size="sm"/>
            <Orbit width={width} height={height} placements={["left", "right"]} size="md"/>
            <Orbit width={width} height={height} placements={["top", "bottom", "left", "right"]} size="lg"/>
        </div>
    )
}