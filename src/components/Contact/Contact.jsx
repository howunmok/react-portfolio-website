import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <div className={styles.linksContainer}>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <a href="mailto:bennymok@protonmail.com">bennymok@protonmail.com</a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="Linkedin icon"
            />
            <a
              href="https://www.linkedin.com/in/benny-mok"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/benny-mok
            </a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="Github icon"
            />
            <a
              href="https://github.com/howunmok"
              target="_blank"
              rel="noreferrer"
            >
              github.com/howunmok
            </a>
          </li>
          <li>
            <a
              href="../assets/resume/Resume_BennyMok.pdf"
              download
              className={styles.downloadBtn}
            >
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
