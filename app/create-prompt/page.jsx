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
                alert('Roll Number should be at least 3 digits long.')
                // router.push("/")
            }
        }catch(error){
            alert('Error')
            // console.log(error)
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
    handleSubmit={createPrompt}
    />
  )
}

export default CreatePrompt