import { useNavigate, useParams } from "react-router-dom"
import { moscowCoordinates } from "../config"
import YMap from "./Map"

const About = () => {
  const { id } = useParams()

  const index = Number(id)

  const nav = useNavigate()
  const goHome = () => nav("/")
  return (
    <>
      <div className="container">
        <div className="center">
          <button style={{ marginTop: 20 }} className="btn" onClick={goHome}>
            Back
          </button>

          <h3>{moscowCoordinates[index].name}</h3>
          <h4>Info : {moscowCoordinates[index].info}</h4>
          <p>
            latitude : {moscowCoordinates[index].latitude}
            <br />
            longitude : {moscowCoordinates[index].longitude}
          </p>
        </div>
      </div>
      <YMap
        latitude={moscowCoordinates[index].latitude}
        longitude={moscowCoordinates[index].longitude}
      />
    </>
  )
}

export default About
