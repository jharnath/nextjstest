import styles from "./footer.module.css"

const Footer = () => {
    return(
        <div className={styles.container}>
            <div className={styles.logo}>
                Jharnath
            </div>
            <div className={styles.text}>
                Nextjs Test Site @ All rights reserved.
            </div>
        </div>
    )
}

export default Footer;