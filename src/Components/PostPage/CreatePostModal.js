import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { postNewPost } from '../../api';
import { useDataContext } from '../../Context/DataContext';

export const CreatePostModal = ({ openModal, setOpenModal, userId }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const { setUserData } = useDataContext();

  const createPost = async () => {
    const res = await postNewPost(userId, title, body);
    if (res) {
      setOpenModal(false);
      setUserData((prevData) => {
        return {
          ...prevData,
          [userId]: {
            ...prevData[userId],
            posts: [...prevData[userId]['posts'], title],
          },
        };
      });
    }
  };

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const bodyHandler = (e) => {
    setBody(e.target.value);
  };

  return (
    <Modal show={openModal}>
      <Modal.Header>
        <Modal.Title>Create Post</Modal.Title>
        <button
          type="button"
          className="close"
          onClick={() => setOpenModal(false)}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </Modal.Header>
      <Modal.Body>
        <input
          onChange={titleHandler}
          type="text"
          className="form-control"
          placeholder="Enter Title"
          value={title}
        />
        <textarea
          onChange={bodyHandler}
          className="form-control mt-3"
          placeholder="Enter Body"
          value={body}
        />
      </Modal.Body>
      <Modal.Footer>
        <button type="button" className="btn btn-success" onClick={createPost}>
          Submit
        </button>
      </Modal.Footer>
    </Modal>
  );
};
