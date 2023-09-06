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
        <div className="p-4 hidden text-ellipsis whitespace-nowrap overflow-hidden
                md:block md:border-[#ffffff33] md:hover:bg-app-glass-white-70 box-border md:hover:border-app-glass-white-50">
            {isEditing ?
                <input ref={ref} type="text" value={newSalary} onChange={handleChange} />
                :
                <p onClick={() => setIsEditing(true)}>{salary}</p>
            }
        </div>
    );
}