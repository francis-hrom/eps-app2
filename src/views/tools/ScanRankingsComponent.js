import React, { useState } from 'react';
import validUrl from 'valid-url';
import Form from 'react-bootstrap/Form';
import { Button, CircularProgress } from '@material-ui/core';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import AssistantIcon from '@material-ui/icons/Assistant';
import Alert from '@material-ui/lab/Alert';

import scanRankings from '../../services/scanRankings';

const ScanRankingsComponent = (props) => {
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useState(props.url || 'https://webscraper.io/test-sites/e-commerce/allinone/phones/touch');
    const [selector, setSelector] = useState(props.selector || 'html>body>div>div>div>div>div>div>div>div>h4>a:nth-of-type(1)');
    const [items, setItems] = useState([]);

    const validateForm = () => {
        return url.length > 0 && selector.length > 0;
    };

    const handleSubmit = () => {
        setLoading(true);
        setErrorMessage('');
        setItems([]);

        if (!url || !validUrl.isUri(url)) {
            setErrorMessage('Please enter valid url.');
            setLoading(false);
            return;
        }

        (async () => {
            try {
                const rankingItems = await scanRankings(url, selector);
                setItems(rankingItems);
            } catch (error) {
                setErrorMessage(error.message);
            } finally {
                setLoading(false);
            }
        })();
    };

    const handleSetDefault = () => {
        setUrl('');
        setSelector('');
    };

    return (
        <div className="GetRankings" data-testid="GetRankings">
            <p>
                Provide url link to a web page and selector targeting relevant items. It access the web page, get the list of items and
                display the rankings list. It renders a full web page within a browser so the whole process might take a while.
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
                    <>
                        <Button
                            variant="contained"
                            color="primary"
                            disabled={!validateForm()}
                            onClick={handleSubmit}
                            startIcon={<LocationSearchingIcon />}
                        >
                            Scan Rankings
                        </Button>
                        <Button variant="contained" onClick={handleSetDefault} startIcon={<AssistantIcon />}>
                            Remove test data
                        </Button>
                    </>
                )}
            </Form>
            {loading && <CircularProgress />}
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

            {items.length > 0 && (
                <Alert severity="success">
                    <p>
                        Url:{' '}
                        <a href={url} rel="noopener noreferrer">
                            {url}
                        </a>
                        <br />
                        Rankings: <br />
                        <ol>
                            {items.map((el, i) => (
                                <li key={i}>{el}</li>
                            ))}
                        </ol>
                    </p>
                </Alert>
            )}
        </div>
    );
};

export default ScanRankingsComponent;
