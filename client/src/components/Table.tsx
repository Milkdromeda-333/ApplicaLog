import { JobType } from '../types/job.type';
import TableRow from './TableRow';

export default function Table(props: { data: JobType[] }) {

    return (
        <div className='
            md:overflow-auto bg-app-glass-white-60 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm
            md:h-[70vh] 
        '>
            {/* im using this div to add the gradient as bg and put the glass effect ovet it */}
            <div className='sticky top-0 bg-app-gradient'> 
            <div className="
                border-b-2 border-[#ffffff33] bg-app-glass-white-60
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
            </div>
            
            <div className="flex flex-col">
                {props.data.map(job => <TableRow key={job.id} data={job} />)}
            </div>
        </div>
    );
}