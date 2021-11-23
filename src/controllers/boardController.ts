import { NextFunction, Response, Request } from "express";

export const getBoards = async (_req: Request, res: Response, _next: NextFunction)  => {
    res.json({ "statusText": "We allright, bud!"}).status(200)
}