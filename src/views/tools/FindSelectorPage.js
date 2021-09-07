import React, { useState } from 'react';
import validUrl from 'valid-url';
import { Form, Row, Col, Image } from 'react-bootstrap';
import { Button, CircularProgress } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import SearchIcon from '@material-ui/icons/Search';
import AssistantIcon from '@material-ui/icons/Assistant';

import getSelector from '../../services/findSelector';
import ScanRankingsComponent from './ScanRankingsComponent';
import explainer from '../../assets/images/explainer.jpg';

const FindSelector = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useState('');
    const [textArea, setTextArea] = useState('');
    const [selector, setSelector] = useState('');

    const validateForm = () => {
        return url.length > 0 && textArea.length > 0;
    };

    const handleSubmit = () => {
        const textArray = textArea.replace(/\r\n/g, '\n').split('\n');
        setLoading(true);
        setErrorMessage('');
        setSelector('');

        if (!url || !validUrl.isUri(url)) {
            setErrorMessage('Please enter valid url.');
            setLoading(false);
            return;
        }

        (async () => {
            try {
                const foundSelector = await getSelector(url, textArray);
                setSelector(foundSelector);
            } catch (error) {
                setErrorMessage(error.message);
            } finally {
                setLoading(false);
            }
        })();
    };

    const handleSetDefault = () => {
        setUrl('https://webscraper.io/test-sites/e-commerce/allinone/phones/touch');
        setTextArea('Nokia 123' + '\n' + 'LG Optimus' + '\n' + 'Samsung Galaxy');
    };

    return (
        <div className="FindSelector" data-testid="FindSelector">
            <Row>
                <Col>
                    <p>
                        Provide url link to a website and list of relevant items. It will search through the website and return the most
                        statistically relevant selector which can be then used for Get Rankings.
                    </p>

                    <Form>
                        <Form.Group controlId="url">
                            <Form.Label>Url</Form.Label>
                            <Form.Control type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="items">
                            <Form.Label>Relevant items </Form.Label>
                            <Form.Control as="textarea" rows={3} value={textArea} onChange={(e) => setTextArea(e.target.value)} />
                            <Form.Text className="text-muted">Separate by new line. Case insensitive.</Form.Text>
                        </Form.Group>
                        {!loading && (
                            <>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    disabled={!validateForm()}
                                    onClick={handleSubmit}
                                    startIcon={<SearchIcon />}
                                >
                                    Find Selector
                                </Button>
                                <Button variant="contained" onClick={handleSetDefault} startIcon={<AssistantIcon />}>
                                    Set test data
                                </Button>
                            </>
                        )}
                    </Form>
                    {loading && <CircularProgress />}
                    {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

                    {selector && (
                        <div>
                            <Alert severity="success">
                                <p>
                                    <strong>
                                        Selector found! <br />
                                    </strong>
                                    Url: <a href={url}>{url}</a> <br />
                                    Selector: {selector}
                                </p>
                            </Alert>

                            <h4>Get Rankings:</h4>
                            <ScanRankingsComponent url={url} selector={selector} />
                        </div>
                    )}
                </Col>
                <Col lg={6}>
                    <Image src={explainer} alt="explainer" fluid />
                </Col>
            </Row>
        </div>
    );
};

export default FindSelector;
