import React from "react";

const FriendsList = ({ friends }) => {
  return (
    <div className="w-full md:w-1/2 pl-4">
      <h2 className="text-2xl font-bold mb-2">Friends' Progress</h2>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id} className="mb-2">
            <span>{friend.name}: </span>
            <span className="font-bold">
              {friend.progress} habits completed
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendsList;
