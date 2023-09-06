import { useContext } from "react";
import { CurrentJobContext } from "../context/JobPage";
import JobPage from "../components/JobPage";
import Table from "../components/Table";
import MOCK_DATA from '../MOCK_DATA.json';
import { JobType } from "../types/job.type";

export default function Demo() {
    const { currentJobData, toggleJobPage, isPageOpen } = useContext(CurrentJobContext);

    return (
        <main className="md:m-4">
            <JobPage job={currentJobData} toggleJobPage={toggleJobPage} isJobPageOpen={isPageOpen} />
            <Table data={MOCK_DATA as JobType[]} toggleJobPage={toggleJobPage}  />
        </main>
    );
}