import { Link, Outlet } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <Link className="navbar-brand" to="/">HOTELS WEB SITE</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">Inicio</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/sobre-nosotros">Sobre Nosotros</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/hotels/all">Hoteles</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/guaviare">Guaviare</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>


      <Outlet />
    </>
  )
}
