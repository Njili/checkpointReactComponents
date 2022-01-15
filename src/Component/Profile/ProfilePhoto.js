import React from 'react'
import './ProfilePhoto.css';

const ProfilePhoto = () => {
    return (
        <div className="card cadre" style={{width: '18rem'}}>
        <img className="card-img-top" src="/imageProfile.jpg" alt="Card image cap" />
        <div className="card-body">
          <p className="card-text photo">PhotoProfile</p>
        </div>
      </div>
    )
}

export default ProfilePhoto
