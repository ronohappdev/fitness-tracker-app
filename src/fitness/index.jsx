import React, { useState } from "react";
import AddWorkout from "./AddWorkout";
import WorkoutHistory from "./WorkoutHistory";
import ExerciseList from "./ExerciseList";

const FitnessDashboard = () => {
  const [workouts, setWorkouts] = useState([]);

  const handleAddWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Fitness Tracker Dashboard</h1>
      <AddWorkout onAdd={handleAddWorkout} />
      <WorkoutHistory workouts={workouts} />
      <ExerciseList />
    </div>
  );
};

export default FitnessDashboard;
