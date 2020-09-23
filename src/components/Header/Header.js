import React from 'react';
import { NetlifyIdentity } from '../NetlifyIdentity/NetlifyIdentity';
// import { Link } from 'react-router-dom';
// import HamburgerMenu from 'react-hamburger-menu';
import './header.css';



export default function Header(goback,{ title = 'Discussion Board' }) {

    return (
        <div className='header'>
            <div className='header'>
            <p>{title}</p>
            </div>
        </div>
    )
}
