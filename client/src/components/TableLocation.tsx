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
        <>
            {isEditing ?
                <input ref={ref} type="text" value={newLocation} onChange={handleChange} />
                :
                <p onClick={()=>setIsEditing(true)}>{ location }</p>
            }
        </>
    );
}