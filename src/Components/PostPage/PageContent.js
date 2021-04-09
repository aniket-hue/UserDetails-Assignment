import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDataContext } from '../../Context/DataContext';
import { lexographicallySortFunction } from '../../utils';
import { CreatePostModal } from './CreatePostModal';

export const PageContent = () => {
  const { userData } = useDataContext();
  const [openModal, setOpenModal] = useState(false);
  const [userId, setUserId] = useState(1);

  return (
    <>
      <div className="d-flex w-100 justify-content-center">
        <div className="d-flex mt-2 mb-2 flex-column w-75">
          {Object.values(userData).map((data) => (
            <div className="card mt-2 mb-2">
              <div className="card-body">
                <Link to={`/user/${data.id}`} className="text-decoration-none">
                  <h5 className="card-title text-primary">{data.name}</h5>
                </Link>
                <ul className="list-group list-group-flush">
                  {data.posts.sort(lexographicallySortFunction).map((post) => (
                    <li className="list-group-item text-capitalize text-secondary">
                      {post}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="d-flex justify-content-end mr-2 mb-2">
                <button
                  onClick={() => {
                    setOpenModal(true);
                    setUserId(data.id);
                  }}
                  className="btn btn-primary"
                >
                  Create Post
                </button>
              </div>
            </div>
          ))}
        </div>
        <CreatePostModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          userId={userId}
        />
      </div>
    </>
  );
};
