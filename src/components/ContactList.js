import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ContactItem from './ContactItem';
import { useTransition, animated } from '@react-spring/web';

function ContactList({ contacts, deleteContact, editContact }) {
  const transitions = useTransition(contacts, {
    from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    leave: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    keys: contact => contact.id,
  });

  return (
    <ListGroup>
      {transitions((style, contact) => (
        <animated.div style={style}>
          <ContactItem
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
            editContact={editContact}
          />
        </animated.div>
      ))}
    </ListGroup>
  );
}

export default ContactList;