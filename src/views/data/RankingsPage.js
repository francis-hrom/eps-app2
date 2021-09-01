import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

import RankingsTable from './RankingsTable';

const RankingsPage = () => {
    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Card>
                        <RankingsTable />
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default RankingsPage;
