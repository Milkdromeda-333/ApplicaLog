import { useState, useRef } from "react"; 
import { useClickAway } from "react-use";

export default function TableLocation(props: {location: string}) {
    const { location } = props;
    const [isEditing, setIsEditing] = useState(false);
    const [newLocation, setNewLocation] = useState(location);
    const ref = useRef<HTMLInputElement>(null);

    useClickAway(ref, () => { setIsEditing(false) });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setNewLocation(value);
    }
    return (
        <div className="p-4 hidden md:block text-ellipsis whitespace-nowrap overflow-hidden
            md:border-[#ffffff33] md::border-[2px] md:hover:bg-app-glass-white-70 box-border md:hover:border-app-glass-white-50">
            {isEditing ?
                <input ref={ref} type="text" value={newLocation} onChange={handleChange} />
                :
                <p onClick={()=>setIsEditing(true)}>{ location }</p>
            }
        </div>
    );
}