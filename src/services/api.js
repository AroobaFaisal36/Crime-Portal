import axios from "axios";

export const fetchProducts = async () => {
  try {
    const res = await axios.get("https://dummyjson.com/products?limit=8");
    return res.data.products || [];
  } catch (err) {
    console.error("fetchProducts:", err);
    return [];
  }
};

export const fetchPosts = async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=4");
    return res.data || [];
  } catch (err) {
    console.error("fetchPosts:", err);
    return [];
  }
};

export const fetchWeather = async (city, apiKey) => {
  if (!apiKey) return null;
  try {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    return res.data;
  } catch (err) {
    console.error("fetchWeather:", err);
    return null;
  }
};
