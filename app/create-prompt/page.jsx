'use client'

import { useSession } from "next-auth/react"
import { useState } from "react"
import { useRouter } from "next/router"
import Form from "@components/Form"

const CreatePost = () => {
    const [submitting, setSubmitting] = useState(false)
    const [post, setPost] = useState({
        prompt: "",
        tag: "",
    })
    const createPost = async (e) =>{
        e.preventDefault()
        setSubmitting(true)

        try{

        }catch(error){
            console.log(error)
        }
    }

  return (
    <Form
    type= "Create"
    post={post}
    setPost={setPost}
    submitting={submitting}
    handleSubmit={createPost}
    />
  )
}

export default CreatePost