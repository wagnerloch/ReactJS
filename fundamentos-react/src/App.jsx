import React from 'react'
import './App.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/Input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'

const App = props => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="#11 - Mega " color="#73503C">
                <Mega qtdNumeros={6}></Mega>
            </Card>
            <Card titulo="#10 - Contador " color="#293E6A">
                <Contador passo={10} valor={100}></Contador>
            </Card>
            <Card titulo="#09 - Input" color="#9C0F5F">
                <Input></Input>
            </Card>
            <Card titulo="#08 - Comunicação Indireta" color="#000">
                <Super></Super>
            </Card>
            <Card titulo="#07 - Comunicação Direta" color="#FA6980">
                <Pai sobrenome="Silva"></Pai>
            </Card>
            <Card titulo="#06 - Condicional com If" color="#FA6900">
                <CondicionalComIf numero={10}></CondicionalComIf>
            </Card>
            <Card titulo="#05 - Condicional" color="#E94C6F">
                <Condicional numero={11}></Condicional>
            </Card>
            <Card titulo="#04 - Repetição" color="#008BBA">
                <Repeticao></Repeticao>
            </Card>
            <Card titulo="#03 - Componente com Filhos" color="#D96459">
                <ComFilhos>
                    <ul>
                        <li>Nome 1</li>
                        <li>Nome 2</li>
                        <li>Nome 3</li>
                        <li>Nome 4</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card titulo="#02 - Componente com Parâmetro" color="#FF85CB">
                <ComParametro titulo="Esse é o título"
                    subtitulo="Esse é o subtítulo" />
            </Card>
            <Card titulo="#01 - Primeiro Componente" color="#92B06A">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
);

export default App
