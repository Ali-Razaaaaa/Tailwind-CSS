import './App.css';
import Page2 from './Page2.jsx';
import Page3 from './Page3.jsx';
import MediaQuery from './MediaQuery.jsx';
import Columns from './Columns.jsx';
function App() {
  return (
    <>
       <div className="h-full bg-pink-500">

        {/* Colors */}
        <ul className="bg-black text-white m-0 flex [&>*]:flex">
          <li><a className="p-3 hover:bg-amber-200" href="#">Home</a></li>
          <li><a className="p-3 hover:bg-amber-200" href="#">News</a></li>
          <li><a className="p-3 hover:bg-amber-200" href="#">Contact</a></li>
          <li><a className="p-3 hover:bg-amber-200" href="#">About</a></li>
        </ul>

        {/* Borders */}
        <p className="text-blue-50 border border-green-500">Change My Color...</p>
        <p className="text-blue-100 border border-green-500">Change My Color...</p>
        <p className="text-blue-200 border border-green-500">Change My Color...</p>
        <p className="text-blue-300 border border-green-500">Change My Color...</p>
        <p className="text-blue-400 border border-green-500">Change My Color...</p>
        <p className="text-blue-500 border border-green-500">Change My Color...</p>
        <p className="text-blue-600 border border-green-500">Change My Color...</p>
        <p className="text-blue-700 border border-green-500">Change My Color...</p>
        <p className="text-blue-800 border border-green-500">Change My Color...</p>
        <p className="text-blue-900 border border-green-500 outline outline-amber-950">Change My Color...</p>
        <p className="text-blue-950 border border-green-500">Change My Color...</p>

        {/* Margin & Padding */}
        <h1 className="bg-red-950 text-amber-50 p-5 m-5">Hello Guyss I am header</h1>
        <h1 className="bg-red-950 text-amber-50 px-5">Hello Guyss I am header</h1>
        <h1 className="bg-red-950 text-amber-50 my-5">Hello Guyss I am header</h1>
        <h1 className="bg-red-950 text-amber-50 mt-[100px]">Hello Guyss I am headerr</h1>

        {/* Width / Max Width */}
        <div className="bg-pink-400">HI bhaiya I am the div</div>
        <div className="bg-pink-400">HI bhaiya I am the div</div>

        {/* Height / Max Height */}
        <div className="mt-10"></div>
        <div className="bg-red-500">HI bhaiya I am the div</div>
        <div className="bg-red-500">HI bhaiya I am the div</div>

        {/*Sizes*/} {/*when we require same size and width we use size*/}
        <div className='flex'>
        <div className='w-50 h-50 bg-amber-300'>
          I am Height and width 50
        </div>

        <div className='size-50 bg-green-400'>
          I am size 50 see we both are same.
        </div>
        </div>
        
        {/*Position*/}
         <div className=' relative size-96 bg-pink-500'>

         <div className='bg-purple-500 size-20 absolute bottom-0 right-0'>
          Position
         </div>

          <div className='bg-green-500 size-20 absolute top-0 right-0'>
          Position
         </div>

         <div className='bg-blue-950 size-20 absolute bottom-0 left-0'>
          Position
         </div>

         <div className='bg-pink-950 size-20 absolute '>
          Position
         </div>
         <div className='inset-24 absolute bg-green-600 '>I am insert ok.</div>
        </div>


<div className="bg-blue-950 text-white fixed top-0 left-0 p-4 z-50">
  Hi I am fixed (z-50)
</div>

 <div>
  
 </div>

<div class="bg-gray-200 p-5">
 

  <div class="container bg-white mx-auto p-10">

    <h1 class="text-2xl font-bold">I am inside a container</h1>
    <p>
      Container page ke beech me content ko rakh kar uski width limit karta hai.
      Screen chhoti hogi to width bhi adjust ho jayegi (responsive).
    </p>
  </div>

</div>
</div>

{/*BackGround Classes*/}

<Page2/>
<Page3/>
<MediaQuery/>
<Columns/>
</>

  );
}

export default App;
