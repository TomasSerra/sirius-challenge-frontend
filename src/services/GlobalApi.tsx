import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

const axiosCreate = axios.create({
    baseURL: "https://api.rawg.io/api",
});

const getGenres = async () => {
    try {
        return await axiosCreate.get(`/genres?key=${apiKey}`);
    } catch (error) {
        console.error("Error fetching genres:", error);
        throw error;
    }
};

export { getGenres };
