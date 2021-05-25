function Navbar() {
    const onOpenSidebar = () => {
        document.getElementById('content-page')?.classList.remove('hide-sidebar')
    }
    return (
        <div>
            <nav className='navbar navbar-expand-md navbar-light bg-light' style={{borderBottom: '1px solid lightgray'}}>
                <button className='btn btn-default btn-close-sidebar mr-3' onClick={onOpenSidebar} style={{border: '1px solid gray',borderRadius: '4px'}} >
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </button>
                <a href='/' className='navbar-brand'>
                    <img
                        src='https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/9fdfae942131961bc5751bd4ceea01ba.jpg'
                        width='60px'
                        height='35px'
                        alt=''
                    />
                    {/* <i className="fa fa-snowflake-o mr-2" aria-hidden="true"/>Test Fram React */}
                </a>
                <button type='button' className='navbar-toggler' data-toggle='collapse' data-target='#navbarCollapse'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse justify-content-between' id='navbarCollapse'>
                    <div className='navbar-nav'>
                    </div>
                    <form className='form-inline'>
                        <div className='input-group'>
                            <input type='text' className='form-control' width='100' placeholder='Search' />
                            <div className='input-group-append'>
                                <button type='button' className='btn btn-secondary' style={{ background: 'red', border: 'none' }}>
                                    <i className='fa fa-search'></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
