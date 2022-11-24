import { useState,useContext } from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import { Context } from "../context";

export const FilterByFilename = () => {
    const [filename, setFilename] = useState('')

    const { getData } = useContext(Context);


    const onChange = (e)=>{
        setFilename(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        getData(filename)
    }

    return (
        <Container
            style={{
                marginTop: "1rem",
                marginBottom: "1rem",
            }}
        >
            <Form
                style={{
                    maxWidth: "30rem",
                    display: "flex",
                }}
                onSubmit={onSubmit}
            >
                <Row>
                    <Col xs={8}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>File Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter File Name"
                                value={filename}
                                onChange={onChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end"
                    }}>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};
