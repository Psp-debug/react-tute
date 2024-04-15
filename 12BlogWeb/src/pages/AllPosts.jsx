import React, { useState, useEffect } from 'react'
import { Container, PostCard } from "../components/index"
import appwriteSevice from "../appwrite/config"
import {useSelector} from "react-redux"
import { Link } from "react-router-dom"

function AllPosts() {
  const [posts, setPosts] = useState([])
  const [state, setState] = useState(false)
  const status = useSelector(state => state.status)
  useEffect(() => {
    if(status) setState(true) 
    else setState(false)
    appwriteSevice.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })
  }, [])

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              {/* Link only works upon the text value rather having h1 tag that creates a box structure */}
              <Link to={"/login"} className="text-2xl font-bold hover:text-gray-500"
              >
                {state ? "Loading..." : "Login to read posts"}
              </Link>
            </div>
          </div>
        </Container>
      </div>
    )
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPosts