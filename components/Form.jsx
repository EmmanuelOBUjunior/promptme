import React from 'react'

const Form = ({type, post, submitting, hanldesubmit, setPost}) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className='head-text text-left'>
        <span className="blue_gradient">{type} Post</span>
      </h1>
    </section>
  )
}

export default Form