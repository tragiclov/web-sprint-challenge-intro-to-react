// Write your Character component here
import React, {useState} from 'react'
import styled from 'styled-components'
const CharacterCard = styled.div`
background-color : white;
opacity: 65%;
width: 50%;
display: block;
margin: 4em auto;
padding: 10px;
`
const StyledName = styled.h1`
    font-size: 2em;
    `
const StyledH2 = styled.h2`
    font-size: 1em;
    `

const Character = (props) => {
    const {characters} = props;
return (
    <div>
        {characters.map(res, index =>{
            return(
                <CharacterCard key = {index}>
                    <StyledName>{res.name}</StyledName>
                    <StyledH2>Date of Birth:</StyledH2>
                </CharacterCard>
            )
        })}
    </div>
)
}
export default Character