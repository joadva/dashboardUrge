import React from 'react'

export const TablaPincipal = (props) => {
    return (
        <div>
            <div class="scroll-div-tablas" id="TablaContenedor" style="height: 315px;">
                <table class="ListaTabla" id="Topicos_Datatable">
                    <thead id="Topicos_Cabecera_Datos">
                        <tr>
                            <th style="width: 5%;"></th>
                            <th id="th" style="width: 10%;">Clave</th>
                            <th id="th" style="width: 15%;">Tópico</th>
                            <th id="th" style="width: 20%;">Descripción</th>
                            <th id="th" style="width: 20%;">Objetivo</th>
                            <th id="th" style="width: 20%;">Justificación</th>
                            <th id="th" style="width: 20%;">Área de estudio</th>
                        </tr>
                    </thead>

                </table>
            </div>
        </div>
    )
}

export default TablaPincipal;