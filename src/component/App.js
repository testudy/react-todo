import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';

import AppHeader from './AppHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';

import './App.css';

injectTapEventPlugin();

export default function App(props) {
    return (
        <MuiThemeProvider>
            <div className="app">
                <AppHeader />
                <div className="app-main">
                    <div className="app-header">
                        <TodoForm />
                    </div>
                        <TodoList />
                    <Divider />
                    <div className="app-footer">
                        <TodoFilter />
                    </div>
                </div>
            </div>
        </MuiThemeProvider>
    );
}
