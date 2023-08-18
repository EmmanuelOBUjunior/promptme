import React from 'react'
import {useState} from 'react'

const Feed = () => {
  u

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
    </section>
  )
}

export default Feed