import React from 'react'

const Condicional = props => {
    return (
        <div>
            <h2>O numéro {props.numero} é</h2>
            {props.numero % 2 === 0 ?
                <span>Par</span>
                :
                <span>Ímpar</span>
            }

        </div>
    )
}

export default Condicional