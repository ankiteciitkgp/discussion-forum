import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { getCookie, setCookie } from '../Utils/CookieUtil';

export default function TopicForm({ refreshTopics }) {
    const [topic, setTopic] = useState('');
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSave = () => {
        debugger;
        if (name == '') {
            alert("Please enter a valid name");
            return;
        }
        setCookie('USER_NAME', name, 10000);
        handleClose();
    }
    const resetForm = () => {
        setTopic('');
    };

    const submitTopic = async (e) => {
        e.preventDefault();
        if (topic.length < 1) {
            alert("Empty discussion topic.");
            return;
        }
        if (!getCookie('USER_NAME')) {
            handleShow();
            return;
        }
        const name = getCookie('USER_NAME');

        try {
            await fetch('/api/dboard/topic', {
                method: 'POST',
                body: JSON.stringify({
                    topic,
                    name
                }),
            });
            resetForm();
            refreshTopics();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form className="" onSubmit={submitTopic}>
            <div className="row">
                <div className="col">
                    <div className="form-group">
                        <textarea
                            type="text"
                            name="topic"
                            value={topic}
                            className="form-control"
                            placeholder="Start a new discussion topic here!"
                            onChange={(e) => setTopic(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-lg-2">
                    <button type="submit" className="btn gs-btn-primary w100">
                        New Topic
                    </button>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Introduce yourself!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Please provide your name</Form.Label>
                        <Form.Control value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Enter name" />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </form>
    );
}
