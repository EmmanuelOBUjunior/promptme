'use client'

import { useSession } from "next-auth/react"
import { useState } from "react"
import { useRouter, useSearchParams} from "next/navigation"
import Form from "@components/Form"

const UpdatePrompt = () => {
    const router = useRouter();

    const {data: session} = useSession()
    const [submitting, setSubmitting] = useState(false)
    const [post, setPost] = useState({
        prompt: "",
        tag: "",
    })

    const createPrompt = async (e) =>{
        e.preventDefault()
        setSubmitting(true)

        try{
            const response = await fetch('/api/prompt/new',{
                method: 'POST',
                body: JSON.stringify({
                    prompt: post.prompt,
                    userId: session?.user.id,
                    tag: post.tag
                })
            })
            if(response.ok){
                router.push("/")
            }
        }catch(error){
            console.log(error)
        }finally{
            setSubmitting(false)
        }
    }

  return (
    <Form
    type= "Update"
    post={post}
    setPost={setPost}
    submitting={submitting}
    handleSubmit={createPrompt}
    />
  )
}

export default UpdatePrompt