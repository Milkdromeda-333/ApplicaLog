import Table from "../components/Table";
import MOCK_DATA from '../MOCK_DATA.json';
import { JobType } from "../types/job.type";

export default function Demo() {

    return (
        <main className="md:m-4">
            <Table data={MOCK_DATA as JobType[]} />
        </main>
    );
}