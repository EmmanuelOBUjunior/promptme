'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'

import Profile from '@components/Profile'

const MyProfile = () => {
    const {data: session} = useSession()
    const [post, setPost] = useState([])

    useEffect(() => {
        const fetchPosts = async() =>{
            const response = await fetch(`/api/users/${session?.user.id}/posts`)
            const data = await response.json()

            setPost(data)
        }
    })

    const handleEdit = () => {

    }

    const handleDelete = async () => {

    }

  return (
    <Profile
    name='Mine'
    desc ='Welcome to your personalized profile.'
    handleDelete = {handleDelete}
    handleEdit = {handleEdit}
    data = {[]}
    />
  )
}

export default MyProfile