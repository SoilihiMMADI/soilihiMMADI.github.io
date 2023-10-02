import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import './index.scss'
import MyButtonClose from '../MyButtonClose'

const MyModal = ({ imgButton, children, title, delay }) => {
  const [showModal, setShowModal] = useState(false)

  const handleShow = () => setShowModal(true)
  const handleClose = () => setShowModal(false)
  return (
    <>
      <div
        className="project-img-title"
        data-aos="fade-up"
        data-aos-delay={delay}
      >
        <div className="project-img shadow" onClick={handleShow}>
          <img src={imgButton} alt="projet" />
        </div>
        <h3 className="project-title mt-4">{title}</h3>
      </div>
      <Modal show={showModal} scrollable={true} onHide={handleClose}>
        <Modal.Header closeButton={false}>
          <Modal.Title>{title}</Modal.Title>
          <MyButtonClose onClose={handleClose} />
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  )
}

export default MyModal
