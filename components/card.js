import Image from "next/image";

const Card = () => {
  return (
    <div
      className="card"
      style={{
        borderRadius: "10px",
        marginTop: "20px",
        marginBottom: "10px",
        width: "280px",
        height: "340px",
        position: "relative",
        background: `url("/kota.jpg")`,
      }}
    >
      <div style={{ marginTop: "25px" }}>
        <span
          style={{
            color: "white",
            padding: "10px",
            margin: "10px",
            backgroundColor: "#B71C1C",
            fontWeight: "600",
            borderRadius: "5px",
          }}
        >
          Web Series
        </span>
      </div>
      <div style={{ marginTop: "250px" }}>
        <span
          style={{
            color: "white",
            padding: "10px",
            margin: "10px",
            backgroundColor: "#B71C1C",
            fontWeight: "600",
            borderRadius: "5px",
          }}
        >
          Top 5 web series
        </span>
      </div>
    </div>
  );
};

export default Card;
