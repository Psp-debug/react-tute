import { useState } from 'react'

function App() {
  
  const [color, setColor] = useState('olive')

  return (
    <>
     <div className='w-screen h-screen duration-200' 
     style={{backgroundColor: color}}
     >
      <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2'>
        <div className='flex felx-wrap justify-center bg-white shadow-lg gap-3 px-1 py-1 rounded-3xl'>
          <button onClick={() => setColor('blue')} className=' rounded-full' style={{color: 'black', backgroundColor: 'blue'}}>Blue</button>
          <button onClick={() => setColor('red')} className=' rounded-full' style={{color: 'black', backgroundColor: 'red'}}>Red</button>
          <button onClick={() => setColor('green')} className=' rounded-full' style={{color: 'black', backgroundColor: 'green'}}>Green</button>
          <button onClick={() => setColor('yellow')} className=' rounded-full' style={{color: 'black', backgroundColor: 'yellow'}}>Yellow</button>
          <button onClick={() => setColor('pink')} className=' rounded-full' style={{color: 'black', backgroundColor: 'pink'}}>Pink</button>
        </div>
      </div>
     </div>
    </>   
  )
}

export default App
