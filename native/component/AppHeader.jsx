import React from 'react';
import AppBar from 'material-ui/AppBar';

import logo from '../media/image/logo.svg';

import './AppHeader.css';

export default function AppHeader(props) {
    return (
        <AppBar
            title="Todo"
            iconElementLeft={
                <img src={logo} className="logo" alt="logo" />
            }
        />
    );
};
