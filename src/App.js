import React from 'react';

import './App.css';

//Componentes
import Header from './componentes/Header';
import SideNav from './componentes/Sidenav';
import Main from './componentes/Main';
import Footer from './componentes/Footer';



function App() {
  return (
    <div className="App">
      <div className="grid-container">
        <Header />
        <SideNav />
        <Main />


        <Footer />

      </div>
    </div>
  );
}

export default App;
