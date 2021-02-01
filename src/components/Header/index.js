import React from "react";
import telephone from './telephone.png';
import './styles.scss';

const Header = () => (
    <header>
        <div className="bandeau">
        <img src={telephone} className="tel-logo" alt="tel-logo" />
        <p className="tel-number">01 43 24 28 80</p>
        <p className="adresse">215 av. Pierre Brossolette, 94170 Le Perreux-sur-Marne</p>
        </div>

        <h1>Institut Chloé</h1>
        <h2>Votre institut de beauté à Le Perreux-sur-Marne</h2>

        <nav>
            <ul>
                <li>Philosophie</li>
                <li>Prestations</li>
                <li>Ateliers</li>
                <li>Marques</li>
                <li>Tarifs</li>
                <li>Témoignages</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
)

export default Header;