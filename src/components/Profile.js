import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";

const Section = styled.div`
background-color: grey;
`;

const Description = styled.div`
    background-color: white;
  min-height: 500px;
  width:600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: grey;
  padding: 50px;
  margin:auto;
 
`;

const Avatar = styled.img`
max-height:300px;
`;

const Name = styled.p`
    color:black;
`;

const Stats = styled.ul`
    list-style:none;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
`;
const Label = styled.span`
    margin-bottom:20px;

`;

const StatsItem = styled.li`
    display:flex;
    flex-direction: column;
    margin:50px;
`;


function Profile({ name, tag, location, avatar, stats }) {
    return (
<Section>
  <Description>
    <Avatar
      src="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
      alt="Аватар пользователя"
      
    />
    <Name>Petra Marica</Name>
    <p>@pmarica</p>
    <p>Salvador, Brasil</p>
  </Description>

  <Stats>
    <StatsItem>
      <Label>Followers</Label>
      <span>1000</span>
    </StatsItem>
    <StatsItem>
      <Label>Views</Label>
      <span>2000</span>
    </StatsItem>
    <StatsItem>
      <Label>Likes</Label>
      <span>3000</span>
    </StatsItem>
  </Stats>
</Section>
    )
}

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
