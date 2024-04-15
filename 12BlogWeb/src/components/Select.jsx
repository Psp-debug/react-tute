import React, { forwardRef, useId } from 'react'

function Select({
    label,
    className = "",
    options,
    ...props
}, ref) {
    const id = useId()
    return (
        <div className="w-full">
            {label && <label className="" htmlFor="id"> 
            </label>}
            <select {...props} 
            className={`${className}`} 
            id={id} 
            ref={ref}
            >       
            {options?.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
                //options is array format
            ))}         
            </select>
        </div>
    )
}

export default forwardRef(Select)