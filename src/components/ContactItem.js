import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { useSpring, animated } from '@react-spring/web';

function ContactItem({ contact, deleteContact, editContact }) {
  const [props, set] = useSpring(() => ({ scale: 1 }));

  const handleDelete = () => {
    set({ scale: 0 });
    setTimeout(() => deleteContact(contact.id), 200);
  };

  return (
    <animated.div style={props}>
      <ListGroup.Item
        className="d-flex justify-content-between align-items-center"
        onMouseEnter={() => set({ scale: 1.05 })}
        onMouseLeave={() => set({ scale: 1 })}
      >
        <div>
          <h5>{contact.name}</h5>
          <p className="mb-0">Email: {contact.email}</p>
          <p className="mb-0">Phone: {contact.phone}</p>
          <p className="mb-0">Message: {contact.message}</p>
        </div>
        <div>
          <Button variant="info" className="me-2" onClick={() => editContact(contact)}>
            Edit
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </ListGroup.Item>
    </animated.div>
  );
}

export default ContactItem;