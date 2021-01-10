import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import FriendsListItem from './FriendListItem';

const FriendItem = styled.ul`
    list-style:none;
`;

function FriendList({ friends }) {
  return <FriendItem>{friends.map(FriendsListItem)}</FriendItem>;
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;