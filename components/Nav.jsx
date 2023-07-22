'use client'

import Link from 'next/link';
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { signIn, signOut, getProviders, useSession} from 'next-auth/react'

const Nav = () => {
  const isUserLoggedIn = true

  const [providers, setProviders] = useState(null);

  useEffect(() => {
  const setProviders = async () => {
    const response = await getProviders();
  
    setProviders(response);
  }
  setProviders();
}, [])

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
            <Link href = '/create-prompt' className = "black_btn">Create Post</Link>

            <button type="button" className="outline_btn" onClick={signOut}>Sign Out</button>

            <Image 
             src = 'assets/images/profile.svg'
             width={40}
             height={40}
             alt= 'Profile'
             className='rounded-full'
            />
          </div>
        ):(
          <>
          {
            providers && Object.values(providers).map((provider) =>(
              <button
              type='button'
              key =  {provider.name}
              className='black_btn'
              onClick={() => signIn(provider.id)}
              >
                Sign In
              </button>
            ))
          }
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className='flex sm:hidden'>
        {isUserLoggedIn ?(
          <div>
            <Image 
             src = 'assets/images/profile.svg'
             width={40}
             height={40}
             alt= 'Profile'
             className='rounded-full'
             onClick={()=>{}}
            />
          </div>
        ):(<> </>)}
      </div>

    </nav>
  )
}

export default Nav