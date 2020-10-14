import React from 'react'

export default function CharacterCard({character, makeRandomCharacter}) {

    const {name, image} = character

    const changeCharacter = () => {
        makeRandomCharacter()
    }

    return (
        <div onSwipe={changeCharacter} className="card-container">
            <div className="card-info">
                <h2>{name}</h2>
                <img src={image} alt={name}/>
            </div>
        </div>
    )
}
