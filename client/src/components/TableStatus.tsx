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
    return (
        <div className="p-4 md:text-ellipsis md:overflow-hidden 
                md:block md:whitespace-nowrap md:border-[#ffffff33] md:hover:bg-app-glass-white-70 box-border md:hover:border-app-glass-white-50">
            {isEditing ?
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
        </div>
    );
}