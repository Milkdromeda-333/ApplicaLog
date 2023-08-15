

export default function AuthForm() {

    return (
        <form className="flex flex-col justify-center gap-4 md:w-1/3">
            <div className='flex flex-col gap-2'>
                <label htmlFor="username">username:</label>
                <input type="text"
                    name="username"
                    className="p-2 bg-white/30  
                        focus:outline-none focus:bg-transparent focus:border-b-2 focus:border-white/30
                "/>
            </div>
            
            <div className='flex flex-col justify-center gap-2'>
                <label htmlFor="password">password:</label>
                <input type="password" name="password"
                    className="p-2 bg-white/30
                    focus:outline-none focus:bg-transparent focus:border-b-2 focus:border-white/30
                 "/>
            </div>

            <button className="border-2 p-2 border-app-yellow-50 
            hover:text-white hover:border-white
            ">Log in</button>

            <button className="text-left w-fit border-b-2 border-app-yellow-50 
                md:border-none md:hover:mb-[-2px] md:hover:border-b-2 md:hover:border-app-yellow-50
            ">Don't yet have an account? Sign up 😄</button>
        </form>
    );
}