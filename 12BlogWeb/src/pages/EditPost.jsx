import React, { useState, useEffect } from 'react'
import appwriteSevice from "../appwrite/config"
import { Container, PostCard, PostForm } from "../components"
import { useNavigate, useParams } from "react-router-dom"

function EditPosts() {
    const [post, setPosts] = useState([])
    const { slug } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteSevice.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                    console.log(post);
                }
            })
        } else {
            navigate("/")
        }
    }, [slug, navigate])

    return post ? (
        <div className="py-8">
            <Container>
                <PostForm post={post}/> 
            </Container>
        </div>
    ) : null
}

export default EditPosts