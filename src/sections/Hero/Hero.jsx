import styles from './HeroStyles.module.css';
import kopi from '../../assets/cs/kopi.jpg'
import sun from '../../assets/cs/sun.png';
import moon from '../../assets/cs/moon.png';
import githubLight from '../../assets/cs/githubLight.png';
import githubDark from '../../assets/cs/githubDark.png';
import linkedinLight from '../../assets/cs/linkedinLight.png';
import linkedinDark from '../../assets/cs/linkedinDark.png';
import shapapieceIcon from '../../assets/cs/shapapiece.png';
import CV from '../../assets/cs/resume.pdf';
import { useTheme } from '../../common/ThemeContext';




function Hero() { 
    const {theme, toggleTheme} = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight: linkedinDark;
    // const shapapieceIcon = theme === 'light' ? shapaieceLight : shapapieceDark;

  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={kopi} 
            alt="Profile picture of Kopano Tshikare" />

            <img src={themeIcon} alt="colour mode icon" onClick={toggleTheme} style={{ width: "50px", height: "50px" }}  />
        </div>
        <div className={styles.info}>
            <h1>Kopano <br /> Tshikare</h1>
            <h2>Digital Media Developer</h2>
            <span>
                <a href="https://github.com" target="_blank">
                    <img src={githubIcon} style={{ width: "50px", height: "50px" }} alt="githubIcon" />
                </a>
                <a href="https://linkedin.com" target="_blank">
                    <img src={linkedinIcon} style={{ width: "50px", height: "50px" }} alt="linkedinIcon" />
                </a>
                <a href="https://shapapiece.co.za" target="_blank">
                <a href="https://www.shapapiece.co.za/" target="_blank">
                    <img src={shapapieceIcon} style={{ width: "60px", height: "60px" }} alt="shapapieceIcon" />
                </a>
            </span>
            <p className={styles.description}>
               Who, over five years has built a diverse range of skills, 
               qualities and attributes that guarantee that I will perform highly in a developer role.
               Continuously learning new technologies in the field of digital development.
            </p>
            <a href={CV} download><button className='hover' >Resume</button>
            </a> 
                
            
        </div>
    </section>
  )
}

export default Hero 

