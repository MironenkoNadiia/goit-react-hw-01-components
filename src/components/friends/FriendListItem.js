import PropTypes from 'prop-types';
import styled from 'styled-components';

const Online = styled.button`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin: 10px;
  border-color: black;
  background-color: ${props => (props.children ? 'green' : 'red')};
`;

const List = styled.li`
  display: flex;
  padding: 20px 50px;
`;

const Name = styled.p`
padding-left:30px ;
`;



function FriendsListItem({ avatar, name, id, isOnline }) {
  return (
    <List key={id}>
      <Online>{isOnline}</Online>
      <img src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </List>
  );
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendsListItem;
