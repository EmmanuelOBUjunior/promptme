import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="text-center head_text">PromptMe:
        <br className="max-md:hidden"/>
        <span className="indigo_gradient text center">Empowering Minds, Inspiring Creativity</span>
        </h1>
        <p className=" desc text-center">
        PromptMe is a revolutionary app that brings together aspiring writers, content creators, and AI enthusiasts. Discover a vast library of creative AI prompts generated to spark your imagination and unleash your potential.
        </p>

        <Feed/>
    </section>
  )
}

export default Home