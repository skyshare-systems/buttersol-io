import express from "express";
import { GETpair } from "../controller/factoryController";

const router = express.Router();

router.post("/pair", GETpair);

export default router;
