import axios from "axios";

const findandfiltercharacters = async () => {
  const characters = await axios.get(
    `${process.env.RICKMORTY_URL}/character?page=1`
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
