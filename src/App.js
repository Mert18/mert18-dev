import React from 'react';
import './styles/main.scss'
import Header from './components/Header.js'

import Home from './components/Home.js'
import About from './components/About'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Art from './components/Art'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


const App = () => {
    return (
        <Router>
            <div className="container">
                <header className="container__header">
                    <Header />
                </header>
                <main className="container__main">

                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/projects" component={Projects} />
                        <Route path="/art" component={Art} />
                        <Route path="/blog" component={Blog} />
                    </Switch>
                </main>
            </div>
        </Router>
    )
}

export default App