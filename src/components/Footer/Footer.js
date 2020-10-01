import React from 'react';
import './footer.css';
var logo = require('../../img/logo.png');
export default function Footer() {

    return (
        <div className="poweredby">
            Powered by <a href="https://www.gupshup.io/developer/home" target="_blank" title="Powered by Gupshup"><img src={logo} width="60" /></a>
        </div>
    )
}