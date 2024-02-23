import { getLocation } from "@/app/api/getLocation";
import style from "./ItemLocation.module.scss";

export default async function ItemLocation(prop) {
  const location = await getLocation(prop.id);
  return (
    <div className={style.itemLocation}>
        <h3>{location.location}</h3>
    </div>
  );
}