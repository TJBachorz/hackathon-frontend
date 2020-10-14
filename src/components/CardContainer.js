import React, {Component} from 'react'

import Card from './Card'

export default class CardContainer extends Component {

    state = {
        characters: [],
        randomCharacter: {}
    }
    const [characters, setCharacters] = useState([])
    const [randomCharacter, setRandomCharacter] = useState({})

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character/")
            .then(response => response.json())
            .then(data => setCharacters({characters: data.results}))
    })

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    }

    const makeRandomCharacter = () => {
        let randomNumber = getRandomInt(characters.length)
        let newRandomCharacter = characters[randomNumber]
        setRandomCharacter({randomCharacter: newRandomCharacter})
        // return randomCharacter
        // return randomCharacter
        // return <Card character={randomCharacter}/>
    }

    return (
        <div onLoad={() => makeRandomCharacter}>
            <Card character={randomCharacter}/>
        </div>
    )
}
