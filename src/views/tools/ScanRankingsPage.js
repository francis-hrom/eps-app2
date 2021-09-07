import React from 'react';
import ScanRankingsComponent from './ScanRankingsComponent';

import { Row, Col, Image } from 'react-bootstrap';
import explainer from '../../assets/images/explainer.jpg';

const ScanRankingsPage = () => (
    <div className="ScanRankingsPage" data-testid="ScantRankingsPage">
        <Row>
            <Col>
                <ScanRankingsComponent />
            </Col>
            <Col lg={6}>
                <Image src={explainer} alt="explainer" fluid />
            </Col>
        </Row>
    </div>
);

export default ScanRankingsPage;
