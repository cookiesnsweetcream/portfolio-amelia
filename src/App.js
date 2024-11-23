import React, { useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Footer } from './components/Footer';
import { Project } from "./components/Project";
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [currentContact, setCurrentContact] = useState(null);

  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const getInTouchRef = useRef(null); // Tambahkan referensi untuk Get In Touch

  const addContact = (contact) => {
    setContacts([...contacts, { ...contact, id: Date.now() }]);
  };

  const updateContact = (updatedContact) => {
    setContacts(contacts.map(contact => contact.id === updatedContact.id ? updatedContact : contact));
    setCurrentContact(null);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const editContact = (contact) => {
    setCurrentContact(contact);
  };

  const handleNavigate = (section) => {
    if (section === 'skills' && skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'projects' && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'get-in-touch' && getInTouchRef.current) { // Tambahkan navigasi untuk Get In Touch
      getInTouchRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <NavBar onNavigate={handleNavigate} />
      <Banner />
      <div ref={skillsRef}>
        <Skills /> <br />
      </div>
      <div ref={projectsRef}>
        <Project />
      </div>
      <section ref={getInTouchRef} id="get-in-touch" className="contact-section py-5"> {/* Tambahkan ID */}
        <Container>
          <h2 className="text-center mb-5 font-weight-bold bg get-in-touch">Get In Touch</h2>
          <Row className="justify-content-center">
            <Col lg={5} className="mb-4 mb-lg-0">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-5">
                  <h3 className="card-title mb-4">Contact Us</h3>
                  <ContactForm
                    addContact={addContact}
                    updateContact={updateContact}
                    currentContact={currentContact}
                  />
                </div>
              </div>
            </Col>
            <Col lg={7}>
              <div className="card border-0 shadow-sm">
                <div className="card-body p-5">
                  <h3 className="card-title mb-4">Contact List</h3>
                  <ContactList
                    contacts={contacts}
                    deleteContact={deleteContact}
                    editContact={editContact}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
}

export default App;