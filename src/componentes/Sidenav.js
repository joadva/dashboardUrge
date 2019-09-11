import React from 'react';
import logo from '../Icono/Imagen7.png';
import Nav from './navwithRouter';
import './estilosComponentes/Logo.css';


export const Sidenav = (props) => {
    return (

        <aside className="sidenav">
            <img src={logo} className="App-logo pequeña" alt="logo" />
            <Nav />
        </aside>

    )

}

export default Sidenav;