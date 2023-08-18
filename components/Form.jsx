import Link from 'next/link'

const Form = ({type, post, submitting, hanldeSubmit, setPost}) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className='head_text text-left'>
        <span className="amber_gradient">{type} Post</span>
      </h1>
      <p className='desc text-left max-w-md'>Unleash creativity and explore limitless possibilities with by creating and sharing your masterpieces with a thriving community of creators. Inspiring prompts tailored to your interests.</p>

      <form 
      onSubmit={hanldeSubmit}
      className = "mt-10 glassmorphism w-full max-w-2xl flex-col gap-7 flex" 
      >
      <label>
        <span className="font-satoshi font-semibold text-base text-gray-700">
          Your AI Prompt
        </span>
      
      <textarea 
      value = {post.prompt} 
      onChange={ (e) => setPost({...post, prompt: e.target.value})}
      required
      placeholder='Write your AI Prompt here...'
      className='form_textarea'
      />
      </label>

      <label>
        <span className="font-satoshi font-semibold text-base text-gray-700">
         Tag {` `}
        <span className="font_normal">(#idea, #product, #devlopment)
        </span>
        </span>
      <input 
      required
      value = {post.tag} 
      onChange={ (e) => setPost({...post, tag: e.target.value})}
      placeholder='#tag...'
      className='form_input'
      />
      </label>
      <div className="flex-end mx-3 mb-5 gap-4">
        <Link href= "/" className='text-gray-500 text-sm'>Cancel</Link>

        <button
        type = 'submit'
        disabled = {submitting}
        className='px-5 py-1.5 text-sm bg-indigo-900 rounded-full text-white hover:bg-indigo-950'
        >
          {submitting ? `${type}ing...` : type}
        </button>
      </div>
      </form>
    </section>
  )
}

export default Form