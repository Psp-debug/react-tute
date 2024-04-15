import React, { useState, useCallback, useEffect } from 'react'
import { useForm } from "react-hook-form"
import { Button, Input, Select, RTE } from "../index"
import appwriteSevice from "../../appwrite/config"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import authService from "../../appwrite/auth"

function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, getValues, control } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.slug || "",
      content: post?.content || "",
      status: post?.status || "active"
    }
  })
  const navigate = useNavigate()
  const [image, setImage] = useState("")
  const [base64, setBase64] = useState("")
  const reader = new FileReader()
  const userData = useSelector(state => state.userData);

  useEffect(() => {
    console.log(userData);
  }, [])

  const submit = async (data) => {
    // if (post) {
    //   const file = data.image[0] ? appwriteSevice.uploadFile(data.image[0]) : null

    //   if (file) {
    //     appwriteSevice.deleteFile(post.featuredImage)
    //   }

    //   const dbPost = await appwriteSevice.updatePost(
    //     post.$id, {
    //     ...data,
    //     featuredImage: file ? file.$id : undefined,
    //   })

    //   if (dbPost) {
    //     navigate(`/post/${dbPost.$id}`)
    //   }
    // }  
    //  else {
    // const file = await appwriteSevice.uploadFile(data.image[0])

    // if (file) {
    // const fileId = file.$id
    // data.featuredImage = fileId)

    console.log(data);

    // reader.readAsDataURL(data.image[0]) //for data we use image[0]
    // reader.onload = () => {
    //   setBase64(reader.result)
    // }
    // reader.onerror = () => {
    //   console.log("Error: ", error);
    // }

    const dbPost = await appwriteSevice.createPost({
      ...data,
      userId: userData.$id,
      featuredImage: base64,
    })
    if (dbPost) {
      console.log(dbPost)
      navigate(`/post/${dbPost.$id}`)
    }
  }


  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
    return ""
  }, [])

  useEffect(() => {
    const subscription = watch((value, name) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title, { shouldValidate: true }))
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [watch, slugTransform, setValue])

  const convertToBase64 = (e) => {
    console.log(e);
    reader.readAsDataURL(e.target.files[0]) //for e handling we use files[0]
    reader.onload = () => {
      console.log(reader.result);
      console.log(base64);
      setImage(reader.result)
      setBase64(reader.result)
    }
    reader.onerror = () => {
      console.log("Error: ", error);
    }
  }



  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
          }}
        />
        <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", {
            required: !post,
            onChange: convertToBase64
          })}
        />
        {image == "" || image == null ? "" : <img width={100} height={100} src={image} />}

        {post && (
          <div className="w-full mb-4">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />

        <h2 className="mb-1">Submit:</h2>
        <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  )
}

export default PostForm