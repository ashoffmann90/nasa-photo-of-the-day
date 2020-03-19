import React, {useState} from 'react';
import {
    Card, CardImg, CardText, CardHeader, Button, UncontrolledCollapse
  } from 'reactstrap';


function ImgCard(props) {


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

export default ImgCard;