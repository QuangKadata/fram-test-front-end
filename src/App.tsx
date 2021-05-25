import React from 'react'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Sidebar from './components/layout/Sidebar'
import HomePage from './pages/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './styles/layout-styles.scss'
import Employess from './components/Employess'
import CounterPage from './pages/CounterPage'

function App() {
    return (
        <div className='App'>
            <Navbar />
            <div id='content-page'>
                <Sidebar />
                <div className='main-content'>
                    <Router>
                        <div className='App'>
                            <Route path='/' exact component={HomePage} />
                            <Route path='/employess' component={Employess} />
                            <Route path='/counter' component={CounterPage} />
                        </div>
                    </Router>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default App
