import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Design uten navn.png';
import hero from"../../assets/hero.png";
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div  className={styles.colorModeContainer}>
        <img
          src={hero}
          className={styles.hero }
          alt="Profile picture of Tamilselvan"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          TAMILSELVAN
          <br />
          
        </h1>
        <h2>MERN-STACK Developer</h2>
        <span>
         
          <a href="https://github.com/nareshselvan6?tab=repositories" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/tamilselvan-s-aa45b42a3/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
        "With a passion for crafting robust applications using MongoDB, Express, React, and Node.js, I deliver seamless user experiences and scalable backend solutions."
        </p>
        <a href="https://drive.google.com/file/d/1x_YzRYtH6D0teBZBT6xCmXME2jkeb7Wh/view?usp=sharing" target='_blank'>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
