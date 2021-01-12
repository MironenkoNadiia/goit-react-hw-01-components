import PropTypes from 'prop-types';
import styled from "styled-components";

const Online = styled.button`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin: 10px;
  border-color:black;
  background-color:${props => props.children ? 'green' : 'red'};
`;




function FriendsListItem({ avatar, name,id, isOnline }) {
  return (
      <li key={id}>
      <Online>{isOnline}</Online>
        <img src={avatar} alt={name} width="48" />
          <p>{name}</p>
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