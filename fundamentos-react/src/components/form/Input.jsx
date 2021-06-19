import React, { useState } from 'react'

const Input = (props) => {
    const [nome, alterarNome] = useState('Wagner')

    return (
        <>
            <h3>{nome}</h3>
            <input type="text" value={nome} onChange={e => alterarNome(e.target.value)} />
        </>
    );
}

export default Input