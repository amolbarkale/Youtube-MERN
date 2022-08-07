import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
gap: 10px;
margin: 30px 0;
`;

const Avatar = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;`

const Details = styled.div`
display: flex;
flex-direction:column;
gap:10px;
color: ${({theme})=> theme.text};
`

const Name = styled.span`
font-size: 12px;
font-weight: bolder;
`;

const Date = styled.span`
font-size: 12px;
font-weight: 400;
color: ${({theme})=> theme.textSoft};
margin-left: 5px;
`;
const Text = styled.span`
font-size: 14px;
`;
const Comment = () => {
  return (
    <Container>
        <Avatar src="https://image.shutterstock.com/image-vector/default-avatar-profile-icon-vector-260nw-1725655669.jpg"/>
        <Details>
            <Name>
Amol S B <Date>1 day ago</Date>
            </Name>
<Text>ksdhf skufh siduh sdifuhs lidughsldiguhsdliughsdiguh</Text>
        </Details>
    </Container>
  )
}

export default Comment