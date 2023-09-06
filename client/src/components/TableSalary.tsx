import { useState, useRef } from "react";
import { useClickAway } from "react-use";

export default function TableSalary(props: { salary: string }) {
    const { salary } = props;
    const [isEditing, setIsEditing] = useState(false);
    const [newSalary, setNewSalary] = useState(salary);
    const ref = useRef<HTMLInputElement>(null);

    useClickAway(ref, () => { setIsEditing(false) });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setNewSalary(value);
    }
    return (
        <>
            {isEditing ?
                <input ref={ref} type="text" value={newSalary} onChange={handleChange} />
                :
                <p onClick={() => setIsEditing(true)}>{salary}</p>
            }
        </>
    );
}