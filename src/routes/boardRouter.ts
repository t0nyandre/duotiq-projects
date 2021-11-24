import { Router } from "express";
import { allBoards, getBoard, createBoard, removeBoard } from "../controllers";

export const boardRouter = Router()

boardRouter.get("/", allBoards)
boardRouter.get("/:id", getBoard)
boardRouter.post("/", createBoard)
boardRouter.delete("/:id", removeBoard)