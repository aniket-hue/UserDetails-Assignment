import React from 'react';
import { useHistory } from 'react-router';
import { useDataContext } from '../Context/DataContext';
import { lexographicallySortFunction } from '../utils';

export const UserDetailsPage = () => {
  const history = useHistory();
  let { userData } = useDataContext();

  const userId = Number(history.location.pathname.split('/')[2]);
  userData = userData[userId];

  return (
    <div className="container">
      <div id="user-details" className="container d-flex">
        <div className="card mt-2 mb-2">
          <div className="card-body">
            <h5 className="card-title text-primary">{userData.name}</h5>
            <h6>
              <span className="font-weight-bold">Address: </span>
              {(userData.address['street'], userData.address['city'])}
            </h6>
            <h6>
              <span className="font-weight-bold">Company: </span>
              {userData.company['name']}
            </h6>
            <h6>
              <span className="font-weight-bold">Email: </span> {userData.email}
            </h6>
            <h6>
              <span className="font-weight-bold">Phone: </span> {userData.phone}
            </h6>
            <h6>
              <span className="font-weight-bold">Username: </span>
              {userData.username}
            </h6>
            <h6>
              <span className="font-weight-bold">Website: </span>
              {userData.website}
            </h6>
          </div>

          <div id="post-list" className="container d-flex">
            <ul className="list-group list-group-flush">
              {userData.posts.sort(lexographicallySortFunction).map((post) => (
                <li className="list-group-item text-capitalize text-secondary">
                  {post}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
