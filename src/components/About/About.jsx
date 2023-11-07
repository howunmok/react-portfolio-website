import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <p className={styles.titleIntro}>
        I am a software engineering enthusiast specializing in web development,
        having recently completed the Diploma of Software Engineering Technician
        program. With a focus on HTML, CSS, JavaScript, and Angular, I excel in
        problem-solving and thrive in collaborative team environments.
      </p>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="About Image"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a front-end developer with experience in building responsive
                and optimized website
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience in developing fast and optimized back-end
                systems and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI Icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
