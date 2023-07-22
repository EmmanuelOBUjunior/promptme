'use client'

import Link from 'next/link';
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { signIn, signOut, getProviders, useSession} from 'next-auth/react'

const Nav = () => {
  return (
    <nav className='w-full flex-between pt-3 mb-16'>
    <Image
    src = 'assets/images/logo.svg'
    />
    </nav>
  )
}

export default Nav