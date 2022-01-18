import { Link } from "react-router-dom"
import { FaLinkedin, FaGithub, FaShopify } from "react-icons/fa";

const Header = () => {
    return (
        <div className="nav-continer">
            <div className="left-side">
                <h1 className="header">Spacestagram</h1>
            </div>
            <div className="right-side">
                <ul>
                    <li className="icon linked"><a href="https://www.linkedin.com/in/edward-cabral/">
                        <FaLinkedin /></a></li>
                    <li className="icon github"><a href="https://github.com/CabralE/spacestagram-client-vite">
                        </a><FaGithub /></li>
                    
                    <li className="icon shopify"><a href="https://www.shopify.com/">
                        </a><FaShopify /></li>
                    <br />
                </ul>
            </div>
            
        </div>
    )
}

export default Header

    // < Link >
    // <li href="https://www.linkedin.com/in/edward-cabral/"><FaLinkedin /></li>
    //                 </ >
    //                 <Link>
    //                     <li><FaGithub /></li>
    //                 </Link>
    //                 <Link>
    //                     <li><FaShopify /></li>
    //                 </Link>