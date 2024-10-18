import React from 'react'
import './Profile.css';
export default function Profile({userData}) {
    return (
        <div className="profile-container">
          <div className="profile-card">
            <h2 className="profile-title">User Profile</h2>
            <div className="profile-info">
              <label className="profile-label">Username:</label>
              <span className="profile-data">{userData.userName}</span>
            </div>
            <div className="profile-info">
              <label className="profile-label">Email:</label>
              <span className="profile-data">{userData.email}</span>
            </div>
          </div>
        </div>
      );
}
