import { RequestContext } from "@mikro-orm/core";
import { NextFunction, Response, Request } from "express";
import { Board } from "../entities";

export const getBoards = async (_req: Request, res: Response, _next: NextFunction)  => {
   const boardRepo = RequestContext.getEntityManager()?.getRepository(Board)
   const boards = await boardRepo?.findAll()
   res.json(boards)
}