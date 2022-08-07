import React from 'react';
import styled from "styled-components";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import Comments from '../Components/Comments';
import Card from "../Components/Card"
const Container = styled.div`
display: flex;
gap: 24px;`

const Content = styled.div`
flex:5;`

const VideoWrapper = styled.div`
flex:5;`

const Title = styled.h1`
font-size: 18px;
font-weight: 400;
margin-top: 20px;
margin-bottom: 10px;
color: ${({ theme }) => theme.text};`

const Details = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const Info = styled.span`
color: ${({ theme }) => theme.textSoft};

`
const Buttons = styled.div`
display: flex;
gap: 20px;
color: ${(theme) => theme.text};
`
const Button = styled.div`
display: flex;
align-items: center;
gap:5px;
cursor: pointer;
`
const Hr = styled.hr`
margin: 15px 0;
border: 0.5px solid ${({ theme }) => theme.soft};
`
const Recommendation = styled.div`
flex:2;`

const Channel = styled.div`
display: flex;
justify-content: space-between;`

const ChannelInfo = styled.div`
display: flex;
gap: 20px;`

const Image = styled.img`
width: 50px;
border-radius: 50%;
`;
const CHannelDetails = styled.span`
display: flex;
flex-direction: column;
color: ${({ theme }) => theme.text};
`;
const CHannelName = styled.div`
font-weight: 500;
color: ${({ theme }) => theme.text};

`;
const CHannelCounter = styled.span`
margin-top: 5px;
margin-bottom: 20px;
color: ${({ theme }) => theme.textSoft};
font-size: 12px;
`;
const CHannelDesciption = styled.p`
font-size: 14px;
color: ${({ theme }) => theme.text};

`;


const Subscribe = styled.button`
background:red;
font-weight: 500;
color: white;
border: none;
border-radius: 3px;
height: max-content;
padding: 10px 20px;
cursor: pointer;
`;

const VideoPage = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="720px"
            //  https://www.youtube.com/watch?v=yIaXoop8gl4
            src=""
            title="Youtube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allowfullscreen"
            allowFullScreen >
          </iframe>
        </VideoWrapper>
        <Title>Test video</Title>
        <Details>
          <Info>789,789 views | Junw 22,2022</Info>
          <Buttons>
            <Button><ThumbUpOutlinedIcon />321</Button>
            <Button><ThumbDownOffAltOutlinedIcon />Deslike</Button>
            <Button><ReplyOutlinedIcon />Share</Button>
            <Button><AddTaskOutlinedIcon />Save</Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src="https://image.shutterstock.com/image-vector/default-avatar-profile-icon-vector-260nw-1725655669.jpg"></Image>
            <CHannelName>Amol S  B</CHannelName>
            <CHannelCounter>150K seubscribers</CHannelCounter>
            <CHannelDesciption>lorem lorem50</CHannelDesciption>

          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommendation><Card type="sm" /><Card type="sm" /><Card type="sm" /><Card type="sm" /><Card type="sm" /><Card type="sm" /><Card type="sm" /></Recommendation>
    </Container>
  )
}

export default VideoPage