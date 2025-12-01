import axios from "axios";


axios.defaults.baseURL = 'https://pixabay.com/api/';

async function getImagesByQuery(query, page = 1) {
  try {
    const response = await axios
    .get("/", {
      params: {
        key: "53422022-80b0b4b31a05bf5340553aea2",
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
        page: page,
        per_page: 15,
      },
    })
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default getImagesByQuery;
