'use client'

import Link from 'next/link';
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { signIn, signOut, getProviders, useSession} from 'next-auth/react'

const Nav = () => {
  const isUserLoggedIn = true

  return (
    <nav className='w-full flex-between pt-3 mb-16'>
      <Link href='/' className='flex gap-2 flex-center'>
    <Image
    src = 'assets/images/logo.svg'
    width = {50}
    height={50}
    alt='Prompt Me Logo'
    className='object-contain'
    />
    <p className='logo_text'>PromptMe</p>
      </Link>
      
      {/* Desktop Navigation */}
      <div className='sm:flex hidden'>
        {isUserLoggedIn ? (
          <div className='gap-3 flex md:gap-5'>
            <Link href = '/create-prompt' classname = "black_btn">Create Post</Link>
          </div>
        ):(<> 
        
        </>)}
      </div>
    </nav>
  )
}

export default Nav