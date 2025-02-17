import { Link } from "react-router-dom";
import Image from "./Image";

export default function PlaceImg({ place, index = 0, className = null }) {
  if (!place.photos?.length) {
    return "";
  }
  if (!className) {
    className = "object-cover aspect-square";
  }
  return <Image className={className} src={place.photos[index]} alt="" />;
}
