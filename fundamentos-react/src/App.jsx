import React from 'react'
import './App.css'
import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'
import CondicionalComIf from './components/CondicionalComIf'


export default props => (
    <div className="App">
        <Card titulo="#06 - Condicional com If">
            <Condicional numero={10}></Condicional>
        </Card>
        <Card titulo="#05 - Condicional">
            <Condicional numero={11}></Condicional>
        </Card>
        <Card titulo="#04 - Repetição">
            <Repeticao></Repeticao>
        </Card>
        <Card titulo="#03 - Componente com Filhos">
            <ComFilhos>
                <ul>
                    <li>Nome 1</li>
                    <li>Nome 2</li>
                    <li>Nome 3</li>
                    <li>Nome 4</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="#02 - Componente com Parâmetro">
            <ComParametro titulo="Esse é o título"
                subtitulo="Esse é o subtítulo" />
        </Card>
        <Card titulo="#01 - Primeiro Componente">
            <Primeiro></Primeiro>
        </Card>        
    </div>
);
