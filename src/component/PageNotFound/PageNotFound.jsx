import React from 'react'
import { Link } from 'react-router-dom';
import './PageNotFound.css';

export default function PageNotFound() {
    return (
        <div className="notfound-container">
          <div className="notfound-content">
            <h1 className="notfound-title">404</h1>
            <p className="notfound-text">Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" className="notfound-link">
              Go Back Home
            </Link>
            
          </div>
        </div>
      );
}
