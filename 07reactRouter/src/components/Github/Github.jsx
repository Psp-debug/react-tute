import React, { useEffect, useState } from 'react'
import { useLoaderData } from "react-router-dom"

function Github() {

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch("https://api.github.com/users/hiteshchoudhary")
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             setData(data)
    //         }
    //         )
    // }, [])

    const data = useLoaderData()

    return (
        <div className="flex justify-center text-2xl bg-gray-600 p-4 text-white">
            <img src={data.avatar_url} alt="Git Pic" className="h-28 w-28 mr-10" />
            Github Followers: {data.followers}
        </div>
    )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch("https://api.github.com/users/hiteshchoudhary")
    return response.json()
}