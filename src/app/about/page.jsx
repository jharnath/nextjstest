import Image from "next/image";
import styles from "./about.module.css"

const AboutPage = () => {
    return(
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.subtitle}>About Site</h2>
                <h1 className={styles.title}>
                    This is a NextJs Fullstack test site
                </h1>
                <p className={styles.desc}>
                    Some more stuff about this project idk, this project has a home, about, contact and blog page.
                </p>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <h1>10K +</h1>
                        <p>Years of experience</p>
                    </div>
                    <div className={styles.box}>
                        <h1>234K +</h1>
                        <p>People reached</p>
                    </div>
                    <div className={styles.box}>
                        <h1>5K +</h1>
                        <p>Services and plugins</p>
                    </div>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image src="/about.png" alt="about" fill/> 
            </div>
        </div>
    )
}

export default AboutPage;