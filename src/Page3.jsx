const Page3=()=>
{
    return (
        <>
            <div>
                <h1>
                    InterActivity
                </h1>
            <p>Hover</p>
            <button className="bg-blue-500 rounded-md p-2 m-4 text-white hover:bg-blue-400 ">Login</button>
            <p>Focus-Click</p>
            <button className="bg-blue-500 rounded-md p-2 m-4 text-white focus:bg-red-400 ">Login</button>
            <p>Active</p>
            <button className="bg-blue-500 rounded-md p-2 m-4 text-white active:bg-red-800 ">Login</button>
            
            </div>
        </>
    );
}
export default Page3;