const Page2=()=>
{
    return (
        <>
    <h1>Hi I am page 2</h1>
    Learning Background Classes in Tailwind Css
    
    <div className="bg-red-200 bg-no-repeat h-screen bg-container bg-center bg-[url('assets/monkey.jpg')]" >
    
    </div>
    <div className="bg-gradient-to-t to-blue-300 from-red-400 size-96 flex items-center justify-center ">
        <p className=" text-red-700">HI I am gradient Color</p>
    </div>

    <div className="size-96 m-32 shadow-amber-500 bg-white shadow-sm flex items-center justify-center ">
        HI I am container with Shadows
    </div>

    <div className="size-96 m-32 shadow-amber-500 bg-white shadow-inner flex items-center justify-center ">
        HI I am container with inner Shadows
    </div>

  
    <h1>Tailwind Filters</h1>
    <h1>original</h1>
    <div className="bg-[url('assets/monkey.jpg')] h-screen bg-no-repeat"></div>
    <p>Blured</p>
    <div className="bg-[url('assets/monkey.jpg')] h-screen bg-no-repeat blur-xl"></div>
    <p>Bright</p>
    <div className="bg-[url('assets/monkey.jpg')] h-screen bg-no-repeat brightness-75"></div>
    <p>Contrast</p>
    <div className="bg-[url('assets/monkey.jpg')] h-screen bg-no-repeat contrast-75"></div>

    </>

    );
}


export default Page2;