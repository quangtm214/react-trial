import React, { Component, useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { Link } from 'react-router-dom';
import { Card, CardTitle, Col, Container, Icon, Row } from 'react-materialize';

function FilmsPresentation({ Films }) {
    console.log(Films)
    const { theme } = useContext(ThemeContext)
    return (
        <Container >
            <Row>
                {
                    Films.map((Film) => (
                        <Col s={4} key={Film.id}>
                            <Card
                                style={{ backgroundColor: theme.backgroundcolor, color: theme.color }}
                                header={<CardTitle image={Film.image}></CardTitle>}
                                revealIcon={<Icon>more_vert</Icon>}
                            >
                                <Link to={`/detail/${Film.id}`} style={{ backgroundColor: theme.backgroundcolor, color: theme.color }}>
                                    <p>{Film.title}</p>
                                    <div >
                                        <h6 className=' text-truncate'>{Film.title}</h6>
                                        <p>{Film.year}</p>
                                        <p className='mb-0'>{Film.nation}</p>
                                    </div>
                                </Link>
                            </Card>

                        </Col>
                    ))
                }
            </Row>
        </Container >
    );

}

export default FilmsPresentation;
