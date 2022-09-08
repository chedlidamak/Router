import React, {useState} from 'react'
import {Button, Form, Modal} from 'react-bootstrap';

const AddFilm = (props) => {
    const [show, setShow] = useState(false);
    const [inputs, setInputs] = useState([
      {
      Title: "",
      Description:"",
      Poster:"",
      Rating:""
    }])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange=(e)=>{
      setInputs({...inputs,[e.target.name]:e.target.value})
    }
    const handleSave=()=>{
      props.handleAddContact(inputs)
      setInputs(
        {
          Title: "",
          Description:"",
          Poster:"",
          Rating:""
        })
        handleClose()
}
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Film
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Film</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Film Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Titanic"
                name="Title"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Present the film"
                name='Description'
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>POSTER Url</Form.Label>
              <Form.Control
                type="text"
                placeholder="Put the poster url"
                name='Poster'
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="text"
                placeholder="Put the Rating"
                name='Rating'
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddFilm