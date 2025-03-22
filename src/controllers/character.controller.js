import { characterService } from "../services/index.js";

const findandfiltercharacters = async (req, resp) => {
  let query = "";
  if (req.query) {
    for (let key in req.query) {
      if (req.query[key]) {
        query += `${key}=${req.query[key]}&`;
      }
    }
  }
  console.log(query);
  try {
    const characters = await characterService.findandfiltercharacters(query);

    resp.status(200).json({ sucecess: true, data: characters });
  } catch (error) {
    resp.status(error?.status || 500).json({ sucecess: false, data: error });
  }
};

const getcharacterbytid = async (req, resp) => {
  try {
    const characters = await characterService.getcharacterbytid(req.params.id);

    resp.status(200).json({ sucecess: true, data: characters });
  } catch (error) {
    resp.status(error?.status || 500).json({ sucecess: false, data: error });
  }
};

export default { findandfiltercharacters, getcharacterbytid };
