import React from "react";
import telephone from './telephone.png';
import adresse from './pointeur-adresse.png';
import chloe from './chloe-logo.png';
import chloewhite from './chloe-white-logo.png';
import './styles.scss';

const Header = () => (
    <header>
        <div className="bandeau">
            <div className="header-bandeau_name">
                <img src={chloewhite} className="header-adresse_logo" alt="" />
                <p className="header-name">Institut Chloé</p>
            </div>

            <div className="header-bandeau_adresse">
            <img src={adresse} className="header-adresse_logo" alt="adresse" />
                <p className="header-address">215 av. Pierre Brossolette, 94170 Le Perreux-sur-Marne</p>
            </div>

            <div className="header-bandeau_tel">
                <img src={telephone} className="header-phone_logo" alt="téléphone" />
                 <p className="header-phone_number">01 43 24 28 80</p>
            </div>
        </div>

        <nav className="header-nav">
            <ul className="header-nav_list">
                <li><a href="#philosophie">Philosophie</a></li>
                <li><a href="#prestations">Prestations</a></li>
                <li><a href="#ateliers">Ateliers</a></li>
                <li><a href="#marques">Marques</a></li>
                <li><a href="#tarifs">Tarifs</a></li>
                <li><a href="#avis">Témoignages</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>

        <img src={chloe} className="header-chloe_logo" alt="" />
        <h1 className="header-title">Institut Chloé</h1>
        <h2 className="header-subtitle">Votre institut de beauté à Le Perreux-sur-Marne</h2>

        
    </header>
)

export default Header;