import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { useEffect } from 'react'

function App() {

    let d1



    const [amount, setAmount] = useState(1)
    const [from, setFrom] = useState("usd")
    const [to, setTo] = useState("inr")
    const [convertedAmount, setConvertedAmount] = useState(82.87010926)

    const currencyInfo = useCurrencyInfo(from)

    const options = Object.keys(currencyInfo)

    const swap = () => {
        setFrom(to)
        setTo(from)
        setConvertedAmount(amount)
        setAmount(convertedAmount)
    }

    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to])     
        console.log(to)    
    }     // use it for converting purpose

    // const convert = useEffect(() => {
    //     setConvertedAmount(amount * currencyInfo[to] || 82.87010926)
    //     console.log(to)
    // }, [to]) // use it for direct purpose

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url("https://foodandroad.com/wp-content/uploads/2021/04/masala-chai-indian-drink-3.jpg"
                )`,
            }}
        >
            <div className="flex flex-col justify-end w-full">
                <div className="w-full max-w-md self-end mb-20 mr-20 border border-gray-100 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form className='flex flex-wrap flex-col'
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                selectCurr={from}
                                currencyOptions={options}
                                onAmountChange={(amount) => setAmount(amount)}
                                onCurrChange={(currency) => setFrom(currency)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                selectCurr={to}
                                currencyOptions={options}
                                amountDisable
                                // onCurrChange={(currency2) => setTo(currency2)}
                                onCurrChange={(currency) => setTo(currency)}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert
                            {/* {from.toUpperCase()} to
                             {to.toUpperCase()} */}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default App
