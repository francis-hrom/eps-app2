import React from 'react';
import ScanRankingsComponent from './ScanRankingsComponent';

import { Row, Col, Image, Card } from 'react-bootstrap';
import explainer from '../../assets/images/explainer.jpg';

const ScanRankingsPage = () => (
    <div className="ScanRankingsPage" data-testid="ScantRankingsPage">
        <Card>
            <Card.Body>
                <Row>
                    <Col>
                        <ScanRankingsComponent />
                    </Col>
                    <Col lg={6}>
                        <Image src={explainer} alt="explainer" fluid />
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    </div>
);

export default ScanRankingsPage;
