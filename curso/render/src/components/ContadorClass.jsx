import React, { Component } from 'react';

class Contador extends Component {
    constructor(props) {
        super(props);

        this.state = { contador: 0 }
    }

    incrementar() {
        this.setState((estadoAnterior) => {
            return {
                contador: estadoAnterior.contador + 1
            }
        })
    }

    disminuir() {
        this.setState((estadoAnterior) => {
            return {
                contador: estadoAnterior.contador -1
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Contador: {this.state.contador}</h1>
                <button 
                    onClick={() => this.incrementar()}
                    >Incrementar</button>
                <button 
                    onClick={() => this.disminuir()}
                    >Disminuir</button>
            </div>
        )
    }
}

export default Contador;
