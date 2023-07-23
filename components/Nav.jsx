'use client'

import Link from 'next/link';
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { signIn, signOut, getProviders, useSession} from 'next-auth/react'

const Nav = () => {
  const {data:session} = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false)

  useEffect(() => {
  const setUpProviders = async () => {
    const response = await getProviders();
  
    setProviders(response);
  }
  setUpProviders();
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
        {session?.user ? (
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
      <div className='flex sm:hidden relative'>
        {session?.user ?(
          <div>
            <Image 
             src = 'assets/images/profile.svg'
             width={40}
             height={40}
             alt= 'Profile'
             className='rounded-full'
             onClick={()=> setToggleDropdown((prev)=> !prev)}
            />
            {toggleDropdown && (
              <div className='dropdown'>
                <Link href='/profile'
                className='dropdown_link'
                onClick={() => setToggleDropdown(false)}>
                  My Profile
                </Link>

                <Link href='/create-prompt'
                className='dropdown_link'
                onClick={() => setToggleDropdown(false)}>
                  Create Post
                </Link>

                <button
                type = 'button'
                className='mt-2 w-full black_btn'
                onClick={() => {setToggleDropdown(false); signOut()}}
                >
                  Sign Out
                </button>
              </div>
            )}
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
         </>)}
      </div>
    </nav>
  )
}

export default Nav