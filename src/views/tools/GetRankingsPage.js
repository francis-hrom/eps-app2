import React from 'react';
import GetRankingsComponent from './GetRankingsComponent';

import { Row, Col, Image } from 'react-bootstrap';
import explainer from '../../assets/images/explainer.jpg';

const GetRankingsPage = () => (
    <div className="GetRankingsPage" data-testid="GetRankingsPage">
        <Row>
            <Col>
                <GetRankingsComponent />
            </Col>
            <Col lg={6}>
                <Image src={explainer} alt="explainer" fluid />
            </Col>
        </Row>
    </div>
);

export default GetRankingsPage;
