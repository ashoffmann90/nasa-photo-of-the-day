import React from 'react';

function ImgCard(props) {

    return (
        <div>
            <img alt="NASA of the Day" src={props.img}/>
            <h2>Title: {props.title}</h2>
            <p>Explanation: {props.explanation}</p>
        </div>
    )
}

export default ImgCard;