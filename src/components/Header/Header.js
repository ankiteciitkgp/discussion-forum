import React from 'react';
// import { Link } from 'react-router-dom';
// import HamburgerMenu from 'react-hamburger-menu';
import './header.css';

export default function Header({ title = 'Discussion Board' }) {

    return (
        <div className='header'>
            <a href={window.location.origin}><i className="fa fa-home fa-lg"></i></a>
            <div className='header'>
            <p>{title}</p>
            </div>
            <a href={'https://wa.me/?text=' + encodeURI(window.location)} target="_blank"><i className="fa fa-share fa-lg"></i></a>
        </div>
    )
}
