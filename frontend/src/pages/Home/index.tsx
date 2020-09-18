import React from 'react';

import './styles.css';

import { ReactComponent as ArrowIcon } from '../../assets/images/arrow.svg';
import { ReactComponent as GamerImg } from '../../assets/images/gamer.svg';

function Home() {
    return (
        <div className="home-container">
            <div className="home-text">
                <h1 className="home-text-title">
                    Quais jogos a galera gosta mais?
                </h1>
                <h3 className="home-text-subtitle">
                    Clique no botão abaixo e saiba quais são os jogos que os gamers estão escolhendo!
                </h3>
                <div className="home-actions">
                    <button type="button" className="home-btn">
                        QUERO SABER QUAIS SÃO
                    </button>
                    <div className="home-btn-icon">
                        <ArrowIcon />
                    </div>
                </div>
            </div>
            <GamerImg className="home-image" />
        </div>
    );
}

export default Home;
