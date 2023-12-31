import React from "react";
import { YMaps, Map, Placemark, ZoomControl } from "@pbe/react-yandex-maps";
import carIcon from "../../../icons/car-icon.svg";
import truckIcon from "../../../icons/truck-icon.svg";
import excavatorIcon from "../../../icons/excavator-icon.svg";
import { ICons, MapProps, Vehicle } from "../../../types";

export default function YMap({ list, setVehicleInfo, mode }: MapProps) {
  let center: [number, number];
  let zoom: number;
  if (mode === "All") {
    center = [59.93139, 30.36019];
    zoom = 12;
  } else {
    center = [list[0].location.latitude, list[0].location.longitude];
    zoom = 14;
  }

  const icons: ICons = {
    Легковые: carIcon,
    Грузовые: truckIcon,
    Спецтранспорт: excavatorIcon,
  };

  // const [info, setInfo] = useState({});

  return (
    <YMaps>
      <Map
        defaultState={{ center: center, zoom: zoom }}
        style={{
          width: "600px",
          height: "400px",
          border: "2px grey solid",
          margin: "10px 0",
        }}
      >
        {list.map((item: Vehicle) => (
          <Placemark
            geometry={[item.location.latitude, item.location.longitude]}
            options={{
              iconLayout: "default#image",
              iconImageHref: icons[item.category],
              iconImageSize: [20, 20],
              iconImageOffset: [-5, -5],
              hasHint: true,
              openHintOnHover: true,
            }}
            onClick={setVehicleInfo ? () => setVehicleInfo(item) : null}
            key={item.id}
          />
        ))}
        <ZoomControl options={{ position: { top: 10, right: 10 } }} />
      </Map>
    </YMaps>
  );
}
