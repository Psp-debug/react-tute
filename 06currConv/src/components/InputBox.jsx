import React, { useId } from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrChange,
    currencyOptions = [],
    selectCurr = "usd",
    currDisable = false,
    amountDisable = false,
    className = "",
    onSelect,
}) {
    const amountInputId = useId() // we dont use useid to gen keys in list

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                    {/* label will taken form app.jsx */}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} />
            </div>

            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurr}
                    disabled={currDisable}
                    onChange={(e) => onCurrChange && onCurrChange(e.target.value)}
                >
                    {/* remeber the key in loops in react in dom properties */}
                    {currencyOptions.map((currency) =>
                    (<option key={currency} value={currency}>
                        {currency}
                    </option>)
                    )}

                </select>
            </div>
        </div>
    );
}

export default InputBox;
