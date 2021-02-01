// == Import npm
import React from "react";

import Header from "../Header";
import Philosophie from "../Philosophie";
import Prestations from "../Prestations";
import Ateliers from "../Ateliers";
import Marques from "../Marques";
import Tarifs from "../Tarifs";
import Avis from "../Avis";
import Contact from "../Contact";
import Footer from "../Footer";

const App = () => {
    return (
        <div className="website">
            <Header/>

            <main>
                <Philosophie/>
                <Prestations/>
                <Ateliers/>
                <Marques/>
                <Tarifs/>
                <Avis/>
                <Contact/>
            </main>

            <Footer/>
        </div>
    )
}


// Export
export default App;