import React from 'react'

const Feed = () => {
  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input 
        type="text"
        className='search_input peer'
        placeholder='Search for a tag or username or author'
        />
      </form>
    </section>
  )
}

export default Feed