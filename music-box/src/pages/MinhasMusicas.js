import React from 'react';
import NavBar from '../components/NavBar';
import CardMusicas from './CardMusicas';

function MinhasMusicas() {
    return (
        <>
            <NavBar />

            <div className="container">
                <div className="filter">
                    <button className="bnt-green right"> ADICIONAR </button>
                </div>
            </div>

            <div className="container">
                <div className="music-boxes">

                    <CardMusicas
                        nome="don't cry"
                        genero="rock"
                        ano="1989"
                    />

                    <CardMusicas
                        nome="cheia de manias"
                        genero="samba"
                        ano="2010"
                    />

                    <CardMusicas
                        nome="Stesstou"
                        genero="Indie"
                        ano="2015"
                    />



                </div>
            </div>

        </>

    );
}

export default MinhasMusicas;