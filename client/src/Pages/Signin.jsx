import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: calc(100vh - 56px);
color: ${({ theme }) => theme.text};
`
const Wrapper = styled.div`
display: flex;
align-items: center;
flex-direction: column;
height: calc(100vh - 56px);
background: ${({ theme }) => theme.bgLighter};
border: 1px solid ${({ theme }) => theme.soft};
gap: 10px;
padding: 20px 50px;
`

const Title = styled.h1`
font-size: 24px;`;

const SubTitle = styled.h2`
font-size: 20px;
font-weight: 300;
`;


const Input = styled.input`
border: 1px solid ${({theme})=> theme.soft};
border-radius: 3px;
background: transparent;
padding: 10px;
width: 100%;
`;


const Button = styled.button`
border-radius: 30px;
border: none;
padding: 10px 20px;
font-weight: 500;
cursor: pointer;
background: ${({theme})=> theme.soft};
color: ${({theme})=> theme.textSoft};

`;

const More = styled.div`
display: flex;
margin-top: 10px;
font-size: 12px;
color: ${({theme})=> theme.textSoft};

`;
const Links = styled.div`
margin-left: 50px;
`;
const Link = styled.div`
margin-left: 30px;
`;



const Signin = () => {
    return (
        <Container><Wrapper>
            <Title>Sign in</Title>
            <SubTitle>to continue to Amol S B</SubTitle>
            <Input placeholder='username'/>
            <Input type="password" placeholder='password'/>
            <Button>sign in</Button>
            <Title>Or</Title>
            <Input placeholder='username'/>
            <Input placeholder='email'/>
            <Input type="password" placeholder='password'/>
            <Button>sign up</Button>
        </Wrapper>
        <More>English(USA)
        <Links>
            <Link>Help</Link>
            <Link>Privacy</Link>
            <Link>Terms</Link>
        </Links>
        </More>
        </Container>
    )
}

export default Signin