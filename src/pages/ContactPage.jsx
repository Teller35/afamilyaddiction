import React, { useRef, useState } from "react";
import { Card, Form, InputGroup, Alert } from "react-bootstrap";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const [validated, setValidated] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
    .sendForm(
           "service_mjl1bpi",
            "template_5sg3lcd",
            "#my_form",
            "hGWjXV8PHxjEUqsuV",
    )
    .then(
      () => {
        setAlertVisible(true);
        setValidated(false);
        e.target.reset();
      },
      (error) => {
        alert("Oh no your story did not send.", error)
      }
    )
  }

  const handleFormSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      sendEmail(event);
    }
    setValidated(true);
  }

    return (
      <>
      <Alert show={alertVisible} style={{ width: "40rem" }} className="m-auto AlertCard">
        <Alert.Heading className="AlertCardHead">Congrats!</Alert.Heading>
        <p className="AlertCardBody">
        Thank you for sharing. Your story is on the way. 
        </p>
        <div className="d-flex justify-content-end">
          <button onClick={() => setAlertVisible(false)} className="MyButton">
            Close me
          </button>
        </div>
      </Alert>
   <div>
     <h1 className="fontColor p-3 text-center">Tell me your story!</h1>
        <Card className="Card">
      <Card.Body className="CardContact">
        <Form
        noValidate
        ref={form}
        onSubmit={handleFormSubmit}
        validated={validated}
        id="my_form"
        >
      <InputGroup hasValidation className="mb-3">
        <Form.Control
          placeholder="What is your name?"
          type="text"
          name="user_name"
          required
        />
        <Form.Control.Feedback type="invalid">
          Please enter your name.
        </Form.Control.Feedback>
      </InputGroup>
      <InputGroup  className="mb-3">
        <Form.Control
          placeholder="What is your email?"
          type="text"
          name="user_email"
          required
        />
        <Form.Control.Feedback type="invalid">
        Please enter an email.
       </Form.Control.Feedback>
      </InputGroup>
      <InputGroup  className="mb-3">
        <Form.Control
          as="textarea"
          placeholder="Tell me your story!"
          type="text"
          name="message"
          required
        />
        <Form.Control.Feedback type="invalid">
        Please tell me your story.
      </Form.Control.Feedback>
      </InputGroup>
      <button className="MyButton" as="input" type="submit"  >Submit</button>
      </Form>
      </Card.Body>
    </Card>
</div>
    </>
    );
};

export default Contact;