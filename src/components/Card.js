import React from 'react';
// import {useSpring, animated} from 'react-spring';
import Swipe from './react-swipe';

export default function CharacterCard({character, makeRandomCharacter, blockCharacter}) {

    
    const onSwipeStart=(event)=> {
        console.log('Start swiping...', event);
    }

    const onSwipeMove=(position, event)=> {
        console.log(`Moved ${position.x} pixels horizontally`, event);
        console.log(`Moved ${position.y} pixels vertically`, event);
        if (position.x === 100){
            makeRandomCharacter()
        }
    }

    const onSwipeEnd=(event)=> {
        console.log('End swiping...', event);
    }
        

    const {name, image, interest} = character

    const changeCharacter = () => {
        makeRandomCharacter()
    }

    const blockUser = (event, character) => {
        event.stopPropagation()
        blockCharacter(character)
        makeRandomCharacter()
    }
    
    return (
        <Swipe 
            onSwipeMove={onSwipeMove}
            onSwipeStart={onSwipeStart}
            onSwipeEnd={onSwipeEnd}>
        <div onClick={changeCharacter} className="card-container">
            <div className="card-info">
                <img src={image} alt={name}/>
                <h2>{name}</h2>
                <p><strong>Interests: </strong>{interest}</p>
                <button onClick={(event) => blockUser(event, character)}>BLOCK</button>
            </div>
        </div>
        </Swipe>
    )
}


