import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation} from 'react-i18next';
import './Navigation.css';

const Navigationbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();
    

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <>
            <div id='outer-nav'>
            <div id="nav">
                <div id="nav-left">
                {t('taglineOne')}  {/* Using the t function */}
                </div>
                <div id="nav-center">
                    <ul id="nav-center-ul">
                        <li><Link to="/">{i18n.t('home')}</Link></li>
                        <li><Link to="/ContactUs">{i18n.t('contactUs')}</Link></li>
                        <li><Link to="/feed">{i18n.t('feeds')}</Link></li>
                        <button id="button"><Link to="/complain" id='button-link'>{i18n.t('complain')}</Link></button>
                    </ul>
                </div>
                <div id="nav-right">
                <button onClick={() => changeLanguage('en')}>English</button>
                <button onClick={() => changeLanguage('hi')}>हिन्दी</button>
                <button onClick={() => changeLanguage('mr')}>मराठी</button> 
                <i className="fas fa-bars" onClick={toggleMenu}></i>
                   
                </div>
            </div>

            </div>

            {/* Sidebar Menu */}
            <div id="side-menu" className={`side-menu ${isMenuOpen ? 'show' : ''}`}>
                <button className="close-btn" onClick={toggleMenu}>x</button>
                <ul>
                    <li><Link to="/dashboard">{i18n.t('dashboard')}</Link></li>
                    <li><Link to="/feedback">{i18n.t('feedback')}</Link></li>
                    <li><Link to="/password-settings">{i18n.t('passwordSettings')}</Link></li>
                    <li><Link to="/signout">{i18n.t('signOut')}</Link></li>
                </ul>
            </div>

            <div>
                {/* <button onClick={() => changeLanguage('en')}>English</button>
                <button onClick={() => changeLanguage('hi')}>हिन्दी</button> */}
            </div>
        </>
    );
}

export default Navigationbar;
