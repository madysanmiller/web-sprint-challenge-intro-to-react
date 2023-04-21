// Write your Character component here
import React from 'react';
import styled from 'styled-components';


const StyledCharacter = styled.div`
font-family: Fantasy;
padding: 1px;
margin: 10px;
background-color: rgba(255, 255, 255, 0.3);
margin-right: 300px;
margin-left: 300px;
`    

export default function Character({ data, openFunction, id }) {

    return (
        <StyledCharacter onClick={() => openFunction(id)} id={data.id}>
            <h1>{data.name}</h1>
        </StyledCharacter>
    )
}

// const Characters = (props) => {
//     const {character} = props
//     return (
//         <StyledCharacter>
//             <div className="container">
//               <div className="card">
//                 <h2>{character.name}</h2> 
//                 <p>Gender: {character.gender}</p> 
//                 <p>Birth Year: {character.birth_year}</p> 
//                 <p>Hair Color: {character.hair_color}</p> 
//                 <p>Hair Color: {character.eye_color}</p> 
//               </div>
//             </div>
//         </StyledCharacter>
// )}

// export default Characters;