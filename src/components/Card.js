import React from 'react'

export default function CharacterCard({character}) {

    const {name, image} = character

    return (
        <div className="card-container">
            <div className="card-info">
                <h2>{name}</h2>
                <img src={image} alt={name}/>
            </div>
        </div>
    )
}
