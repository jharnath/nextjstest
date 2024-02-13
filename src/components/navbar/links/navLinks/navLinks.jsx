import Link from "next/link"
import styles from "./navLinks.module.css"

const NavLinks = ({item}) => {
    return(
        <Link href={item.path} className={`${styles.container}`}>
            {item.title}</Link>
    )
}

export default NavLinks