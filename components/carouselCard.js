import Image from "next/image";
import { Desktop, Mobile, Tablet } from "../lib/responsive";

const CarouselCard = (props) => {
  const image = "/carousel/" + props.image;

  return (
    <div>
      <Desktop>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "20px",
          }}
        >
          <div>
            <Image src={image} alt="image" width={340} height={340} />
          </div>
          <div style={{ padding: "30px" }}>{props.children}</div>
        </div>
      </Desktop>
      <Tablet>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "20px",
          }}
        >
          <div>
            <Image src={image} alt="image" width={340} height={340} />
          </div>
          <div style={{ padding: "30px" }}>{props.children}</div>
        </div>
      </Tablet>
      <Mobile>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>
            <Image src={image} alt="image" width={340} height={340} />
          </div>
          <div>{props.children}</div>
        </div>
      </Mobile>
    </div>
  );
};

export default CarouselCard;
