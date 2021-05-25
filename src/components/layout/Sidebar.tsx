import React from 'react'

const Sidebar = () => {
    const onCloseSidebar = () => {
        document.getElementById('content-page')?.classList.add('hide-sidebar')
    }
    return (
        <div className='sidebar' style={{ background: '#f8f9fa' }}>
            <div className='navbar-collapse' id='navbarsExampleDefault'>
                <ul className='navbar-nav'>
                    <li>
                        <button className='btn btn-close-sidebar' onClick={onCloseSidebar} style={{float: 'right',padding: '8px'}}>
                            <i className='fa fa-chevron-left' style={{margin: '10px'}} aria-hidden='true'></i>
                        </button>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>Employess</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>About Me</a>
                    </li>
                </ul>
            </div>
        </div>
        // <div id='wrapper'>
        //     <div id='sidebar-wrapper'>
        //         <ul className='sidebar-nav'>
        //             <li className='sidebar-brand'>
        //                 <a href='#'>
        //                     <i className='fa fa-diamond' s aria-hidden='true'>
        //                         Dashboard
        //                     </i>
        //                 </a>
        //             </li>
        //             <li>
        //                 <a href='#'>Dashboard</a>
        //             </li>
        //             <li>
        //                 <a href='#'>Employess</a>
        //             </li>
        //         </ul>
        //     </div>
        // </div>
    )
}
export default Sidebar
