import React from 'react';
import './styles/main.scss'
import Header from './components/Header.js'
import Home from './components/Home.js'
import TopImage from './components/TopImage'

const App = () => {
    return (
        <div className="container">
            <header className="container__header">
                <Header />
            </header>
            <main className="container__main">
                <div className="container__main__topImage">
                    <TopImage />
                </div>
                <Home />
            </main>
        </div>
    )
}

export default App