import { useState } from 'react'
import Header from './components/Header/Header'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <BrowserRouter>
        <Header />
        <Home />
        <Footer />
      </BrowserRouter> */}
    </>
  )
}

export default App
