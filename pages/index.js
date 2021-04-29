import styles from "../styles/Home.module.css";
import Instagram from "../components/icons/insta";
import Facebook from "../components/icons/facebook";
import Carousel from "../components/carousel";
import Card from "../components/card";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.follow}>
        <div className={styles.icon}>Follow us on:</div>
        <div className={styles.icon}>
          <Instagram />
        </div>
        <div className={styles.icon}>
          <Facebook />
        </div>
      </div>
      <div className={styles.index}>
        <Carousel />
        <div style={{ marginTop: "40px" }}>{/* <Card /> */}</div>
      </div>
    </div>
  );
}
