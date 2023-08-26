import PromptCard from "./PromptCard"
import {useState, useEffect} from 'react'

const Profile = (name, handleDelete, desc, data, handleEdit) => {
  return (
    <section className="w-full">
      <h1>{name} Profile</h1>
    </section>
  )
}

export default Profile