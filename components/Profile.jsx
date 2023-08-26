import PromptCard from "./PromptCard"


const Profile = ({name, handleDelete, desc, data, handleEdit}) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
      <span className="amber_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{desc} fuck</p>

      <div className="mt-10 prompt_layout">
        {data.map((post) =>(
          <PromptCard
          key={post.id}
          post={post}
          handleEdit={() => handleEdit && handleEdit()}
          />
        ))}
      </div>
    </section>
  )
}

export default Profile