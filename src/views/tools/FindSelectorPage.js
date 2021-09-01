import React, { useState } from 'react';
import { Row, Col, Card, Form, Button, Alert, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { API_SERVER } from '../../config/constant';

const FindSelectorPage = () => {
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useState('');
    const [textArea, setTextArea] = useState('');
    const [selector, setSelector] = useState('');

    const validateForm = () => {
        return url.length > 0 && textArea.length > 0;
    };

    const handleSubmit = async () => {
        const textArr = textArea.replace(/\r\n/g, '\n').split('\n');
        setLoading(true);

        try {
            const res = await axios.post(API_SERVER + 'scrape/find-selector', {
                url,
                textArr
            });
            setSelector(res.data);
        } catch (error) {
            console.error(error.response.data);
            setMessage(JSON.stringify(error.response.data));
        } finally {
            setLoading(false);
        }
    };

    const handleSetDefault = () => {
        setUrl('https://webscraper.io/test-sites/e-commerce/allinone/phones/touch');
        // eslint-disable-next-line
        setTextArea('Nokia 123' + '\n' + 'LG Optimus' + '\n' + 'Samsung Galaxy');
    };
    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Find Selector</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <p>
                                Provide url link to a website and list of relevant items. It will search through the website and return the
                                most statistically relevant selector which can be then used in Get Rankings.
                            </p>

                            <Form>
                                <Form.Group controlId="url">
                                    <Form.Label>Url</Form.Label>
                                    <Form.Control type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
                                </Form.Group>
                                <Form.Group controlId="items">
                                    <Form.Label>Relevant items </Form.Label>
                                    <Form.Control as="textarea" rows={5} value={textArea} onChange={(e) => setTextArea(e.target.value)} />
                                    <Form.Text className="text-muted">Separate by new line. Case insensitive.</Form.Text>
                                </Form.Group>
                                {!loading && (
                                    <Button type="submit" disabled={!validateForm()} onClick={handleSubmit}>
                                        Find Selector
                                    </Button>
                                )}
                                {!loading && (
                                    <Button variant="secondary" size="sm" onClick={handleSetDefault}>
                                        Set default test data
                                    </Button>
                                )}
                                {loading && <Spinner animation="border" role="status"></Spinner>}
                                {message && <Alert variant="danger">{message}</Alert>}
                            </Form>
                            {selector && <Alert variant="success">Selector: {selector}</Alert>}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default FindSelectorPage;
