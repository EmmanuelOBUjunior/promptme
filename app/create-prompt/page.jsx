'use client'

import { useSession } from "next-auth/react"
import { useState } from "react"
import { useRouter } from "next/router"
import Form from "@components/Form"

const CreatePost = () => {
    const [submitting, setsubmitting] = useState(false)

  return (
    <Form/>
  )
}

export default CreatePost