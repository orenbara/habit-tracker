import React, { useState } from "react";
import HabitList from "./HabitList";
import FriendsList from "./FriendsList";

const HabitTracker = () => {
  const [habits, setHabits] = useState([
    { id: 1, name: "Exercise", completed: false },
    { id: 2, name: "Read", completed: false },
    { id: 3, name: "Meditate", completed: false },
  ]);

  const [friends] = useState([
    { id: 1, name: "Alice", progress: 2 },
    { id: 2, name: "Bob", progress: 1 },
    { id: 3, name: "Charlie", progress: 3 },
  ]);

  const toggleHabit = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Habit Tracker</h1>
      <div className="flex flex-col md:flex-row">
        <HabitList habits={habits} toggleHabit={toggleHabit} />
        <FriendsList friends={friends} />
      </div>
    </div>
  );
};

export default HabitTracker;
