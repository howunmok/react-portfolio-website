import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import Typed from "typed.js";

export const Hero = () => {
  const positions = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(positions.current, {
      strings: [
        "Font-end Developer",
        "Full-stack Developer",
        "Freelance Photographer",
      ],
      typeSpeed: 90,
      loop: true,
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Benny Mok</h1>
        <p className={styles.introduction}>
          A passionate <span className={styles.position} ref={positions} />
          based in Toronto, Canada
        </p>

        <a href="mailto:bennymok@protonmail.com" className={styles.contactBtn}>
          Contact me
        </a>
      </div>
      <img
        src={getImageUrl("hero/portfoliopic.png")}
        alt="Hero Image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
