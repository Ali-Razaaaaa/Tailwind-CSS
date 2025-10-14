import './App.css';
function App() {

  return (
  <div>
{
//Colors
}
  <ul className='bg-black text-white m-0 flex [&>*]:flex'>
  <li><a className='p-3 hover:bg-amber-200' href="#">Home</a></li>
  <li><a className='p-3 hover:bg-amber-200' href="#">News</a></li>
  <li><a  className='p-3 hover:bg-amber-200' href="#">Contact</a></li>
  <li><a className='p-3 hover:bg-amber-200'  href="#">About</a></li>
  </ul>

{
//Borders
}

  <p className='text-blue-50 border-green-500 border-1 '>Change My Color...</p>
  <p className='text-blue-100 border-green-500 border-1 '>Change My Color...</p>
  <p className='text-blue-200 border-green-500 border-1 '>Change My Color...</p>
  <p className='text-blue-300 border-green-500 border-1 '>Change My Color...</p>
  <p className='text-blue-400  border-green-500 border-1'>Change My Color...</p>
  <p className='text-blue-500 border-green-500 border-1 '>Change My Color...</p>
  <p className='text-blue-600 border-green-500 border-1 '>Change My Color...</p>
  <p className='text-blue-700 border-green-500 border-1 '>Change My Color...</p>
  <p className='text-blue-800 border-green-500 border-1 '>Change My Color...</p>
  <p className='text-blue-900 border-green-500 border-1 outline-5 outline-amber-950'>Change My Color...</p>
  <p className='text-blue-950 border-green-500 border-1'>Change My Color...</p>


{
//margin padding
}
  <h1 className='bg-red-950 text-amber-50 p-5 m-5'>Hello Guyss I am header</h1>
  <h1 className='bg-red-950 text-amber-50 px-5'>Hello Guyss I am header</h1>
  <h1 className='bg-red-950 text-amber-50 my-5'>Hello Guyss I am header</h1>
  <h1 className='bg-red-950 text-amber-50 mt-[100px]'>Hello Guyss I am headerr</h1>


    </div>
  );

  
}

export default App
