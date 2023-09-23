import { useState, useRef } from "react";
import { useClickAway } from 'react-use';


export default function TableDate(props: { date: string }) {
    const [isEditing, setIsEditing] = useState(false);
    const ref = useRef<HTMLInputElement>(null);
    
    useClickAway(ref, () => { setIsEditing(false) });
    
    const getDate = (dateString: string): string => {
        const date = new Date(dateString);
        const month = date.getMonth();
        const day = date.getDay();
        const year = date.getUTCFullYear();

        return `${month}/${day}/${year}`
    }

    const { date } = props;

    return (
        <div className="p-4 hidden text-ellipsis whitespace-nowrap overflow-hidden
                md:block md:border-[#ffffff33] md::border-[2px] md:hover:bg-app-glass-white-70 box-border md:hover:border-app-glass-white-50">
            {isEditing ?
                <input type="date" ref={ref} onChange={() => { setIsEditing(false) }} />  
                :
                <p onClick={() => setIsEditing(true)}>
                    {getDate(date)}
                </p>   
            }
        </div>
    );
}