import React from "react";
import Logo from '../assets/images/logo.svg'
import Search from '../assets/images/search.svg'
import store from '../assets/images/store.svg'
function Nav() {
    return(<nav className='nav-wrapper'>
        <div className='nav-content'>
            <ul className='list-styled'>
                <li>
                    <img src={Logo} alt="Appel"/>
                </li>
                <li>
                    <a className="link-styled">Home</a>
                </li>
                <li>
                    <a className="link-styled">Store</a>
                </li>
                <li>
                    <a className="link-styled">News</a>
                </li>

                <li>
                    <img src={Search} alt="search"/>
                </li>
                <li>
                    <img src={store} alt="store"/>
                </li>
                <li>
                    <a className="link-styled">About us</a>
                </li>
            </ul>
        </div>
    </nav>);
}

export default Nav;