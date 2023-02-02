import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';

function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = (imgSrc) => {
    setModalImage(imgSrc);
    setShowModal(true);
  };

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect} className="fullscreen">
        <Carousel.Item>
          <div style={{ width: "100%", height: "80%", overflow: "hidden" }}>
            <img
              className="d-block w-100"
              src={props.img}
              alt="First slide"
              style={{ width: "100%", height: "auto" }}
              onClick={() => handleShowModal(props.img)}
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ width: "100%", height: "80%", overflow: "hidden" }}>
            <img
              className="d-block w-100"
              src={props.img2}
              alt="Second slide"
              style={{ width: "100%", height: "auto" }}
              onClick={() => handleShowModal(props.img2)}
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ width: "100%", height: "80%", overflow: "hidden" }}>
            <img
              className="d-block w-100"
              src={props.img3}
              alt="Third slide"
              style={{ width: "100%", height: "auto" }}
              onClick={() => handleShowModal(props.img3)}
            />
          </div>
        </Carousel.Item>
      </Carousel>
      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Body>
          <img src={modalImage} alt="" style={{ width: "100%", height: "auto" }} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ControlledCarousel;
