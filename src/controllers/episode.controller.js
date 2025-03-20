import { episodeService } from "../services/index.js";

const findandfilterepisodes = async (req, resp) => {
  try {
    const episodes = await episodeService.findandfilterepisodes();

    resp.status(200).json({ sucecess: true, data: episodes });
  } catch (error) {
    resp.status(error?.status || 500).json({ sucecess: false, data: error });
  }
};

const getepisodebytid = async (req, resp) => {
  try {
    const episodes = await episodeService.getepisodebytid(req.params.id);

    resp.status(200).json({ sucecess: true, data: episodes });
  } catch (error) {
    resp.status(error?.status || 500).json({ sucecess: false, data: error });
  }
};

export default { findandfilterepisodes, getepisodebytid };
