'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import {useRouter, usePathname} from 'next/navigation'
import { useSession } from 'next-auth/react'

import Profile from '@components/Profile'

const MyProfile = () => {
    const {data: session} = useSession()
    const [posts, setPosts] = useState([])
    const router = useRouter()

    useEffect(() => {
        const fetchPosts = async() =>{
            const response = await fetch(`/api/users/${session?.user.id}/posts`)
            const data = await response.json()

            setPosts(data)
        }

        if(session?.user.id) fetchPosts();
    }, [])


    const handleEdit = (post) => {
      router.push(`/update-prompt?id=${post._id}`)

    }

    const handleDelete = async () => {
      const hasConfirmed = confirm("Are you sure you want to delete this post?")

      if(hasConfirmed){
        try {
          await fetch(`api/prompt/${posts._id}`.toString(), {
            method: 'DELETE'
          })
          
          const filteredPost = posts.filter(p => p.id !== post._id)
          setPosts(filteredPost)

        } catch (error) {
          console.log(error)
        }
      }
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