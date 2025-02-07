import useStaticTexts from "../../../useStaticTexts/useStaticTexts"


const Home = () => {

  const texts = useStaticTexts()

  return (
    <>
    Render home components here
    {texts.testingText}
    </>
  )
}

export default Home