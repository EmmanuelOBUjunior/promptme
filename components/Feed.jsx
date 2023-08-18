'use client'

import React from 'react'
import {useState, useEffect} from 'react'

import PostCard from './PostCard'
import { disconnect } from 'mongoose'


const PromptCardList = () =>{
  return(
    <div></div>
  )
}


const Feed = () => {
  const [searchText, setSearchText] = useState("")

  const handleSearchChange = (e) => {

  }

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