'use client'

import { useSession } from "next-auth/react"
import { useState } from "react"
import { useRouter} from "next/navigation"
import Form from "@components/Form"

const CreatePrompt = () => {
    const router = useRouter();

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

                console.log("Prompt sent to database successfully")
                // router.push('/')
            }
            console.log("Prompt not sent to database successfully");
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

export default CreatePrompt