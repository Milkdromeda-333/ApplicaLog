import type { JobType } from "../types/job.type";
import { RxCross2 } from "react-icons/rx";

interface JobPageProps {
    job: JobType | null,
    isJobPageOpen: boolean
    toggleJobPage: () => void
}
export default function JobPage({ job, isJobPageOpen, toggleJobPage }: JobPageProps) {

    return (
        <div className={`absolute top-16 left-0 z-50 transition-all duration-500
            w-full h-[calc(100%-64px)] bg-app-gradient 
            ${isJobPageOpen ? " translate-x-full" : "translate-x-0"}
        `}>
            <RxCross2 onClick={toggleJobPage} className="absolute right-4 top-4 text-4xl" />
            <h2>{ job?.position }</h2>
        </div>
    );
}