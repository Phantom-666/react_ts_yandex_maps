import { YMaps, Placemark, Map } from "@pbe/react-yandex-maps"
import { apikey } from "../config"

const YMap = ({
  latitude,
  longitude,
}: {
  latitude: number
  longitude: number
}) => {
  return (
    <YMaps query={{ apikey }}>
      <Map
        defaultState={{ center: [latitude, longitude], zoom: 10 }}
        width={window.innerWidth}
        height={window.innerHeight}
      >
        <Placemark geometry={[latitude, longitude]} />
      </Map>
    </YMaps>
  )
}

export default YMap
