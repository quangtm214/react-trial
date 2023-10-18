import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Films } from '../shared/ListOfFilms';
import { Button, Card, CardTitle, Container, Icon, Row } from 'react-materialize';
import { ThemeContext } from './ThemeContext';
import ModalCase from './ModalCase';


export default function Detail() {
    const userName = useParams();
    const film = Films.find(obj => {
        return obj.id == userName.id;
    });
    const { dark, theme, toggle } = useContext(ThemeContext)
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <Container>
                <Row>
                    <Card
                        header={<CardTitle image={film.image}></CardTitle>}
                        horizontal
                        style={{ backgroundColor: theme.backgroundcolor, color: theme.color }}
                    >
                        <div className='film-content'>
                            <h6 >{film.title}</h6>
                            <p>{film.year}</p>
                            <p>{film.nation}</p>
                            <p>{film.info}</p>
                        </div>
                        <a onClick={() => setIsOpen(true)} className="btn-large  waves-light play-button "
                        >
                            <i className="material-icons left play-icon">play_circle</i>
                            Play
                        </a>
                    </Card>

                </Row>
                <Row>
                    {isOpen && <ModalCase setIsOpen={setIsOpen} film={film} />}
                </Row>
            </Container>


        </div>
    )
}
