import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="page-wrap d-flex flex-row align-items-center" style={{marginTop: '200px'}}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12 text-center">
          <span className="display-1 d-block ">404</span>
          <div className="mb-4 lead">
            The page you are looking for was not found.
          </div>
          <Link to="/dashboard">
              back to dashboard</Link>
        </div>
      </div>
    </div>
  </div>
);

export default NotFound;
