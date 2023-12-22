import React from "react";
import './styles.css';
import playerX from '../../img/X.png'

const Player = () => (
    <button className="player">
        <img src={playerX} alt="Jogador X"></img>
    </button>
);

export default Player;