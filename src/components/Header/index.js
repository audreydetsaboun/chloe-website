import React from "react";
import telephone from './telephone.png';

const Header = () => (
    <header>
        <div className="bandeau">
        <img src={telephone} className="tel-logo" alt="tel-logo" />
        <p>01 43 24 28 80</p>
        <p>215 av. Pierre Brossolette, 94170 Le Perreux-sur-Marne</p>
        </div>
    </header>
)

export default Header;