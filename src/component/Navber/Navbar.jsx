import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Make sure to add a separate CSS file for better structure
import { Link } from 'react-router-dom';

export default function Navbar({isLogin,handelLogout,userName}) {
  const [navbarBackground, setNavbarBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBackground(true);
      } else {
        setNavbarBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // this return function is to do cleanup the EventListener scroll and delete it
    // the benifit of this function is when the component destroyed or re-render this function delete the EventLestner 
    // if you dont do this function over time this can lead to performance issues
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar navbar-expand-lg ${navbarBackground ? 'bg-dark' : 'bg-transparent'} fixed-top`}>
        <div className="container">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              {
                isLogin?<>
                    <li className="nav-item">
                        <Link className="nav-link" to="/content">Content</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/profile">{userName}</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={handelLogout} href="">Logout</a>
                    </li>
                </>
                :
                <>                
                    <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                    </li>
                </>
              }


            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
