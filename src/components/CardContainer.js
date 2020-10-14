import { render } from '@testing-library/react'
import React from 'react'
import Card from './Card'

export default class CardContainer extends React.Component {

    state = {
        characters: [],
        blockedChars: [],
        randomCharacter: {}
    }

    componentDidMount() {
        fetch("http://localhost:3000/singles")
            .then(response => response.json())
            .then(data => this.setState({
                characters: data,
                randomCharacter: data[this.getRandomInt(data.length)]
            }))
    }

    getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    }

    makeRandomCharacter = () => {
        let randomChar = this.state.characters[this.getRandomInt(this.state.characters.length)]
        !this.state.blockedChars.includes(randomChar) ?
            this.setState({randomCharacter: randomChar})
            : this.makeRandomCharacter()
    }

    blockCharacter = (character) => {
        this.setState({blockedChars: [...this.state.blockedChars, character]})
    }
    
    render() {
        return (
            <div>
                <Card 
                    character={this.state.randomCharacter} 
                    makeRandomCharacter={this.makeRandomCharacter}
                    blockCharacter={this.blockCharacter}
                />
            </div>
        )
    }
}
