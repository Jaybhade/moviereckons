import Image from "next/image";

const CarouselCard = (props) => {
  const image = "/carousel/" + props.image;

  return (
    <div style={{ display: "flex", flexDirection: "row", padding: "20px" }}>
      <div>
        <Image src={image} alt="image" width={340} height={340} />
      </div>
      <div style={{ padding: "30px" }}>{props.children}</div>
    </div>
  );
};

export default CarouselCard;
