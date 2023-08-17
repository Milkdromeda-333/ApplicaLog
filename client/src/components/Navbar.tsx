import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        <nav className="
            bg-app-gradient
            text-lg w-full px-4 py-2 md:px-8 md:py-4
            border-b-[1px] border-app-yellow-50
            flex flex-row justify-between items-center
        ">
            <Link to="/" className="text-2xl md:text-4xl">Job Journey</Link>

            <Link to='/demo'>demo</Link>
        </nav>
    )
}