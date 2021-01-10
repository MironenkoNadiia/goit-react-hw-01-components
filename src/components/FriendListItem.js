import PropTypes from 'prop-types';


function FriendsListItem({ avatar, name, id, isOnline }) {
  return (
      <li key={id}>
          <span style={{color: isOnline? 'green': 'red' }}></span>
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