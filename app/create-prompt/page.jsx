'use client'

import { useSession } from "next-auth/react"
import { useState } from "react"
import { useRouter } from "next/router"
import Form from "@components/Form"

const CreatePost = () => {
    const [submitting, setSubmitting] = useState(false)
    const [post, setPost] = useState({
        post: "",
        tag: "",
    })
    const createPost = async (e) =>{

    }

  return (
    <Form/>
  )
}

export default CreatePost