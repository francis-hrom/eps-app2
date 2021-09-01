import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

import TargetsTable from './TargetsTable';

const TargetsPage = () => {
    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Card>
                        <TargetsTable />
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default TargetsPage;
