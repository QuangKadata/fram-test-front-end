import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'

import ReactPaginate from 'react-paginate'

import '../styles/employes-styles.scss'

const itemOfPage = 5

function Employess() {
    const [data, setData] = useState<any>()
    const [currentPage, setCurrentPage] = useState<number>(0)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const result = await axios('https://60abc0b05a4de40017ccaccf.mockapi.io/api/employess')
            setData(result.data)
        } catch (error) {
            console.log('error', error)
        }
    }

    const addPerson = async () => {
        try {
            const person = [...data]
            const result = await axios.post('https://60abc0b05a4de40017ccaccf.mockapi.io/api/employess')
            if (result.status === 200 || result.status === 201) {
                person.push(result.data)
                setData(person)
                alert('Create Successfully !')
            } else alert('Create failed')
        } catch (error) {
            alert('Create failed')
            console.log('error', error)
        }
    }

    const handelPagination = (data: any) => {
        let selected = data.selected
        setCurrentPage(selected)
    }

    return (
        <Fragment>
            <div className='card' style={{ padding: '10px' }}>
                <div style={{padding: '20px'}}><button className="btn btn-success" style={{position: 'absolute',right: '10px',top: '5px',backgroundColor: 'red',border: 'none'}} onClick={addPerson}><i className="fa fa-plus mr-1" aria-hidden="true"/>NEW</button></div>
                <table className='table table-bordered table-hover' style={{ border: '1px solid #fff' }}>
                
                    <thead>
                        <tr style={{ color: 'red' }}>
                            <th>
                                <i className='fa fa-sort mr-1 text-dark' aria-hidden='true' />
                                Name
                            </th>
                            <th>
                                <i className='fa fa-sort mr-1 text-dark' aria-hidden='true' />
                                Email
                            </th>
                            <th>
                                <i className='fa fa-sort mr-1 text-dark' aria-hidden='true' />
                                Position
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.slice(currentPage * itemOfPage, (currentPage + 1) * itemOfPage)?.map((item: any) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.position}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

                {data?.length && (
                    <ReactPaginate
                        previousLabel={'<'}
                        nextLabel={'>'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={Math.ceil(data?.length / itemOfPage)}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handelPagination}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                    />
                )}
            </div>
        </Fragment>
    )
}
export default Employess
