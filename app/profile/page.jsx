'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import {useRouter, usePathname} from 'next/navigation'
import { useSession } from 'next-auth/react'

import Profile from '@components/Profile'

const MyProfile = () => {
    const {data: session} = useSession()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async() =>{
            const response = await fetch(`/api/users/${session?.user.id}/posts`)
            const data = await response.json()

            setPosts(data)
        }

        if(session?.user.id) fetchPosts();
    }, [])


    const handleEdit = () => {

    }

    const handleDelete = async () => {

    }

  return (
    <Profile
        name="My"
        desc ="Welcome to your personalized profile."
        handleDelete = {handleDelete}
        handleEdit = {handleEdit}
        data = {posts}
    />
  )
}

export default MyProfile