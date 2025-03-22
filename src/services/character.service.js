import axios from "axios";

const findandfiltercharacters = async (query) => {
  const characters = await axios.get(
    `${process.env.RICKMORTY_URL}/character?${query}`
  );

  return characters.data;
};

const getcharacterbytid = async (id) => {
  const character = await axios.get(
    `${process.env.RICKMORTY_URL}/character/${id}`
  );

  return character.data;
};

export default { findandfiltercharacters, getcharacterbytid };
