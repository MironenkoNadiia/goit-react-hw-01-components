import React from "react";
import Profile from "./Profile";
import Statistics from "./Statistics";
import FriendList from "./FriendList";

import user from "../user.json";
import statisticalData from "../statistical-data.json";
import friends from "../friends.json";

export default function App() {
  return (
      <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
          />  
          
        <Statistics title="Upload stats" stats={statisticalData} />;
          <Statistics stats={statisticalData} />;
          <FriendList friends={friends} />
      </>
    );
    
}

