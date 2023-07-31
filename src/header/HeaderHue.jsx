import React from 'react';
import { Link } from 'react-router-dom';

export default function() {
return (
    <div class="header-item">
    <div class="menu-assine">
        <div class="points">
            <div>.</div>
            <div>.</div>
            <div>.</div>
            <div>.</div>
            <div>.</div>
            <div>.</div>
            <div>.</div>
            <div>.</div>
            <div>.</div>
        </div>
        <div id="menu">Menu</div>
        <div class="border"></div>
        <a href="." id="assine">Assine</a>
    </div>
    <Link to="/" className="header-logo">globo.com</Link>
    <div class="conta-busca">
        <Link to="/Login" id="conta">
            Conta Globo <img src="./vetor conta.png"></img> 
        </Link>
        <i class="fa-regular fa-user"></i>
        <div class="border"></div>
        <div id="busca">
            Busca <img src="Vector.png"></img> 
        </div>
        <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
    </div>
</div>
)
}