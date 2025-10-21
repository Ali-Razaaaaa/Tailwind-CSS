import monkey from './assets/monkey.jpg';
const Columns=()=>
{
    return (
        <>
        Studying Columns Here.
       

           <div className="columns-1 lg:columns-4 sm:columns-1 md:columns-2">

            <div>
               <img src={monkey}></img>
            </div>

            <div>
                <img src={monkey}></img>
            </div>

            <div>   
                <img src={monkey}></img>
            </div>

            <div> 
            <img src={monkey}></img>
            </div>

        </div>

        <div className='h-screen'>
            Flex Classes
            <div className='h-full bg-gray-500
            flex flex-wrap content-start'>
                <div className="bg-red-400 size-20"></div>
                <div className="bg-blue-400 size-20"></div>
                <div className="bg-yellow-400 size-20"></div>
                <div className="bg-green-400 size-20"></div>
                <div className="bg-red-400 size-20"></div>
                <div className="bg-blue-400 size-20"></div>
                <div className="bg-yellow-400 size-20"></div>
                <div className="bg-green-400 size-20"></div>
                <div className="bg-red-400 size-20"></div>
                <div className="bg-blue-400 size-20"></div>
                <div className="bg-yellow-400 size-20"></div>
                <div className="bg-green-400 size-20"></div>
                <div className="bg-red-400 size-20"></div>
                <div className="bg-blue-400 size-20"></div>
                <div className="bg-yellow-400 size-20"></div>
                <div className="bg-green-400 size-20"></div>
                 <div className="bg-red-400 size-20"></div>
                <div className="bg-blue-400 size-20"></div>
                <div className="bg-yellow-400 size-20"></div>
                <div className="bg-green-400 size-20"></div>
                <div className="bg-red-400 size-20"></div>
                <div className="bg-blue-400 size-20"></div>
                <div className="bg-yellow-400 size-20"></div>
                <div className="bg-green-400 size-20"></div>
            </div>
            </div>
            <h1>Grid Classes</h1>
            <div className='grid grid-cols-4 gap-x-4 gap-y-5'>

            <div className="bg-red-400  p-10 border"></div>
                <div className="bg-blue-400 p-10 border col-span-3 "></div>
                <div className="bg-yellow-400 p-10 border "></div>
                <div className="bg-green-400 p-10 border "></div>
                <div className="bg-red-400 p-10 border "></div>
                <div className="bg-blue-400 p-10 border"></div>
                <div className="bg-yellow-400 p-10 border"></div>
                <div className="bg-green-400 p-10 border"></div>
                <div className="bg-red-400 p-10 border"></div>
                <div className="bg-blue-400 p-10 border"></div>
                <div className="bg-yellow-400 p-10 border"></div>
                <div className="bg-green-400 p-10 border "></div>
            </div>
            <h1>Transition and transormations</h1>
            <div className="flex">
            <div>
                <button className='bg-blue-500 m-10 p-10 rounded text-white hover:bg-blue-900 
                transition duration-1000'>Button1</button>
            </div>
            
             <div>
                <button className='bg-blue-500 m-10 p-10 rounded text-white hover:bg-blue-900'>Button 2</button>
            </div>

             <div>
                <button className='bg-blue-500 m-10 p-10 rounded text-white hover:bg-blue-900 hover:bg-green-100 hover:scale-75'>Button 3</button>
            </div>
            <div>
                <button className='bg-red-500 hover:rotate-180 duration-5000 size-45 '>Rotate</button>
            </div>
            </div>
<h1>Animations</h1>
            <div className='flex justify-center items-center'>

            <div className='bg-red-600 rounded-full size-50 animate-bounce'>

            </div>

            </div>
             <hr className="border-gray-500 h-1 w-full my-3"  />
              <div className='flex justify-center items-center'>

            <div className='bg-red-600 w-32 h-2 animate-spin'>
                
            </div>

            </div>
             <hr className="border-gray-500 h-1 w-full my-3"  />
        </>
    );
}
export default Columns;