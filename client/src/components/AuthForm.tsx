

export default function AuthForm() {

    return (
        <form className="flex flex-col justify-center gap-4 md:w-1/3">
            <div className='flex flex-col gap-2'>
                <label htmlFor="email">email:</label>
                <input type="text" name="email" placeholder="We won't email you!" className="
                p-2 bg-white/30 focus:outline-none 
                placeholder:text-white/50 focus:bg-transparent focus:border-b-2 focus:border-white/30
                "/>
            </div>
            
            <div className='flex flex-col justify-center gap-2'>
                <label htmlFor="password">password:</label>
                <input type="password" name="password" placeholder="It's our secret" className="p-2 bg-white/30 
                placeholder:text-white/50 focus:outline-none focus:bg-transparent focus:border-b-2 focus:border-white/30
                 "/>
            </div>

            <button className="border-2 p-2 border-app-yellow-50 active:bg-app-yellow-50 active:text-black
            hover:bg-app-yellow-50 hover:text-black 
            ">Log in</button>

            <button className="text-left w-fit border-b-2 border-app-yellow-50 
                active:border-app-yellow-60 
                md:border-transparent md:active:border-app-yellow-60 md:hover:border-b-2 md:hover:border-app-yellow-50
            ">Don't yet have an account? Sign up 😄</button>
        </form>
    );
}