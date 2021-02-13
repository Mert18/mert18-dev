import React from 'react';
import './styles/main.scss'
import Header from './components/Header.js'
import Home from './components/Home.js'
import topImage from './assets/topImage.svg'

const App = () => {
    return (
        <div className="container">
            <header className="container__header">
                <Header />
            </header>
            <main className="container__main">
                <div className="container__main__topImage">
                    <img src={topImage} alt="top bg" />
                </div>
                <Home />
            </main>
        </div>
    )
}

export default App