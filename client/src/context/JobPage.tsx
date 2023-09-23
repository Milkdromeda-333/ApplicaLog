import { createContext, useState } from 'react';
import type { JobType } from '../types/job.type';


interface context {
    currentJobData: JobType | null,
    setCurrentJobData: React.Dispatch<React.SetStateAction<JobType | null>>
    toggleJobPage: () => void,
    isPageOpen: boolean
}

const CurrentJobContext = createContext<context>({
    currentJobData: null,
    setCurrentJobData: () => {},
    toggleJobPage: ()=> {},
    isPageOpen: false
});

function JobPageContext({children}: {children: React.ReactNode}) {
    const [currentJobData, setCurrentJobData] = useState<JobType | null>(null);
    const [isPageOpen, setisPageOpen] = useState<boolean>(false);
    const toggleJobPage = () => setisPageOpen(prev => !prev);


    return (
        <CurrentJobContext.Provider value={{
            currentJobData,
            setCurrentJobData,
            toggleJobPage,
            isPageOpen
        }}>
            {children}
        </CurrentJobContext.Provider>
    );
}

export {JobPageContext, CurrentJobContext}