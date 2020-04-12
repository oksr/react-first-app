import React from 'react';
import './nav-item.style.css';

export const NavItem = (props) => (
    <div className='nav-item'>
        <p>{props.name}</p>
    </div>
)