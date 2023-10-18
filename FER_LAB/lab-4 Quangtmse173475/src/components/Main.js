import React, { Component } from 'react';
import { Films } from '../shared/ListOfFilms';
import FilmsPresentation from './FilmsPresentation';

class Main extends Component {
    constructor() {
        super()
        this.state = {
            films: Films
        }
    }
    render() {
        return (
            <FilmsPresentation Films={this.state.films} />
        );
    }
}

export default Main;
