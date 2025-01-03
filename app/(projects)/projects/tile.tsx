import Image from "next/image";

interface TileProps {
  name: string,
  desc: string,
  imageSrc: string,
}


export default function Tile(props: TileProps) {
  return (
    <div>
      <Image
        src={props.imageSrc}
        alt={props.name}
      />
      <h4>{props.name}</h4>
      <p>{props.desc}</p>
    </div>
  );
}
