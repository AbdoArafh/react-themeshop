import { Children, cloneElement, useRef, useState, useEffect } from 'react'

function getAbsoluteHeight(el) {
    // Get the DOM Node if you pass in a string
    el = (typeof el === 'string') ? document.querySelector(el) : el; 
  
    const styles = window.getComputedStyle(el);
    const margin = parseFloat(styles['marginTop']) +
                 parseFloat(styles['marginBottom']);
    const padding = parseFloat(styles['paddingTop']) +
                  parseFloat(styles['paddingBottom']);
  
    return Math.ceil(el.offsetHeight + margin + padding);
}
  
export default function VerticalCarousel({children, duration=1}) {
    const [height, setHeight] = useState(0);
    const firstRef = useRef();
    useEffect(
        () => {
            setHeight(getAbsoluteHeight(firstRef.current))
        }
    , []);
    const [offset, setOffset] = useState(0);
    function incOffset() {
        setOffset(o => (o + 1) % children.length);
    }
    function decOffset() {
        setOffset(o => o <= 0 ? children.length-1 : o-1);
    }
    return (
        <div className="vertical-carousel flex flex-row gap-4">
            <div
                className="slides relative overflow-y-hidden w-[90%]"
                style={
                    {
                        height: height + "px",
                    }
                }
            >
                {Children.map(children,
                    (child, i) => cloneElement(
                        child,
                        {
                            ref: !i ? firstRef : undefined,
                            style: {
                                transform: `translateY(${(i - offset) * height}px)`,
                                position: "absolute",
                                top: "0",
                                width: "100%",
                                transition: `transform ${duration}s ease`
                            }
                        }
                    )
                )}
            </div>
            <div className="controls flex flex-col items-center justify-center gap-4">
                <button
                    className="bg-orange-500 text-white text-2xl rounded-xl w-10 aspect-square flex justify-center items-center rotate-90 disabled:bg-transparent disabled:text-gray-500"
                    onClick={decOffset}
                    disabled={offset === 0}>
                        &lt;
                    </button>
                <button
                    className="bg-orange-500 text-white text-2xl rounded-xl w-10 aspect-square flex justify-center items-center rotate-90 disabled:bg-transparent disabled:text-gray-500"
                    onClick={incOffset} 
                    disabled={offset === children.length - 1} >
                        &gt;
                </button>
            </div>
        </div>
    )
}