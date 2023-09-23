import { useState } from 'react';
import { PiStarFill } from "react-icons/pi";

export default function Stars(props: { excitement: number }) {
    const [rating, setRating] = useState<number>(props.excitement);
    const [hover, setHover] = useState<number | null>(null);
    const [componentHover, setComponentHover] = useState<boolean>(false);


    const changeExcitement = (newRating: number) => {
        setRating(newRating);
    }

    return (
        <div className="
            p-4 hidden text-ellipsis whitespace-nowrap overflow-hidden
                md:flex-row-center md:justify-normal md:border-[#ffffff33] md::border-[2px] md:hover:bg-app-glass-white-70 box-border md:hover:border-app-glass-white-50
        "
            onMouseEnter={() => setComponentHover(true)}
            onMouseLeave={() => setComponentHover(false)}>
            {componentHover &&
                [...Array(5)].map((star, index) => {
                    const ratingValue = index + 1;

                    return (
                        <label key={Math.random()}>
                            <input
                                type="radio"
                                name="rate"
                                id="rate"
                                value={ratingValue}
                                onClick={() => changeExcitement(ratingValue)}
                                className="hidden"
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseOut={() => setHover(null)}
                            />
                            <PiStarFill
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseOut={() => setHover(null)}
                                className={`text-2xl text-app-glass-white-50 
                                    ${(hover !== null) && (ratingValue <= (hover || rating)) && "text-app-yellow-50/70"}
                                    ${(props.excitement >= ratingValue) && (hover === null) && "text-app-yellow-50"}
                                `}
                            />
                        </label>
                    )
                })
            }

            {!componentHover &&
                [...Array(5)].map((star, index) => {
                    const ratingValue = index + 1;

                    return (
                        <label key={Math.random()}>
                            <input
                                type="radio"
                                name="rate"
                                id="rate"
                                value={ratingValue}
                                onClick={() => changeExcitement(ratingValue)}
                                className="hidden"
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseOut={() => setHover(null)}
                            />
                            <PiStarFill
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseOut={() => setHover(null)}
                                className={`text-2xl text-app-glass-white-50 
                                    ${(hover !== null) && (ratingValue <= (hover || rating)) && "text-app-yellow-50/70"}
                                    ${(props.excitement >= ratingValue) && (hover === null) && "text-app-yellow-50"}
                                `}
                            />
                        </label>
                    )
                })
            }
        </div>
    );
}
