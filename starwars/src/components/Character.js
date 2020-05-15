import React, { useState, useEffect } from "react";

import axios from "axios"
import CharacterCard from "./CharacterCard"
import styled from 'styled-components'


const CharCont = styled.div`
    display: flex; 
    justify-content: space-evenly;
    justify-items: center;
    flex-wrap: wrap-reverse;
    width: 70%;
    padding-left: 30%; 
    
`

const Character = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {

        axios.get('https://swapi.py4e.com/api/people/')

            .then(res => {
                console.log(res.data.results);
                setCharacters(res.data.results)

            })
            .catch(err => {
                console.log(err);
            });


    }, []);

    return (


        <CharCont>
            {characters.map(item => {
                // console.log(item)
                return (

                    <CharacterCard
                        name={item.name}
                        eyeColor={item.eye_color}
                        hairColor={item.hair_color}
                        height={item.height}
                        birthdate={item.birth_year}
                        gender={item.gender}

                    />

                );
            })}


        </CharCont>




    )

}

export default Character;