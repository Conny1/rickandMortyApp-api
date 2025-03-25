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

  if (character.data["episode"]) {
    character.data["episode"] = await Promise.all(
      character.data["episode"].map(async (eps) => (await axios.get(eps)).data)
    );
  }
  // console.log(character.data.episode);
  return character.data;
};

export default { findandfiltercharacters, getcharacterbytid };
