import React, {useState} from 'react';
import {
    Card, CardImg, CardText, CardHeader, Button, UncontrolledCollapse
  } from 'reactstrap';


function ImgCard(props) {
const isVideo = props.mediaType
if(isVideo === 'video'){
    return (
        <>
        <Button color='primary' id='toggler' style={{marginBottom: '1rem'}}>Photo of the Day</Button>
        <UncontrolledCollapse toggler='#toggler'>
            <Card>
                <iframe src={props.vidUrl}
                    frameBorder='0'
                    allow='autoplay; encrypted-media'
                    allowFullScreen={true}
                    title='video'
                    width='100%'
                    height='400px'
                />
                <CardHeader>{props.title}</CardHeader>
                <CardText style={{padding:'5%'}}>{props.explanation}</CardText>
            </Card>
        </UncontrolledCollapse>
        </>
    ) 
} else {
    return (
        <>
        <Button color='primary' id='toggler' style={{marginBottom: '1rem'}}>Photo of the Day</Button>
        <UncontrolledCollapse toggler='#toggler'>
            <Card>
                <CardImg alt="NASA of the Day" src={props.img} />
                <CardHeader>{props.title}</CardHeader>
                <CardText style={{padding:'5%'}}>{props.explanation}</CardText>
            </Card>
        </UncontrolledCollapse>
        </>
    )
}

}

export default ImgCard;