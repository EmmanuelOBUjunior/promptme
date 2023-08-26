'use client'

import {useState} from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

const PromptCard = ({post, handleTagClick, handleEdit, handleDelete}) => {
  const [copied, setCopied] = useState('')


  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'>
          <Image
          src={post.creator.image}
          alt='user_image'
          width={40}
          height={40}
          className='rounded-full object-contain'
          />
        </div>
         <div>
          <h3 className='font-satoshi font-semibold text-gray-900'>
            {post.creator.name}
          </h3>
          <p className='font-inter text-sm text-gray-500'>
            {post.creator.email}
          </p>
         </div>
      </div>
      <div className="copy_btn"
      onClick={()=>{}}
      >
        <Image
        src={copied === post.prompt ? "assets/icons/tick.svg" : "assets/icons/copy.svg"}
        width={12}
        height={12}
        />
      </div>
    </div>
  )
}

export default PromptCard