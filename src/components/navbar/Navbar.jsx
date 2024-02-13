import Link from "next/link";
import Links from "./links/Links";
import stlyes from "./navbar.module.css"


const Navbar = () => {
    return(
        <div className={stlyes.container}>
            <div>Logo</div>
            <div>
                <Links/>
            </div>
        </div>
    )
}

export default Navbar;