import React from 'react';
import './header.css';

function Header() {
    return (
        <div className='header'>
            <div className="header-menu">
            <i className="fi-rr-layout-fluid"></i>
            </div>
            <div className="header-leftFold">
                <label className='header-label'>Microsoft Teams</label>
            </div>
            <div className="header-rightFold">
                <div className="header-search">
                <i className="fi-rr-search"></i>
                <input type="text" placeholder='Search'/>
                </div>
                <div className="header-profile">
                    <div className="header-options">
                    <i className="fi-rr-menu-dots"></i>
                    </div>
                    <img src="https://image.flaticon.com/icons/png/128/3135/3135715.png" alt="avater" className="header-avatar" />
                </div>
            </div>
        </div>
    )
}

export default Header
