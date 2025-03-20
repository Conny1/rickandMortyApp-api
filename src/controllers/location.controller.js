import { locationService } from "../services/index.js";

const findandfilterlocations = async (req, resp) => {
  try {
    const locations = await locationService.findandfilterlocations();

    resp.status(200).json({ sucecess: true, data: locations });
  } catch (error) {
    resp.status(error?.status || 500).json({ sucecess: false, data: error });
  }
};

const getlocationbytid = async (req, resp) => {
  try {
    const locations = await locationService.getlocationbytid(req.params.id);

    resp.status(200).json({ sucecess: true, data: locations });
  } catch (error) {
    resp.status(error?.status || 500).json({ sucecess: false, data: error });
  }
};

export default { findandfilterlocations, getlocationbytid };
