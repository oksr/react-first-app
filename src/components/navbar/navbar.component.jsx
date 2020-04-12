import React, { Component } from 'react';
import { NavItem } from '../navbar/navbar-item/nav-item.component';
import './navbar.style.css';

class NavBar extends Component {
    constructor() {
        super();

        this.state = {
            nav_items: [
                {
                    name: 'Home',
                    id: 'h12'
                },
                {
                    name: 'About',
                    id: 'a12'
                },
                {
                    name: 'See More',
                    id: 's12'
                },
                {
                    name: 'Demo',
                    id: 'd12'
                },
            ]
        }
    }
    render() {
        return (
            
            <div className='navbar-wrapper'>
                {
                    this.state.nav_items.map(navitems => (
                        <NavItem key={navitems.id} name={navitems.name}/>
                    ))
                }
            </div>
        )
    }
}
export { NavBar };