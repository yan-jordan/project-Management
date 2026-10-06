export default function Login(){

    


    
    return(
        <div className="w-100 h-100 justify-center items-center bg-amber-700">       
        <div>
            Login
        </div>
        <div>
            <h2>email</h2>
            <input type="text" className="border-4 w-80 mb-4"/>
        </div>
        <div>
            <h2>password</h2>
            <input type="password" className="border-4 w-80" />
        </div>
        <button className="w-50 bg-green-500 border-2 mt-10">
            submit
        </button>
    </div>
    )
}