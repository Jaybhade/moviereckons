import styles from "../styles/Home.module.css";
import Instagram from "../components/icons/insta";
import Facebook from "../components/icons/facebook";
import Carousel from "../components/carousel";
import Card from "../components/card";
import { Desktop, Mobile, Tablet } from "../lib/responsive";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Desktop>
          <div className={styles.follow}>
            <div className={styles.icon}>Follow us on:</div>
            <div className={styles.icon}>
              <Instagram />
            </div>
            <div className={styles.icon}>
              <Facebook />
            </div>
          </div>
        </Desktop>
        <Desktop>
          <div className={styles.index}>
            <Carousel />
          </div>
          <div
            style={{
              marginLeft: "18%",
              display: "flex",
              flexDirection: "row",
              paddingLeft: "35px",
              paddingRight: "30px",
              justifyContent: "space-between",
            }}
          >
            <Card />
            <Card />
            <Card />
          </div>
        </Desktop>
        <Tablet>
          <div className={styles.index_tablet}>
            <Carousel />
            <div style={{ marginTop: "40px" }}>{/* <Card /> */}</div>
          </div>
        </Tablet>
        <Mobile>
          <div className={styles.index_mobile}>
            <Carousel />
            <div style={{ marginTop: "40px" }}>{/* <Card /> */}</div>
          </div>
        </Mobile>
      </div>
    </>
  );
}
