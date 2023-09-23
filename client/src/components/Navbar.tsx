import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        <nav className="
            bg-app-gradient bg-no-repeat bg-cover font-app-font
            h-16
            text-lg w-full  px-4
            border-b-[1px] border-app-yellow-50
            flex flex-row justify-between items-center
        ">
            <Link to="/" className="fontSize-h1 no-underline">Job Journey</Link>

            <Link to='/demo' className="no-underline">demo</Link>
        </nav>
    )
}