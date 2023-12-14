import { getImageUrl } from "../../utils"
import styles from "./About.module.css"
import { TbCertificate } from "react-icons/tb"
import { GiDiploma } from "react-icons/gi"
import { RiGraduationCapFill } from "react-icons/ri"

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <p className={styles.titleIntro}>
        I am a software engineering enthusiast specializing in web development,
        having recently completed the Diploma of Software Engineering Technician
        program. With a focus on HTML, CSS, JavaScript, React and Angular, I
        excel in problem-solving and thrive in collaborative team environments.
      </p>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="About Image"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" /> */}
            <div className={styles.iconContainer}>
              <TbCertificate className={styles.icon} />
            </div>
            <div className={styles.aboutItemText}>
              <h3>Certificate of Completion - Web Development Training</h3>
              <p>Cantek Program</p>
              <small>Nov 2023 - Dec 2023</small>
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" /> */}
            <div className={styles.iconContainer}>
              <GiDiploma className={styles.icon} />
            </div>
            <div className={styles.aboutItemText}>
              <h3>College Diploma of Software Engineering Technican</h3>
              <p>Centennial College</p>
              <small>Jan 2022 - May 2023</small>
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/uiIcon.png")} alt="UI Icon" /> */}
            <div className={styles.iconContainer}>
              <RiGraduationCapFill className={styles.icon} />
            </div>
            <div className={styles.aboutItemText}>
              <h3>
                Bachelor of Science in Applied Science (Energy and Environment)
                with Honours
              </h3>
              <p>Hong Kong Metropolitan University</p>
              <small>Sep 2009 - Aug 2011</small>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
