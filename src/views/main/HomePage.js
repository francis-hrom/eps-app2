import React from 'react';
import { Row, Col, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import RankingsBarDiscreteChart from './RankingsBarDiscreteChart';
import RankingsPieDonutChart from './RankingsPieDonutChart';
import explainer from '../../assets/images/explainer.jpg';
//import Card from '../../components/Card/MainCard';

const HomePage = () => {
    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Welcome to EPS!</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <p>
                                EPS (Element Position Scanner) is tool for businesses to efficiently monitor positions (rankings) of their
                                products (and their competitors) on other websites.
                            </p>
                            <p>
                                User provides <Link to="/targets">Targets</Link> - list of urls (web pages) and selectors (CSS) targeting
                                the relevant items on those web pages. EPS then opens these web pages one by one in a virtual web browser,
                                scans the positions (rankings) and saves them to database. Then the user (data analyst, marketer, sales
                                person etc.) can view them or download them for further analysis from <Link to="/rankings">Rankings</Link>.
                            </p>
                            <p>
                                Scannings of rankings can be setup according to the business needs (for example once per week, once per day
                                or several times per day).
                            </p>
                            <p>
                                Selector can be generated via <Link to="/find-selector">Find Selector</Link> tool, which helps users without
                                technical knowledge of HTML/CSS to find relevant Selector. User enters url (target web page) and list of
                                relevant items (text from the web page). Then EPS visits the web page, evaluates all possible options and
                                return the most statistically relevant selector, which can be then verified via{' '}
                                <Link to="/verify-selector">Verify Selector</Link> and saved to database (<Link to="/targets">Targets</Link>
                                ).
                            </p>
                            <p> Example use case scenarios:</p>
                            <ul>
                                <li>
                                    Sales team is managing several partnerships (resellers, distributors etc.). Part of the partnership deal
                                    is specification on what position (ranking) on the partners web page will be the company's
                                    product/service listed. To check manually 100+ partner web pages is highly inefficient and possibly
                                    error prone. With usage of EPS the sales team can retrieve this data easily and in addition get data
                                    about position of product/services of their competitors.
                                </li>
                                <li>
                                    Marketing / brand ambassador team of a major smartphone brand which is in charge of brand awareness.
                                    They need to monitor positions (rankings) of their smartphone brands as well their competitors on the
                                    major e-commerce websites.
                                </li>
                            </ul>
                            <p>
                                For illustration purposes data about smartphone popularity (rankings) are already preloaded from the major
                                e-commerce web pages (targets). <Link to="/targets">Targets Table</Link> has unlocked all features
                                (add/edit/delete/export) and reset to default values.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6}>
                    <Row>
                        <Image src={explainer} alt="explainer" fluid />
                    </Row>
                    {/* <Row>
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
                            </Card>
                        </Col>
                        <Col>
                            <Card>
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
                    </Row> */}
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
