// import { useState } from "react";
import { useContext } from "react";
import { CurrentJobContext } from "../context/JobPage";
import { JobType } from "../types/job.type";
// import JobPage from "./JobPage";
import Stars from "./Stars";
import TableDate from "./TableDate";
import TableLocation from "./TableLocation";
import TableSalary from "./TableSalary";
import TableStatus from "./TableStatus";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


export default function TableRow(props: { data: JobType, toggleJobPage: ()=>void }) {

    const { setCurrentJobData } = useContext(CurrentJobContext);

    const openJobPage = () => {
        props.toggleJobPage()
        setCurrentJobData(props.data)
    }

    return (
        <div className="flex flex-row justify-between border-b-[1px] border-t-[1px] border-[#ffffff33] overflow-hidden 
            md:grid md:grid-cols-8 md:hover:bg-app-glass-white-60
        ">
            <div onClick={openJobPage}
                className="open-job flex flex-row items-stretch col-span-2 md:hover:bg-app-glass-white-70 box-border md:hover:border-app-glass-white-50">
                <div className="p-4 flex flex-col md:hidden">
                    <span>{props.data.position}</span>
                    <span className="text-app-yellow-50/70 text-sm">{props.data.company}</span>
                </div>

                <div className="p-4 w-1/2 hidden text-ellipsis whitespace-nowrap overflow-hidden box-border
                    md:block md:border-[#ffffff33]
                ">
                    {props.data.position} {/* renders on larger screens */}
                </div> 
            

                <div className="p-4  hidden text-ellipsis whitespace-nowrap overflow-hidden 
                    md:flex flex-row justify-between items-center md:border-[#ffffff33] md:w-1/2
                ">
                    {props.data.company}
                    <MdKeyboardDoubleArrowRight className="arrow text-xl" />
                </div>
            </div>

                <TableStatus status={props.data.application_status}  />
                <TableSalary salary={props.data.max_salary} />
                <TableLocation location={props.data.location} />
                <TableDate date={props.data.date_applied} />
                <TableDate date={props.data.date_saved} />
                {/* TODO: FIX STARS FUNCTIONALITY AND HOVERING */}
                <Stars excitement={props.data.excitement} />
        </div>
    );
}