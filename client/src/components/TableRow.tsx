import { JobType } from "../types/job.type";

export default function TableRow(props: { data: JobType }) {

    const getDate = (dateString:string):string => {
        const date = new Date(dateString);
        const month = date.getMonth();
        const day = date.getDay();
        const year = date.getUTCFullYear();

        return `${month}/${day}/${year}`
    }

    return (
        <div className="flex flex-row justify-between border-b-[1px] border-t-[1px] border-[#ffffff33] overflow-hidden 
            md:grid md:grid-cols-8 md:hover:bg-app-glass-white-60
        ">
            <div className="p-4 flex flex-col md:hidden md:hover:bg-app-glass-white-70">
                <span>{props.data.position}</span>
                <span className="text-app-yellow-50/70 text-sm">{props.data.company}</span>
            </div>

            <div className="p-4 hidden text-ellipsis whitespace-nowrap overflow-hidden
            md:block md:border-[#ffffff33] md::border-[2px] md:hover:bg-app-glass-white-70 box-border md:hover:border-app-glass-white-50">
                {props.data.position} {/* renders on larger screens */}
            </div> 

            <div className="p-4 hidden text-ellipsis whitespace-nowrap overflow-hidden 
           md:block md:border-[#ffffff33] md::border-[2px] md:hover:bg-app-glass-white-70 box-border md:hover:border-app-glass-white-50">
                {props.data.company}
            </div>

            <div className="p-4 md:text-ellipsis md:overflow-hidden 
            md:block md:whitespace-nowrap md:border-[#ffffff33] md::border-[2px] md:hover:bg-app-glass-white-70 box-border md:hover:border-app-glass-white-50
            ">
                {props.data.application_status}
            </div>

            <div className="p-4 hidden text-ellipsis whitespace-nowrap overflow-hidden
            md:block md:border-[#ffffff33] md::border-[2px] md:hover:bg-app-glass-white-70 box-border md:hover:border-app-glass-white-50">
                {props.data.max_salary}
            </div>

            <div className="p-4 hidden md:block text-ellipsis whitespace-nowrap overflow-hidden
            md:border-[#ffffff33] md::border-[2px] md:hover:bg-app-glass-white-70 box-border md:hover:border-app-glass-white-50">
                {props.data.location}
            </div>

            <div className="p-4 hidden text-ellipsis whitespace-nowrap overflow-hidden
           md:block md:border-[#ffffff33] md::border-[2px] md:hover:bg-app-glass-white-70 box-border md:hover:border-app-glass-white-50">
                {getDate(props.data.date_applied)}
            </div>

            <div className="p-4 hidden text-ellipsis whitespace-nowrap overflow-hidden
            md:block md:border-[#ffffff33] md::border-[2px] md:hover:bg-app-glass-white-70 box-border md:hover:border-app-glass-white-50">
                {getDate(props.data.date_saved)}
            </div>

            <div className="p-4 hidden text-ellipsis whitespace-nowrap overflow-hidden
            md:block md:border-[#ffffff33] md::border-[2px] md:hover:bg-app-glass-white-70 box-border md:hover:border-app-glass-white-50">
                {props.data.excitement}
            </div>
        </div>
    );
}