import Image from "next/image";

const Card = () => {
  return (
    <div style={{ borderRadius: "10%" }}>
      <Image
        src="/carousel/moviereckons-20210429-0003.jpg"
        alt="image"
        height={340}
        width={280}
      />
    </div>
  );
};

export default Card;
