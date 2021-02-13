import React from 'react';
import './styles/main.scss'
import Header from './components/Header.js'
import Home from './components/Home.js'

const App = () => {
    return (
        <div className="container">
            <header className="container__header">
                <Header />
            </header>
            <main className="container__main">
                <Home />
            </main>
        </div>
    )
}

export default App