import React, { useEffect } from 'react';
import './styles/main.scss'

import { useDispatch } from 'react-redux';
import { getPosts } from './actions/Posts.js';

import Header from './components/Header.js'

/* SCREENS */
import Home from './components/screens/Home.js'
import About from './components/screens/About'
import Projects from './components/screens/Projects'
import Blog from './components/screens/Blog'
import Art from './components/screens/Art'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])
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
                        <Route path="/posts" component={Blog} />
                    </Switch>
                </main>
            </div>
        </Router>
    )
}

export default App