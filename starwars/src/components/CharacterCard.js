import React from "react";

const CharacterCard = props => {

    return (

        <div>
            <container>
                <card>

                    <h4>My name is {props.name}</h4>
                    <p>I am '{props.height}' cm tall</p>
                    <p>I have {props.eyeColor} eye color</p>
                    <p>and I was born in {props.birthdate} </p>
                </card>
            </container>

        </div>

    )


}


export default CharacterCard;