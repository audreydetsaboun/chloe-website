import React from "react";
import telephone from './telephone.png';
import adresse from './pointeur-adresse.png';
import chloewhite from './chloe-white-logo.png';
import photo1 from './photo1.jpeg';
import photo2 from './photo2.jpg';
import photo3 from './photo3.jpeg';
import photo4 from './photo4.png';
import photo5 from './photo5.jpeg';
import './styles.scss';

const Header = () => (
    <header>
        <div className="header-fixed">
            <div className="bandeau">
                <div className="header-bandeau_name">
                    <img src={chloewhite} className="header-adresse_logo" alt="" />
                    <h1 className="header-name">Institut Chloé</h1>
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
        </div>

        <div className="header-slider">
            <figure>
                <img src={photo1} className="photo1" alt="massage du dos"/>
                <img src={photo2} className="photo2" alt="produits ambiance des alpes"/>
                <img src={photo3} className="photo3" alt="huiles essentielles"/>
                <img src={photo4} className="photo4" alt="soin du visage"/>
                <img src={photo5} className="photo5" alt="maquillage"/>
            </figure>
        </div>
        
    </header>
)

export default Header;