import React, { useState, useEffect } from 'react';
import ImgCard from "./imgCard";
import axios from 'axios';

function CardPage() {
    const [image, setImage] = useState([])
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(response => {
            console.log(response.data)
            setImage(response.data)
        })
        .catch(error => {
            console.log('oopsie', error)
        })
    }, [])

    return (
        <div>
        <ImgCard img={image.url} title={image.title} explanation={image.explanation} />
        </div>
    )
}

export default CardPage;