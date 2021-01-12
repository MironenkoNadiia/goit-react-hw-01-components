import React from "react";
import Profile from "./profile/Profile";
import Statistics from "./ststistics/Statistics";
import FriendList from "./friends/FriendList";
import TransactionHistory from "./transaction/TransactionHistory";

import user from "../user.json";
import statisticalData from "../statistical-data.json";
import friends from "../friends.json";
import transactions from "../transactions.json";

import styled from "styled-components";

const Style = styled.div`
*,
*::before,
*::after {
  box-sizing: border-box;
}
`;

export default function App() {
  return (
      <Style>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
          />  
          
        <Statistics title="Upload stats" stats={statisticalData} />;
          <Statistics stats={statisticalData} />;
          <FriendList friends={friends} />;
          <TransactionHistory items={transactions} />
      </Style>
    );
    
}

