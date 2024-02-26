import React, { useImperativeHandle } from 'react'
import { useParams } from "react-router-dom"

function User() {
    const {userid} = useParams()

    return (
        <>
            <div className="flex justify-center p-4 text-xl">
                User: {userid}
            </div>
        </>



    )
}

export default User