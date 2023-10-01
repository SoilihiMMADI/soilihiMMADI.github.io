import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import './index.scss'

const MyModal = ({ imgButton, children, title }) => {
  const [showModal, setShowModal] = useState(false)

  const handleShow = () => setShowModal(true)
  const handleClose = () => setShowModal(false)
  return (
    <>
      <div className="project-img-title">
        <div className="project-img" onClick={handleShow}>
          <img src={imgButton} alt="projet 1" />
        </div>
        <h3 className="project-title mt-4">{title}</h3>
      </div>
      <Modal show={showModal} scrollable={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  )
}

export default MyModal
