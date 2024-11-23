import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSpring, animated } from '@react-spring/web';


function ContactForm({ addContact, updateContact, currentContact }) {
  const [contact, setContact] = useState({ name: '', email: '', phone: '', message: '' });

  useEffect(() => {
    if (currentContact) {
      setContact(currentContact);
    } else {
      setContact({ name: '', email: '', phone: '', message: '' });
    }
  }, [currentContact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentContact) {
      updateContact(contact);
    } else {
      addContact(contact);
    }
    setContact({ name: '', email: '', phone: '', message: '' });
  };

  const formAnimation = useSpring({
    from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
  });

  return (
    <animated.div style={formAnimation}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label className='title-form'>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={contact.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className='title-form'>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className='title-form'>Phone</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            value={contact.phone}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className='title-form'>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            value={contact.message}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {currentContact ? 'Update Contact' : 'Add Contact'}
        </Button>
      </Form>
    </animated.div>
  );
}

export default ContactForm;