import { render } from '@testing-library/react'
import React from 'react'
import Card from './Card'

export default class CardContainer extends React.Component {

    state = {
        characters: [],
        randomCharacter: {}
    }

    componentDidMount() {
        fetch("https://rickandmortyapi.com/api/character/")
            .then(response => response.json())
            .then(data => this.setState({
                characters: data.results,
                randomCharacter: data.results[this.getRandomInt(data.results.length)]
            }))
    }

    getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    }

    makeRandomCharacter = () => {
        this.setState({randomCharacter: this.stateCharacters[this.getRandomInt(this.state.characters.length)]})
    }
    
    render() {
        return (
            <div>
                <Card character={this.state.randomCharacter} makeRandomCharacter={this.makeRandomCharacter}/>
            </div>
        )
    }
}
