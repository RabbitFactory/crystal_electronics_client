import useStaticTexts from "../../../useStaticTexts/useStaticTexts"
import Banner from "../Banner Section/Banner"


const Home = () => {

  const texts = useStaticTexts()

  return (
    <div className="bg-purple-400">
    Render home components here
    {texts.testingText}
    <Banner></Banner>
    </div>
    
  )
}

export default Home