import React from "react";

const WorkoutHistory = ({ workouts }) => {
  return (
    <div>
      <h2 className="text-xl mb-4">Workout History</h2>
      {workouts.length === 0 && <p>No workouts yet.</p>}
      {workouts.map((workout, index) => (
        <div key={index} className="border p-2 my-2">
          <p>Exercise: {workout.exercise}</p>
          <p>Sets: {workout.sets}</p>
          <p>Reps: {workout.reps}</p>
          <p>Weight: {workout.weight}kg</p>
        </div>
      ))}
    </div>
  );
};

export default WorkoutHistory;
