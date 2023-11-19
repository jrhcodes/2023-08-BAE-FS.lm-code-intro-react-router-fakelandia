import React from 'react';
import "./AppHeader.css"
import { NavLink } from 'react-router-dom';
const AppHeader: React.FC = () => {
    return <header className='AppHeader'>
        <div className='AppHeader__Title'>
            FakeLandia<br />Justice<br />Department
        </div>
        <nav>
            <ul>
                <li><NavLink to='/home'>Home</NavLink></li>
                <li><NavLink to='/misdemeanours'>Misdemeanours</NavLink></li>
                <li><NavLink to='/confess'>Confess To Us</NavLink></li>
            </ul>
        </nav>
    </header>;
}

export default AppHeader;