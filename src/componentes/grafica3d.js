import React from 'react';

import './estilosComponentes/grafica.css';

import { Helmet } from "react-helmet";

class Grafica3d extends React.Component {

    render() {
        return (
            <div className="application">
                <Helmet>
                    <script src="//d3js.org/d3.v3.min.js" type="text/javascript"></script>
                    <script src=""></script>
                    <script src="./graficas/grafica.js" type="text/javascript" />
                </Helmet>

            </div>
        );
    }
};

export default Grafica3d;