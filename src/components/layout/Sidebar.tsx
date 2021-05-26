import React from 'react'

const Sidebar = () => {
    const onCloseSidebar = () => {
        document.getElementById('content-page')?.classList.add('hide-sidebar')
    }

    return (
        <div className='sidebar navbar-shadow' style={{ background: '#f8f9fa' }}>
            <div className='navbar-collapse' id='navbarsExampleDefault'>
                <ul className='navbar-nav'>
                    <li>
                        <button className='btn btn-close-sidebar' onClick={onCloseSidebar} style={{ float: 'right', padding: '8px' }}>
                            <i className='fa fa-chevron-left' style={{ margin: '10px' }} aria-hidden='true'></i>
                        </button>
                    </li>

                    <li className='nav-item'>
                        <a href='/employess' className='nav-link'>
                            Employess
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='/counter' className='nav-link'>
                            Counter
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Sidebar
