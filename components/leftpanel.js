import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/LeftPanel.module.css";

const LeftPanel = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Image src="/logo.png" alt="logo" width={180} height={100} />
      <div className={styles.nav}>
        <div className={styles.navElement}>
          <Link href="/">
            <a>
              Home
              {router.pathname == "/" ? (
                <span className={styles.dot}>•</span>
              ) : null}
            </a>
          </Link>
        </div>
        <div className={styles.navElement}>
          <Link href="/genre">
            <a>
              Genre
              {router.pathname == "/genre" ? (
                <span className={styles.dot}>•</span>
              ) : null}
            </a>
          </Link>
        </div>
        <div className={styles.navElement}>
          <Link href="/allblogs">
            <a>
              All blogs
              {router.pathname == "/allblogs" ? (
                <span className={styles.dot}>•</span>
              ) : null}
            </a>
          </Link>
        </div>
        <div className={styles.navElement}>
          <Link href="/aboutus">
            <a>
              About us
              {router.pathname == "/aboutus" ? (
                <span className={styles.dot}>•</span>
              ) : null}
            </a>
          </Link>
        </div>
        <div className={styles.navElement}>
          <Link href="/contact">
            <a>
              Contact
              {router.pathname == "/contact" ? (
                <span className={styles.dot}>•</span>
              ) : null}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
