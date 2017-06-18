import React from 'react';
import PropTypes from 'prop-types';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';

import AppHeader from './AppHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';

import './App.css';

injectTapEventPlugin();

const propTypes = {
    filter: PropTypes.string.isRequired,
    entities: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        isCompleted: PropTypes.bool.isRequired,
    })),
    onCreate: PropTypes.func.isRequired,
    onCompleted: PropTypes.func.isRequired,
    onFilter: PropTypes.func.isRequired,
};

function App(props) {
    return (
        <MuiThemeProvider>
            <div className="app">
                <AppHeader />
                <div className="app-main">
                    <div className="app-header">
                        <TodoForm onSubmit={props.onCreate}/>
                    </div>
                    <TodoList
                        filter={props.filter}
                        entities={props.entities}
                        onChecked={props.onCompleted}
                    />
                    <Divider />
                    <div className="app-footer">
                        <TodoFilter
                            value={props.filter}
                            onChange={props.onFilter}
                        />
                    </div>
                </div>
            </div>
        </MuiThemeProvider>
    );
}

App.propTypes = propTypes;

export default App;
