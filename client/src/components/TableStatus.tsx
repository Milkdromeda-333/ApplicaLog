import { useState, useRef } from "react";
import { useClickAway } from "react-use";
import type { ApplicationStatuses } from "../types/job.type";

export default function TableStatus(props: { status: ApplicationStatuses }) {
    const { status } = props;
    const [isEditing, setIsEditing] = useState(false);
    const [newStatus, setNewStatus] = useState(status);
    const ref = useRef<HTMLSelectElement>(null);

    useClickAway(ref, () => { setIsEditing(false) });

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setNewStatus(value as ApplicationStatuses);
    }
    console.log(status)
    return (
        <>
            {isEditing ?
                // <input ref={ref} type="text" value={newStatus} onChange={handleChange} />
                <select ref={ref} onChange={handleChange}>
                    <option value="Applied">Applied</option>
                    <option value="Bookmarked">Bookmarked</option>
                    <option value="Interviewing">Interviewing</option>
                    <option value="Accepted">Accepted</option>
                    <option value="Declined">Declined</option>
                    <option value="Negotiating">Negotiating</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Archived">Archived</option>

                </select>
                :
                <p onClick={() => setIsEditing(true)}>{status}</p>
            }
        </>
    );
}