const BASE_URL = "https://wger.de/api/v2/exerciseinfo/?limit=20";

export const fetchExercises = async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching exercises:", error);
    return [];
  }
};
