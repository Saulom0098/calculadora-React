import React, { Component } from "react";
import './calculator.css';


export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            result: '',
            isDarkTheme: false // Estado para controlar o tema
        };
    }

    handleClick = (value) => {
        if (value === '=') {
            this.calculate();
        } else if (value === 'C') {
            this.clear();
        } else {
            this.setState({ input: this.state.input + value });
        }
    }

    calculate = () => {
        try {
            this.setState({ result: eval(this.state.input) });
        } catch (error) {
            this.setState({ result: 'Error' });
        }
    }

    clear = () => {
        this.setState({ input: '', result: '' });
    }

    toggleTheme = () => {
        this.setState(prevState => ({ isDarkTheme: !prevState.isDarkTheme }));
    }

    render() {
        const { input, result, isDarkTheme } = this.state;
        const themeClass = isDarkTheme ? 'dark' : 'light'; // Classe para tema

        return (
            <div className={`calculator ${themeClass}`}>
                <div className="theme-switch">
                    <label>
                        <input type="checkbox" checked={isDarkTheme} onChange={this.toggleTheme} />
                        {isDarkTheme ? 'Tema Claro' : 'Tema Escuro'}
                    </label>
                </div>
                <div className="display">
                    <div className="input">{input}</div>
                    <div className="result">{result}</div>
                </div>
                <div className="buttons">
                    {['7', '8', '9', '/'].map((item) => (
                        <button key={item} onClick={() => this.handleClick(item)}>{item}</button>
                    ))}
                    {['4', '5', '6', '*'].map((item) => (
                        <button key={item} onClick={() => this.handleClick(item)}>{item}</button>
                    ))}
                    {['1', '2', '3', '-'].map((item) => (
                        <button key={item} onClick={() => this.handleClick(item)}>{item}</button>
                    ))}
                    {['C', '0', '=', '+'].map((item) => (
                        <button key={item} onClick={() => this.handleClick(item)}>{item}</button>
                    ))}
                </div>
            </div>
        );
    }
}