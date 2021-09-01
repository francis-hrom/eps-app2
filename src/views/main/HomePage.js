import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

import RankingsBarDiscreteChart from './RankingsBarDiscreteChart';
import RankingsPieDonutChart from './RankingsPieDonutChart';
//import Card from '../../components/Card/MainCard';

const HomePage = () => {
    return (
        <React.Fragment>
            <Row>
                <Col md={9}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Welcome to EPS!</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <p>
                                EPS (Element Position Scanner) can be used to scan order of positions (rankings) of elements (items) from
                                any website.
                            </p>
                            <p>
                                Main inputs are url link to the target web page and CSS selector which targets the relevant items on that
                                specific web page.
                            </p>
                            <p>
                                Selector can be generated via Find Selector tool, where as input is provided target web site url and list of
                                relevant items (text). Then the tool visits the website and return the most statistically relevant selector.
                            </p>
                            <p> Example use case scenarios:</p>
                            <p>
                                Sales team is managing several partnerships. Part of the partnership deal is specification on what position
                                (rank) on the partners website will be the company's product/service listed. To check manually 100+ partner
                                websites is highly inefficient and possibly error prone. With usage of EPS the sales team can retrieve this
                                data easily and in addition get data about position of product/services of their competitors.
                            </p>
                            <p>
                                Another example would be a marketing / brand ambassador team of a major smartphone brand which is in charge
                                of brand awareness. They need to monitor positions (ranks) of their smartphone brands as well their
                                competitors on the major e-commerce websites.
                            </p>
                            <p>
                                For illustration purposes data about smartphone popularity (rankings) are already preloaded from the major
                                e-commerce websites (targets).
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body className="border-bottom">
                            <div className="row d-flex align-items-center">
                                <div className="col-auto">
                                    <i className="feather icon-zap f-30 text-c-green" />
                                </div>
                                <div className="col">
                                    <h3 className="f-w-300">126</h3>
                                    <span className="d-block text-uppercase">total targets monitored</span>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Body>
                            <div className="row d-flex align-items-center">
                                <div className="col-auto">
                                    <i className="feather icon-map-pin f-30 text-c-blue" />
                                </div>
                                <div className="col">
                                    <h3 className="f-w-300">1721</h3>
                                    <span className="d-block text-uppercase">total rankings collected on last attempt</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Rankings over time</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <RankingsBarDiscreteChart />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Rankings ranges </Card.Title>
                        </Card.Header>
                        <Card.Body className="text-center">
                            <RankingsPieDonutChart />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default HomePage;
