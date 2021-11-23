import { Router } from "express";
import { getBoards } from "../controllers";

export const boardRouter = Router()

boardRouter.get("/", getBoards)