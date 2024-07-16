import axios from 'axios';
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function AddForm() {
    const [data, setData] = useState({
        Director: "",
        Movie: "",
    });

    const SubmitForm = async (e) => {
        e.preventDefault();
        const { Director, Movie } = data;

        if (!Director || !Movie) {
            alert("Please fill out all fields.");
            return;
        }

        try {
            const response = await axios.post('http://localhost:4000/movies', data);
            setData({ Director: "", Movie: "" });
            alert("Movie added successfully!");
        } catch (error) {
            console.error('Error adding movie:', error);
            alert("Failed to add movie. Please try again.");
        }
    };

    return (
        <div>
            <Container className='mt-5'>
                <h1 className='text-dark text-center mt-5'>Director and Movies</h1>
                <Form>
                    <div className="d-flex flex-column align-items-center">
                        <Form.Group className="mb-3" controlId="formDirectorName">
                            <Form.Control
                                type="text"
                                placeholder="Director Name"
                                name='Director'
                                value={data.Director}
                                onChange={(e) => setData({ ...data, Director: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicMovieName">
                            <Form.Control
                                type="text"
                                placeholder="Movie Name"
                                name='Movie'
                                value={data.Movie}
                                onChange={(e) => setData({ ...data, Movie: e.target.value })}
                            />
                        </Form.Group>

                        <Button variant="success" type="submit" onClick={SubmitForm}>
                            Add
                        </Button>
                    </div>
                </Form>
            </Container>
        </div>
    );
}

export default AddForm;
