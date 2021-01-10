import PropTypes from 'prop-types';
import styled from "styled-components";

const IsOnline = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin: 10px;
  color:${props=>props.isOnline? 'green': 'red'};
`;


function FriendsListItem({ avatar, name, id, isOnline }) {
  return (
      <li key={id}>
      <IsOnline>{isOnline }</IsOnline>
  <img class="avatar" src={avatar} alt={name} width="48" />
          <p class="name">{name}</p>
</li>
  );
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};

export default FriendsListItem;