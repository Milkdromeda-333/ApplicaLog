import { JobType } from '../types/job.type';
import TableRow from './TableRow';
/* 
position: string;
    applicationStatus: ApplicationStatuses;
    company: string;
    max_salary: number;
    location: string;
    date_saved: Date;
    date_applied: Date;
    excitement: 0 | 1 | 2 | 3 | 4 | 5;
    notes: string;
    url: string;
*/

export default function Table(props: { data: JobType[] }) {

    return (
        <div className='p-4
        bg-app-glass-white-60 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm
        '>
            <div className="
                border-b-2 border-[#ffffff33]
                grid grid-cols-2 justify-items-center
                pt-4 md:grid-cols-7 md:grid-rows-1
            ">
                <span className="">Position</span>
                <span className="hidden md:inline-block">Company</span>
                <span className="">Status</span>
                <span className="hidden md:inline-block">Max Salary</span>
                <span className="hidden md:inline-block">Location</span>
                <span className="hidden md:inline-block">Date Applied</span>
                <span className="hidden md:inline-block">Excitement</span>
            </div>
            
            <div className="flex flex-col">
                {props.data.map(job => <TableRow key={job.id} data={job} />)}
            </div>
        </div>
    );
}