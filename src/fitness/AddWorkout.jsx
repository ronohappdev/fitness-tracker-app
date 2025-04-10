import React, { useState } from "react";

const AddWorkout = ({ onAdd }) => {
  const [workout, setWorkout] = useState({
    exercise: "",
    sets: "",
    reps: "",
    weight: "",
  });

  const handleChange = (e) => {
    setWorkout({ ...workout, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!workout.exercise) return;
    onAdd(workout);
    setWorkout({ exercise: "", sets: "", reps: "", weight: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="exercise" value={workout.exercise} onChange={handleChange} placeholder="Exercise Name" required />
      <input name="sets" value={workout.sets} onChange={handleChange} placeholder="Sets" required />
      <input name="reps" value={workout.reps} onChange={handleChange} placeholder="Reps" required />
      <input name="weight" value={workout.weight} onChange={handleChange} placeholder="Weight (kg)" required />
      <button type="submit">Add Workout</button>
    </form>
  );
};

export default AddWorkout;
