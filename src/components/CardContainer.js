import React, {useState, useEffect} from 'react'

import Card from './Card'

export default function CardContainer() {

    const [characters, setCharacters] = useState([])
    const [randomCharacter, setRandomCharacter] = useState({name: "TJ", image: "tj.jpg"})

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character/")
            .then(response => response.json())
            .then(data => setCharacters({characters: data.results}))
    })

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    }

    const makeRandomCharacter = () => {
        setRandomCharacter({randomCharacter: characters[0]})
    

        // let randomNumber = getRandomInt(characters.length)
        // let newRandomCharacter = characters[randomNumber]
        // setRandomCharacter({randomCharacter: newRandomCharacter})
        // return randomCharacter
        // return randomCharacter
        // return <Card character={randomCharacter}/>
    }

    return (
        <div onLoad={makeRandomCharacter}>
            <Card character={characters[0]}/>
        </div>
    )
}
