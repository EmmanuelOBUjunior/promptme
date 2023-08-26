'use client'
import React from 'react'
import { useState } from 'react'
import { useSession } from 'next-auth/react'

import Profile from '@components/Profile'

const Profile = () => {
  return (
    <Profile
    name='Mine'
    desc ='Welcome to your personalized profile.'
    />
  )
}

export default Profile