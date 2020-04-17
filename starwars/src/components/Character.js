import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./CharacterCard"
import CharacterCard from "./CharacterCard";
// import styled from 'styled-components';


// const Box = styled.div`
//     box-sizing: border-box;
//     display: flex;
//     justify-content: space-evenly;
//     flex-wrap: wrap;
//   `
const Character = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {

        axios.get('https://swapi.py4e.com/api/people/')
        .then(response => {
        console.log(response.data.results);
        setCharacters(response.data.results)

        })
        .catch(err => {
        console.log(err);
        });

    }, []);

    return (

    <div>
            {characters.map(item =>{
                // console.log(item)
                return (
                    
                    <CharacterCard

                    
                    name = {item.name}
                    eyeColor = {item.eye_color}
                    height = {item.height}
                    birthdate = {item.birth_year}

                    />

                );
            })}
        
    </div>

    

    )

}

export default Character;