import characterRouter from "./characters.route.js";
import locationRouter from "./locations.route.js";
import express from "express";
const router = express.Router();

const defaultRouters = [
  {
    path: "/character",
    route: characterRouter,
  },
  {
    path: "/location",
    route: locationRouter,
  },
];

defaultRouters.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
