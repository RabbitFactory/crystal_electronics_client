import useStaticTexts from "../../../useStaticTexts/useStaticTexts"


const Home = () => {

  const texts = useStaticTexts()

  return (
    <div className="bg-purple-400">
    Render home components here
    {texts.testingText}
    </div>
  )
}

export default Home