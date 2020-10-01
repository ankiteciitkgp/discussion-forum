import React from 'react';
// import { Link } from 'react-router-dom';
// import HamburgerMenu from 'react-hamburger-menu';
import './header.css';

export default function Header(goback,{ title = 'Discussion Board' }) {

    return (
        <div className='header'>
            <div className='text-center'>
                <p>{title}</p>
            </div>
        </div>
    )
}
