import { api } from "../configs/api";

export const getCharacters = async (name, gender) => {
  try {
    const params = {};
    if (name) params.name = name;
    if (gender && gender !== "all") params.gender = gender;

    const response = await api.get("/character", { params });

    if (response.data && response.data.results) {
      return response.data.results;
    } else {
      return [];
    }
  } catch (error) {
    throw new Error(error.message || "Error fetching characters.");
  }
};
