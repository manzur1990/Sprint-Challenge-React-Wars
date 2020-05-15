
import React from "react"
import { Card, CardBody, Alert, CardText } from "reactstrap"




const CharacterCard = props => {

    return (



        <Card body inverse style={{
            backgroundColor: '#333',
            borderColor: '#333',
            width: '30rem',
            marginBottom: '5%',
        }}>

            <Alert color="secondary">My name is {props.name}</Alert>
            <CardBody>
                <CardText>I am '{props.height}' cm tall</CardText>
                <CardText>My hair is {(props.hairColor === 'n/a') ? 'none existing, do not need hair with a body like this' : props.hairColor}</CardText>
                <CardText>I have {props.eyeColor} eye color</CardText>
                <CardText>and I was born in {(props.birthdate === 'unknown') ? 'The Hood' : props.birthdate}, </CardText>
                <CardText>I am a {(props.gender === 'n/a') ? 'robot' : props.gender} looking for love</CardText>
            </CardBody>
        </Card>




    )


}


export default CharacterCard;