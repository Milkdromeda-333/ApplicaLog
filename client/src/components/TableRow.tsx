import { JobType } from "../types/job.type";

export default function TableRow(props: { data: JobType }) {

    const getDate = () => {
        const date = new Date(props.data.date_applied);
        const month = date.getMonth();
        const day = date.getDay();
        const year = date.getUTCFullYear();

        return `${month}/${day}/${year}`
    }

    return (
        <div className="flex flex-row justify-between border-b-[1px] border-t-[1px] border-[#ffffff33] 
            overflow-hidden md:grid md:grid-cols-7 md:hover:bg-app-glass-white-60
        ">
            <div className="p-4 flex flex-col md:hidden md:hover:bg-app-glass-white-70">
                <span>{props.data.position}</span>
                <span className="text-app-yellow-50/70 text-sm">{props.data.company}</span>
            </div>

            <div className="p-4 hidden text-ellipsis whitespace-nowrap	w-[14vw] overflow-hidden
            md:block md:hover:bg-app-glass-white-70 md:hover:outline md:hover:outline-[2px] md:hover:outline-app-glass-white-50">
                {props.data.position} {/* renders on larger screens */}
            </div> 

            <div className="p-4 hidden text-ellipsis whitespace-nowrap w-[14vw] overflow-hidden 
            md:block md:border-[#ffffff33] md:border-l-2 md:hover:bg-app-glass-white-70 md:hover:outline md:hover:outline-[2px] md:hover:outline-app-glass-white-50">
                {props.data.company}
            </div>

            <div className="p-4 md:text-ellipsis md:whitespace-nowrap md:w-[14vw] md:overflow-hidden 
            md:block md:border-[#ffffff33] md:border-l-2 md:hover:bg-app-glass-white-70 md:hover:outline md:hover:outline-[2px] md:hover:outline-app-glass-white-50
            ">
                {props.data.applicationStatus}
            </div>

            <div className="p-4 hidden md:block w-[14vw] text-ellipsis whitespace-nowrap overflow-hidden
            md:border-[#ffffff33] md:border-l-2 md:hover:bg-app-glass-white-70 md:hover:outline md:hover:outline-[2px] md:hover:outline-app-glass-white-50">
                {props.data.max_salary}
            </div>

            <div className="p-4 hidden md:block text-ellipsis whitespace-nowrap	w-[14vw] overflow-hidden
            md:border-[#ffffff33] md:border-l-2 md:hover:bg-app-glass-white-70 md:hover:outline md:hover:outline-[2px] md:hover:outline-app-glass-white-50">
                {props.data.location}
            </div>

            <div className="p-4 hidden text-ellipsis whitespace-nowrap	w-[14vw] overflow-hidden
            md:block md:border-[#ffffff33] md:border-l-2 md:hover:bg-app-glass-white-70 md:hover:outline md:hover:outline-[2px] md:hover:outline-app-glass-white-50">
                {getDate()}
            </div>

            <div className="p-4 hidden text-ellipsis whitespace-nowrap w-[14vw] overflow-hidden
            md:block md:border-[#ffffff33] md:border-l-2 md:hover:bg-app-glass-white-70 md:hover:outline md:hover:outline-[2px] md:hover:outline-app-glass-white-50">
                {props.data.excitement}
            </div>
        </div>
    );
}