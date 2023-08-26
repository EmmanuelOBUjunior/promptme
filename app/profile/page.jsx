'use client'
import React from 'react'
import { useState } from 'react'
import { useSession } from 'next-auth/react'

import Profile from '@components/Profile'

const MyProfile = () => {
    const handleEdit = () => {

    }

    const handleDelete = async () => {

    }

  return (
    <Profile
    name='Mine'
    desc ='Welcome to your personalized profile.'
    handleDelete = {handleDelete} />
    handleEdit = {handleEdit}
    data = {[]}
    />
  )
}

export default MyProfile