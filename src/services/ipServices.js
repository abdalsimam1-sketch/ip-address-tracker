const apiURL = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export const fetchIpData = async (ip) => {
  try {
    const response = await fetch(`${apiURL}?apiKey=${apiKey}&ipAddress=${ip}`);
    if (!response.ok) {
      throw new Error(`Request Failed : ${response.status}`);
    }
    const data = await response.json();
    return data;
    if (!data) {
      throw new Error("No data was returned");
    }
  } catch (error) {
    console.log(error);
  }
};
