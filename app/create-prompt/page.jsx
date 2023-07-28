'use client'

import { useSession } from "next-auth/react"
import { useState } from "react"
import { useRouter } from "next/router"
import Form from "@components/Form"

const CreatePost = () => {
    //const router = useRouter();
    const {data: session} = useSession()
    const [submitting, setSubmitting] = useState(false)
    const [post, setPost] = useState({
        prompt: "",
        tag: "",
    })
    const createPost = async (e) =>{
        e.preventDefault()
        setSubmitting(true)

        try{
            const response = await fetch('api/prompt/new',{
                method: 'POST',
                body: JSON.stringify({
                    prompt: post.prompt,
                    userId: session?.user.id,
                    tag: post.tag
                })
            })
            if(response.ok){
                router.push('/')
            }
        }catch(error){
            console.log(error)
        }finally{
            setSubmitting(false)
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