import { Offcanvas } from 'react-bootstrap';

function CustomOffcanvas(props) {
  return (
    <Offcanvas show={props.show} onHide={props.onHide} fullscreen>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>{props.title}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {props.children}
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default CustomOffcanvas;
