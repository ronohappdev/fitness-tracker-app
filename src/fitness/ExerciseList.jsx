import React, { useEffect, useState } from "react";
import { fetchExercises } from "./api";

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const getExercises = async () => {
      const data = await fetchExercises();
      setExercises(data);
    };
    getExercises();
  }, []);

  return (
    <div>
      <h2 className="text-xl mb-4">Exercises From API</h2>
      {exercises.map((exercise) => (
        <div key={exercise.id} className="border p-2 my-2">
          <p>{exercise.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ExerciseList;
