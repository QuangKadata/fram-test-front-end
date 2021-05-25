import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'

import ReactPaginate from 'react-paginate'

import '../styles/employes-styles.scss'

const itemOfPage = 5

function Employess() {
    const [data, setData] = useState<any>()
    const [currentPage, setCurrentPage] = useState<number>(0)
    const [isForm, setShowForm] = useState(false)
    const [valuesForm, setValuesForm] = useState({ name: '', email: '', position: '' })
    const [isValidate, setValidate] = useState(false)

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

    const onCloseForm = () => {
        setShowForm(false)
        setValidate(false)
        setValuesForm({ name: '', email: '', position: '' })
    }

    const onchangeForm = (key: string, value: any) => {
        setValuesForm((s) => ({ ...s, [key]: value }))
    }
    console.log('valuesForm', valuesForm)

    const addPerson = async () => {
        try {
            setValidate(true)
            if (valuesForm.name && valuesForm.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valuesForm.email) && valuesForm.position) {
                const person = [...data]
                const result = await axios.post('https://60abc0b05a4de40017ccaccf.mockapi.io/api/employess', { ...valuesForm })
                if (result.status === 200 || result.status === 201) {
                    person.push(result.data)
                    setData(person)
                    onCloseForm()
                    setTimeout(() => {
                        alert('Create Successfully !')
                    }, 100)
                } else alert('Create failed')
            }
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
            <div className='card' style={{ padding: '10px', marginTop: '10px', borderRadius: '6px' }}>
                <h4><i className="fa fa-user-plus mr-2 ml-1" style={{ color: 'green'}} aria-hidden="true"></i>Employess Table</h4>
                {!isForm && (
                    <div style={{ padding: '5px' }}>
                        <button className='ButtonAddNew btn btn-success mt-2' onClick={() => setShowForm(true)}>
                            <i className='fa fa-plus mr-1' aria-hidden='true' />
                            NEW
                        </button>
                    </div>
                )}

                {isForm && (
                    <div className='form'>
                        <div className='text-box'>
                            <div className='textbox-item'>
                                <input
                                    className='inputTypeSubmit form-control'
                                    type='text'
                                    placeholder='Ex : Dang Vinh Quang'
                                    value={valuesForm.name}
                                    onChange={(e) => onchangeForm('name', e.target.value)}
                                />
                                {isValidate && !valuesForm.name && <p className='mess-validate'>&#10060; Please enter your name !</p>}
                            </div>
                            <div className='textbox-item'>
                                <input
                                    className='inputTypeSubmit form-control'
                                    type='text'
                                    placeholder='Ex : Example@gmail.com'
                                    value={valuesForm.email}
                                    onChange={(e) => onchangeForm('email', e.target.value)}
                                />
                                {isValidate && (
                                    <p className='mess-validate'>
                                        {!valuesForm.email ? (
                                            <p className='mess-validate'>&#10060; Please enter job email!</p>
                                        ) : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valuesForm.email) ? (
                                            <p className='mess-validate'>&#9940; Please enter the correct email format!</p>
                                        ) : (
                                            ''
                                        )}
                                    </p>
                                )}
                            </div>
                            <div className='textbox-item'>
                                <input
                                    className='inputTypeSubmit form-control'
                                    type='text'
                                    placeholder='Ex : Front End Developer'
                                    value={valuesForm.position}
                                    onChange={(e) => onchangeForm('position', e.target.value)}
                                />
                                {isValidate && !valuesForm.position && <p className='mess-validate'>&#10060; Please enter job position!</p>}
                            </div>
                        </div>
                        <div className='action mt-2' style={{ transition: 'all 0.5s' }}>
                            <button className='cancel' onClick={onCloseForm}>
                                Cancel
                            </button>
                            <button className='save' onClick={addPerson}>
                                Save
                            </button>
                        </div>
                    </div>
                )}

                <table className='table table-bordered table-hover TableEmloyess' style={{ border: '1px solid #fff' }}>
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
