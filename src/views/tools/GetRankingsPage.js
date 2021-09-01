import React, { useState } from 'react';
import { Row, Col, Card, Form, Button, Alert, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { API_SERVER } from '../../config/constant';

const GetRankingsPage = () => {
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useState('');
    const [selector, setSelector] = useState('');
    const [items, setItems] = useState([]);

    const validateForm = () => {
        return url.length > 0 && selector.length > 0;
    };

    const handleSubmit = async () => {
        setLoading(true);

        try {
            const res = await axios.post(API_SERVER + 'scrape/get-rankings', {
                url,
                selector
            });
            setItems(res.data);
        } catch (error) {
            console.error(error.response.data);
            setMessage(JSON.stringify(error.response.data));
        } finally {
            setLoading(false);
        }
    };

    const handleClick = () => {
        setUrl('https://webscraper.io/test-sites/e-commerce/allinone/phones/touch');
        setSelector('html>body>div>div>div>div>div>div>div>div>h4>a:nth-of-type(1)');
    };
    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Get Rankings</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <p>
                                Provide url link to a website and selector targeting relevant items. It renders a full web page within
                                browser in the background, gets the list of items and display items ranking list. Since a full web page is
                                loaded within the virtual browser, the whole process might take a while.
                            </p>

                            <Form>
                                <Form.Group controlId="url">
                                    <Form.Label>Url</Form.Label>
                                    <Form.Control type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
                                </Form.Group>
                                <Form.Group controlId="selector">
                                    <Form.Label>Selector</Form.Label>
                                    <Form.Control type="text" value={selector} onChange={(e) => setSelector(e.target.value)} />
                                </Form.Group>
                                {!loading && (
                                    <Button type="submit" disabled={!validateForm()} onClick={handleSubmit}>
                                        Get Rankings
                                    </Button>
                                )}
                                {!loading && (
                                    <Button variant="secondary" size="sm" onClick={handleClick}>
                                        Set default test data
                                    </Button>
                                )}
                                {loading && <Spinner animation="border" role="status"></Spinner>}
                                {message && <Alert variant="danger">{message}</Alert>}
                            </Form>
                            {items.length > 0 ? (
                                <Alert variant="success">
                                    <p>Rankings:</p>
                                    <ol>
                                        {items.map((el, i) => (
                                            <li key={i}>{el}</li>
                                        ))}
                                    </ol>
                                </Alert>
                            ) : (
                                ''
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default GetRankingsPage;
