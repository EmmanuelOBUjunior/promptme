import React from 'react'

const Form = ({type, post, submitting, hanldesubmit, setPost}) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className='head_text text-left'>
        <span className="amber_gradient">{type} Post</span>
      </h1>
      <p className='desc text-left max-w-md'>Unleash creativity and explore limitless possibilities with by creating and sharing your masterpieces with a thriving community of creators. Inspiring prompts tailored to your interests.</p>

      <form className = "mt-10 glassmorphism w-full max-w-2xl flex-col" action="">


      </form>
    </section>
  )
}

export default Form