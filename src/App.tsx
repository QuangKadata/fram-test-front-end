import React from 'react'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Sidebar from './components/layout/Sidebar'
import HomePage from './pages/Home'

import './styles/layout-styles.scss'

function App() {
    return (
        <div className='App'>
            <Navbar />
            <div id='content-page'>
                <Sidebar />
                <div className='main-content'>
                    <HomePage />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default App
