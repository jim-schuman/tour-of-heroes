import React from 'react';
import HeaderBarLogos from './HeaderBarLogos'
import HeaderBarLinks from './HeaderBarLinks'

const HeaderBar = () => {
    return (
    <header>
        <nav
            className="navbar has-background-dark is-dark"
            role="navigation"
            aria-label="main navigation"
            >
            <HeaderBarLogos />
            <HeaderBarLinks />
        </nav>
    </header>
    );
}
export default HeaderBar;