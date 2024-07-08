import React from "react";

const HabitList = ({ habits, toggleHabit }) => {
  return (
    <div className="w-full md:w-1/2 pr-4">
      <h2 className="text-2xl font-bold mb-2">My Habits</h2>
      <ul>
        {habits.map((habit) => (
          <li key={habit.id} className="mb-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={habit.completed}
                onChange={() => toggleHabit(habit.id)}
                className="mr-2"
              />
              <span className={habit.completed ? "line-through" : ""}>
                {habit.name}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitList;
