import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'


const Dashboard = () => {
    const [data, setData] = useState<any>()

    useEffect(() => {
        fetchData()
    }, [])
    

    const fetchData = async () => {
        try {
            const result = await axios('https://60abc0b05a4de40017ccaccf.mockapi.io/api/employess')
            setData(result.data)
        } catch (error) {
            console.log('Failed to load API', error)
        }
    }

  return (
    <div className="row mt-3">
      <div className="col-md-6 col-lg-3 mt-3">
        <div className="card-stats card">
          <div className="card-body">
            <div className="row">
              <div className="col-5">
              <i className="fa fa-dollar" aria-hidden="true" style={{fontSize: '74px',color: 'orange'}}></i>
              </div>
              <div className="col-7">
                <div className="numbers">
                  <p className="card-category">Number</p>
                  <h3 className="card-title">0
                  {/* {data?.map((item: any) => {
                            return (
                                <div key={item.id}>{item.id}</div>
                            )
                        })} */}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="stats">
              <i className="fa fa-cog" aria-hidden="true"></i> Recently Update
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 mt-3">
        <div className="card-stats card">
          <div className="card-body">
            <div className="row">
              <div className="col-5">
                <i className="fa fa-cart-arrow-down" aria-hidden="true" style={{fontSize: '74px',color: 'lightcoral'}}></i>
              </div>
              <div className="col-7">
                <div className="numbers">
                  <p className="card-category">Number</p>
                  <h3 className="card-title">0</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="stats">
              <i className="fa fa-cog" aria-hidden="true"></i> Recently Update
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 mt-3">
        <div className="card-stats card">
          <div className="card-body">
            <div className="row">
              <div className="col-5">
                <i className="fa fa-location-arrow" aria-hidden="true" style={{fontSize: '74px',color: 'blueviolet'}}></i>
              </div>
              <div className="col-7">
                <div className="numbers">
                  <p className="card-category">Number</p>
                  <h3 className="card-title">0</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="stats">
              <i className="fa fa-cog" aria-hidden="true"></i> Recently Update
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 mt-3">
        <div className="card-stats card">
          <div className="card-body">
            <div className="row">
              <div className="col-5">
                <i className="fa fa-euro" aria-hidden="true" style={{fontSize: '74px',color: 'orangered'}}></i>
              </div>
              <div className="col-7">
                <div className="numbers">
                  <p className="card-category">Number</p>
                  <h3 className="card-title">0</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="stats">
              <i className="fa fa-cog" aria-hidden="true"></i> Recently Update
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="col-md-12 col-lg-12 mt-3">
      <div className="card-stats card">
          <div className="card-body">
            <div className="row">
              <div className="col-2">
                <i className="fa fa-envelope" aria-hidden="true" style={{fontSize: '74px',color: 'yellowgreen'}}></i>
              </div>
              <div className="col-10">
                <div className="numbers">
                  <p className="card-category">Number</p>
                  <h3 className="card-title">0</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="stats">
              <i className="fa fa-cog" aria-hidden="true"></i> Recently Update
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-6 mt-3">
      <div className="card-stats card">
          <div className="card-body">
            <div className="row">
              <div className="col-5">
                <i className="fa fa-archive" aria-hidden="true" style={{fontSize: '74px',color: 'brown'}}></i>
              </div>
              <div className="col-7">
                <div className="numbers">
                  <p className="card-category">Number</p>
                  <h3 className="card-title">0</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="stats">
              <i className="fa fa-cog" aria-hidden="true"></i> Recently Update
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-6 mt-3">
      <div className="card-stats card">
          <div className="card-body">
            <div className="row">
              <div className="col-5">
                <i className="fa fa-upload" aria-hidden="true" style={{fontSize: '74px',color: 'lightseagreen'}}></i>
              </div>
              <div className="col-7">
                <div className="numbers">
                  <p className="card-category">Number</p>
                  <h3 className="card-title">0</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="stats">
              <i className="fa fa-cog" aria-hidden="true"></i> Recently Update
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
