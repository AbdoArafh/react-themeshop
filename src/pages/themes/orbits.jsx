import { useEffect, useRef, useState } from 'react';
import Vec2D from '../../utils/vectors.js';
import { round } from '../../utils/general';

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
        <div
            key={data.placement}
            className="icon absolute top-0 left-0 z-10"
            style={{transform: `translate(${getX(data.direction)}px, ${getY(data.direction)}px)`}}
            ref={iconRef}
        >
        </div>
    )
}

function Orbit({icons, size, speed=1}) {

    const directions = {
        top: new Vec2D(0, -1),
        bottom: new Vec2D(0, 1),
        left: new Vec2D(-1, 0),
        right: new Vec2D(1, 0) 
    }
        
    const [iconsData] = useState(icons.map(
        icon => ({
            placement: icon.placement,
            direction: directions[icon.placement].heading(),
            pos: new Vec2D(),
            icon: icon.icon
        })
    ));

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
        setDirection(prevDirection => (prevDirection + (0.001 * deltaTime * speed)) % (Math.PI * 2));
    });
    
    return (
        <div className="center">
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
		<div className="orbits">
            <Orbit icons={[
                    {placement: "top"},
                    {placement: "bottom"}
                ]} size="sm" speed={3} />
            <Orbit icons={[
                    {placement: "left"},
                    {placement: "right"}
                ]} size="md"/>
            <Orbit icons={[
                    {placement: "top"},
                    {placement: "bottom"},
                    {placement: "left"},   
                    {placement: "right"}   
                ]} size="lg"/>
        </div>
    )
}