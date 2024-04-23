import React from 'react';
import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function ImageModal({ modalIsOpen, toggle, url }) {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggle}
        style={customStyles}
        contentLabel="Example Modal"
        className={css.modal}
      >
        <img className={css.img} src={url} alt="1" />
      </Modal>
    </div>
  );
}
