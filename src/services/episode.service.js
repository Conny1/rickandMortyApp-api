import axios from "axios";

const findandfilterepisodes = async () => {
  const episodes = await axios.get(
    `${process.env.RICKMORTY_URL}/episode?page=1`
  );

  return episodes.data;
};

const getepisodebytid = async (id) => {
  const episode = await axios.get(`${process.env.RICKMORTY_URL}/episode/${id}`);
  if (episode.data?.characters && episode.data?.characters.length) {
    const data = await Promise.all(
      episode.data.characters.map(async (url) => (await axios.get(url)).data)
    );

    episode.data.characters = data;
  }

  return episode.data;
};

export default { findandfilterepisodes, getepisodebytid };
