import { render } from '@testing-library/react'
import React from 'react'

import Card from './Card'

export default class CardContainer extends React.Component {

    state = {
        characters: [],
        randomCharacter: {}
    }
    // const [characters, setCharacters] = useState([])
    // const [randomCharacter, setRandomCharacter] = useState({name: "TJ", image: "tj.jpg"})

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

    // const makeRandomCharacter = () => {
    //     setRandomCharacter({randomCharacter: characters.characters[0]})
    

        // let randomNumber = getRandomInt(characters.length)
        // let newRandomCharacter = characters[randomNumber]
        // setRandomCharacter({randomCharacter: newRandomCharacter})
        // return randomCharacter
        // return randomCharacter
        // return <Card character={randomCharacter}/>
    
    render() {
        return (
            <div>
                <Card character={this.state.randomCharacter}/>
            </div>
        )
    }
}
