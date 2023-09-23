import type { JobType } from "../types/job.type";
// import { RxCross2 } from "react-icons/rx";
import { RiEditFill } from "react-icons/ri";
import { HiTrash } from "react-icons/hi";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import getTimeSince from "../utils/getTime";

interface JobPageProps {
    job: JobType | null,
    isJobPageOpen: boolean
    toggleJobPage: () => void
}
export default function JobPage({ job, isJobPageOpen, toggleJobPage }: JobPageProps) {

    return (
        <div className={`
            absolute top-16 left-0 z-50 transition-all duration-500
            w-full h-[calc(100%-64px)] bg-app-gradient p-4
            ${isJobPageOpen ? "translate-x-0" : "translate-x-full"
}
        `}>
            <div className="
                ml-auto mb-2 cursor-pointer
                flex flex-row justify-between items-center
                fontSize-icons
            ">
                <span onClick={toggleJobPage} className="flex-row-center gap-2">
                    <BsFillArrowLeftSquareFill /> 
                    back
                </span>
                <div className="flex-row-center gap-2">
                    <RiEditFill />
                    <HiTrash />
                </div>
            </div>

            <div className="flex-col-center items-start gap-2 w-full">
                <div className="flex-row-center gap-2 w-full">
                    <h2 className="fontSize-h1">{job?.position} • </h2>

                    <select className="hidden bg-app-yellow-60 bg-transparent md:block">
                        <option value="Applied">Applied</option>
                        <option value="Bookmarked">Bookmarked</option>
                        <option value="Interviewing">Interviewing</option>
                        <option value="Accepted">Accepted</option>
                        <option value="Declined">Declined</option>
                        <option value="Negotiating">Negotiating</option>
                        <option value="Rejected">Rejected</option>
                        <option value="Archived">Archived</option>
                    </select>

                </div>
                
                <span>{job?.company} - {job?.location} </span>

                <span>Saved {
                    job?.date_applied ?
                    getTimeSince(new Date(job?.date_applied))
                    : getTimeSince(new Date(job?.date_saved as string))
                }
                    {job?.url &&
                        <span> on &nbsp;
                            <a href={job?.url}>{job?.url}</a>
                        </span>}
                </span>

                <select className="w-full bg-app-yellow-60 text-white md:hidden">
                    <option value="Applied">Applied</option>
                    <option value="Bookmarked">Bookmarked</option>
                    <option value="Interviewing">Interviewing</option>
                    <option value="Accepted">Accepted</option>
                    <option value="Declined">Declined</option>
                    <option value="Negotiating">Negotiating</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Archived">Archived</option>
                </select>
            </div>

            <div>
                <div className="flex-row-center justify-between my-4">
                    <h2 className="fontSize-h2">
                        Job Description
                    </h2>

                    <RiEditFill className="fontSize-icons" />
                </div>

                <p className="md:max-w-[90%]">{ job?.description }</p>
            </div>
        </div>
    );
}