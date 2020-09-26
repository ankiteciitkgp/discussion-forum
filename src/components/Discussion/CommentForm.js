import React, { useState } from 'react';
import { Form, Modal, Button } from 'react-bootstrap';
import { getCookie, setCookie } from '../Utils/CookieUtil';

export default function CommentForm({ currTopic, refreshComments }) {
    const [comment, setComment] = useState('');
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSave = (e) => {
        debugger;
        if (name == '') {
            alert("Please enter a valid name");
            return;
        }
        setCookie('USER_NAME', name, 10000);
        handleClose();
        submitComment(e);
    }
    const resetForm = () => {
        setComment('');
    };

    const submitComment = async (e) => {
        e.preventDefault();
        if (comment.length < 1) {
            alert("Please write some comment.");
            return;
        }
        e.preventDefault();
        if (!getCookie('USER_NAME')) {
            handleShow();
            return;
        }
        const name = getCookie('USER_NAME');
        try {
            await fetch('/api/dboard/comment/' + currTopic.id, {
                method: 'POST',
                body: JSON.stringify({
                    comment,
                    name
                }),
            });
            resetForm();
            refreshComments();
        } catch (err) {
            alert("An error occurred while adding comment");
        }
    };

    return (
        <form className="" onSubmit={submitComment}>
            <div className="row">
                <div className="col">
                    <div className="form-group">
                        <textarea
                            type="text"
                            name="comment"
                            value={comment}
                            className="form-control"
                            placeholder="Add your comment here"
                            onChange={(e) => setComment(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-lg-1">
                    <button type="submit" className="btn gs-btn-primary">
                        Comment
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
