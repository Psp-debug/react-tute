import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [allowedNum, setAllowedNum] = useState(false)
  const [allowedChar, setAllowedChar] = useState(false)
  const [password, setPassword] = useState('')

  const passwordGen = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (allowedNum) str += "0123456789"
    if (allowedChar) str += "!@$%^&*-_+=(){}~`"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
    console.log(pass);

  }, [length, allowedNum, allowedChar, setPassword])

  const passwordRef = useRef(null)

  const copyPassClipB = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 10) //? for value is null
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {passwordGen()}, [length, allowedNum, allowedChar, passwordGen])

  return (
    <>
    <div className='flex flex-col my-10 justify-center shadow-md rounded-lg px-4 py-3  text-orange-400 bg-gray-700'>
      <h1 className='flex text-white justify-center my-6 text-2xl'>Password Generator</h1>
      <div className='flex overflow-hidden mb-4'>
        <input
        type='text'
        value={password}
        placeholder='Password'
        className='outline-none w-full py-1 px-3 rounded-md text-xl bg-white'
        // readOnly 
        ref={passwordRef}
        />
        <button className='outline-none rounded-md text-xl shrink-0'
        onClick={copyPassClipB}
        >copy</button>
      </div>
      <div className='flex text-sm justify-center gap-x-3'>
        <div className='flex items-center gap-x-2 text-xl'>
          <input 
          type="range" 
          min={8}
          max={20}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1 text-xl'>
          <input type="checkbox" 
          defaultChecked={allowedNum}
          id='numberInput' 
          onChange={(e) => setAllowedNum((prev) => !prev)}
          />
          <label>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1 text-xl'>
          <input type="checkbox" 
          defaultChecked={allowedChar}
          id='numberChar'
          onChange={(e) => setAllowedChar((prev) => !prev)}
          />
          <label>Charecters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
