'use client'

import React from 'react'
import {useState, useEffect} from 'react'

import PostCard from './PostCard'
import { disconnect } from 'mongoose'


const PromptCardList = () =>{
  return(
    <div className='mt-16 prompt_layout'>

    </div>
  )
}


const Feed = () => {
  const [searchText, setSearchText] = useState("")

  const handleSearchChange = (e) => {

  }

  useEffect(()=>{
    const fetchPost = async () =>{
      const response = await fetch('/api/prompt')
      const data = await response.json()
    }
  }, [])

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input 
        type="text"
        value = {searchText}
        onChange={handleSearchChange}
        className='search_input peer'
        placeholder='Search for a tag or username or author'
        />
      </form>

      <PromptCardList
      data ={[]}
      handleTagClick = {() => {}}
      />
    </section>
  )
}

export default Feed