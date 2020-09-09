import React from 'react';
import Overview from './Overview';
import Repos from './Repos';
import People from './People';

const viewBtn = {
  marginTop: "20px"
}
const baseUrl = 'https://github.com/';

const UserProfile = ({ userDetails, repos, starred, followers, followings }) => {
  let url = baseUrl + userDetails.login;
  return (
    <div style={{ marginBottom: "100px" }}>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
          <div className="card">
            <div className="card-header">
              {userDetails.name}
            </div>
            <div className="card-body">
              <img className="thumbnail" style={{ width: "100%", borderRadius: "4px" }} src={userDetails.avatar_url} alt="user_avatar" />
              <br />
              <a className="btn btn-primary btn-block" rel="noopener noreferrer" style={{ marginTop: "10px" }} href={userDetails.html_url} target="_blank">View Profile</a>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-9">
          <div className="card">
            <div className="card-header">
              User Statistics
            </div>
            <div className="card-body">
              <Overview userDetails={userDetails} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
