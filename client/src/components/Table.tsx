import { useState } from 'react';
import { JobType } from '../types/job.type';
import { orderRows } from '../utils/tableFilters';
import TableRow from './TableRow';
import { IoIosArrowDropupCircle, IoIosArrowDropdownCircle } from "react-icons/io";

export default function Table(props: { data: JobType[], toggleJobPage: ()=>void }) {

    const [columnSorted, setColumnSorted] = useState<{ sortedColumn: keyof JobType | null, order: "ASC"|"DESC" }>({sortedColumn: null, order: "ASC"});
    const [jobs, setJobs] = useState<JobType[]>(props.data);

    const orderRowsByProp = (property: keyof JobType):void => {
        const direction = columnSorted.order === "ASC" ? "DESC" : "ASC";
        const newArr = orderRows(jobs, direction, property);
        setJobs(newArr);
        setColumnSorted({ sortedColumn: property, order: direction });
    }

    return (
        <div className='
            bg-app-glass-white-60 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm
            md:h-[90vh] md:overflow-auto 
        '>
            {/* im using this div to add the gradient as bg and put the glass effect ovet it */}
            <div className='sticky top-0 bg-app-gradient'>
                <div className="
                bg-app-glass-white-60
                grid grid-cols-2 justify-items-center
                md:grid-cols-8 md:grid-rows-1
                ">
                    <span onClick={() => orderRowsByProp("position")} className={`
                        p-2 w-full text-center cursor-pointer flex-row-center gap-1
                        ${columnSorted.sortedColumn === "position" && "bg-app-glass-white-70" }
                      md:hover:bg-app-glass-white-60
                    `}> Position
                        {columnSorted.sortedColumn === "position" ?
                            columnSorted.order === "ASC" ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />
                        : ""}
                    </span>

                    <span onClick={() => orderRowsByProp("company")} className={`
                        p-2 w-full text-center hidden cursor-pointer flex-row-center gap-1
                        ${columnSorted.sortedColumn === "company" && "bg-app-glass-white-70" }
                        md:flex md:hover:bg-app-glass-white-60
                    `}> Company
                        {columnSorted.sortedColumn === "company" ?
                            columnSorted.order === "ASC" ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />
                            : ""}
                    </span>

                    <span onClick={() => orderRowsByProp("application_status")} className={`
                        p-2 w-full text-center cursor-pointer flex-row-center gap-1
                        ${columnSorted.sortedColumn === "application_status" && "bg-app-glass-white-70" }
                        : ""}
                        md:hover:bg-app-glass-white-60
                    `}> Status
                        {columnSorted.sortedColumn === "application_status" ?
                            columnSorted.order === "ASC" ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />
                            : ""}
                    </span>
                    {/* TODO MAKE THIS SALARY RANGE */}
                    <span onClick={() => orderRowsByProp("max_salary")} className={`
                        p-2 w-full text-center hidden cursor-pointer flex-row-center gap-1
                        ${columnSorted.sortedColumn === "max_salary" && "bg-app-glass-white-70" }
                        md:flex md:hover:bg-app-glass-white-60
                    `}> Max Salary
                        {columnSorted.sortedColumn === "max_salary" ?
                            columnSorted.order === "ASC" ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />
                            : ""
                        }
                    </span>

                    <span onClick={() => orderRowsByProp("location")} className={`
                        p-2 w-full text-center hidden cursor-pointer flex-row-center gap-1
                        ${columnSorted.sortedColumn === "location" && "bg-app-glass-white-70" }
                        md:flex md:hover:bg-app-glass-white-60
                    `}> Location
                        {columnSorted.sortedColumn === "location" ?
                            columnSorted.order === "ASC" ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />
                            : ""}
                    </span>

                    <span onClick={() => orderRowsByProp("date_applied")}
                        className={`p-2 w-full text-center hidden cursor-pointer flex-row-center gap-1 
                        ${columnSorted.sortedColumn === "date_applied" && "bg-app-glass-white-70" }
                        md:flex md:hover:bg-app-glass-white-60
                    `}> Date Applied
                        {columnSorted.sortedColumn === "date_applied" ?
                            columnSorted.order === "ASC" ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />
                            : ""}
                    </span>

                    <span onClick={() => orderRowsByProp("date_saved")} className={`
                        p-2 w-full text-center hidden cursor-pointer flex-row-center gap-1
                        ${columnSorted.sortedColumn === "date_saved" && "bg-app-glass-white-70" }
                        md:flex md:hover:bg-app-glass-white-60
                    `}> Date Saved
                        {columnSorted.sortedColumn === "date_saved" ?
                            columnSorted.order === "ASC" ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />
                            : ""}
                    </span>

                    <span onClick={() => orderRowsByProp("excitement")} className={`
                        p-2 w-full text-center hidden cursor-pointer flex-row-center gap-1
                        ${columnSorted.sortedColumn === "excitement" && "bg-app-glass-white-70" }
                        md:flex md:hover:bg-app-glass-white-60
                    `}> Excitement
                        {columnSorted.sortedColumn === "excitement" ?
                            columnSorted.order === "ASC" ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />
                            : ""}
                    </span>
                </div>
            </div>

            <div className="flex flex-col">
                {jobs.map(job => <TableRow key={job.id} data={job} toggleJobPage={props.toggleJobPage} />)}
            </div>
        </div>
    );
}