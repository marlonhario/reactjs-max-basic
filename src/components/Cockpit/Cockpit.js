import React from 'react';
import Radium, { StyleRoot } from 'radium';
// import Persons from '../Persons/Persons';
// import classes from './Cockpit.css';

const cockpit = (props) => {
    const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
          backgroundColor: 'lightgreen',
          color: 'black'
        }
      };

    return (
        <StyleRoot>
            <div>
                <h1>Hi, I'm a React App</h1>
                <p className={props.classes}>This is really working!</p>
                <button style={style} onClick={props.clicked}>Toggle Person</button>
            </div>
        </StyleRoot>
    );
};

export default Radium(cockpit);