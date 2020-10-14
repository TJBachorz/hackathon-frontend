import React from 'react'

import {useSpring, animated} from 'react-spring'

export default function CharacterCard({character, makeRandomCharacter}) {

    const {name, image} = character

    const changeCharacter = () => {
        makeRandomCharacter()
    }

    return (
        <div onClick={changeCharacter} className="card-container">
            <div className="card-info">
                <h2>{name}</h2>
                <img src={image} alt={name}/>
            </div>
        </div>
    )
}
