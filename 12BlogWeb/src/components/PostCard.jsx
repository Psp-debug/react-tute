import React from 'react'
import appwriteSevice from "../appwrite/config"
import { Link } from "react-router-dom"
import parse from "html-react-parser"

//in home i pass whole post object so in this postcard function i have to define what i wanting 
//from that particular post object

function Postcard({ $id, title, content, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
        <img src={featuredImage} alt={title} />
          {/* content inside object are in p tag so we have to retrive it by parse of html-react-parser*/}
          {/* {parse(content)} */}
        </div>
        <h2
        className="text-xl font-bold"
        >{title}</h2>
      </div>
    </Link>
  )
}

export default Postcard