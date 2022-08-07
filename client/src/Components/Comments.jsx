import React from 'react'
import styled from 'styled-components'
import Comment from './Comment';
const Container = styled.div`

`;
const NewComment = styled.div`
display: flex;
gap: 10px;
align-items:center;`

const Avatar = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;`


const Input =styled.input`
border: none;
border-bottom: 1px solid ${({theme})=> theme.soft};
background: transparent;
outline: none;
padding: 5px;
width: 100%;
`;



const Comments = () => {
  return (
    <Container>
    <NewComment src="https://image.shutterstock.com/image-vector/default-avatar-profile-icon-vector-260nw-1725655669.jpg">
        <Input placeholder='Add a comment'/>
    </NewComment>
    <Comment/>    
    <Comment/>
    <Comment/>    
    <Comment/>
    <Comment/>    
    <Comment/>
    <Comment/>    
    <Comment/>
    </Container>
  )
}

export default Comments