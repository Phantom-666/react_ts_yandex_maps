import React from "react"
import { YMaps, Placemark, Map } from "@pbe/react-yandex-maps"
import { moscowCoordinates, apikey } from "../../config"
import { useNavigate } from "react-router-dom"

const YandexMaps = () => {
  const nav = useNavigate()
  const handlePlacemarkClick = (id: number) => {
    nav(`/about/${id}`)
  }
  return (
    <YMaps query={{ apikey }}>
      <Map
        defaultState={{ center: [55.76, 37.64], zoom: 10 }}
        width={window.innerWidth}
        height={window.innerHeight}
      >
        {moscowCoordinates?.map((c, i) => (
          <Placemark
            key={i}
            geometry={[c.latitude, c.longitude]}
            onClick={() => handlePlacemarkClick(i)}
          />
        ))}
      </Map>
    </YMaps>
  )
}

export default YandexMaps
