import React, {Component} from 'react'

import Card from './Card'

export default class CardContainer extends Component {

    state = {
        characters: [],
        randomCharacter: {}
    }

    componentDidMount() {
        fetch("https://rickandmortyapi.com/api/character/")
            .then(response => response.json())
            .then(data => this.setState({characters: data.results}))
            .then(this.setState(
                {randomCharacter: 
                    this.state.characters[this.getRandomInt(this.state.characters.length)]
                }
            ))
    }

    getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    }

    // const makeRandomCharacter = () => {
    //     let randomNumber = getRandomInt(characters.length)
    //     let newRandomCharacter = characters[randomNumber]
    //     setRandomCharacter({randomCharacter: newRandomCharacter})
        // return randomCharacter
        // return randomCharacter
        // return <Card character={randomCharacter}/>
    // }
    render() {
        return (
            <div>
                <Card character={this.state.characters[1]}/>
            </div>
        )
    }
}
