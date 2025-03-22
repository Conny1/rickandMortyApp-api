import axios from "axios";

const findandfilterlocations = async (query) => {
  const locations = await axios.get(
    `${process.env.RICKMORTY_URL}/location?${query}`
  );

  return locations.data;
};

const getlocationbytid = async (id) => {
  const location = await axios.get(
    `${process.env.RICKMORTY_URL}/location/${id}`
  );
  if (location.data?.residents && location.data?.residents.length) {
    const data = await Promise.all(
      location.data.residents.map(async (url) => (await axios.get(url)).data)
    );

    location.data.residents = data;
  }

  return location.data;
};

export default { findandfilterlocations, getlocationbytid };
