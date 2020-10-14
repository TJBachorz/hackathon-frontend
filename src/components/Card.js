import React from 'react'

import {useSpring, animated} from 'react-spring'


export default function CharacterCard({character, makeRandomCharacter, blockCharacter}) {

    const {name, image} = character

    const changeCharacter = () => {
        makeRandomCharacter()
    }

    const blockUser = (event, character) => {
        event.stopPropagation()
        blockCharacter(character)
        makeRandomCharacter()
    }
    

    return (
        <div onClick={changeCharacter} className="card-container">
            <div className="card-info">
                <h2>{name}</h2>
                <img src={image} alt={name}/>
                <button onClick={(event) => blockUser(event, character)}>BLOCK</button>
            </div>
        </div>
    )
}
