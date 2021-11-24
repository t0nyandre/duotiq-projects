import { wrap } from "@mikro-orm/core";
import { Response, Request } from "express";
import { Board } from "../entities";
import { DI } from "../";

export const allBoards = async (_req: Request, res: Response)  => {
    const boards = await DI.boardRepo.findAll()
    return res.json(boards)
}

export const getBoard = async (req: Request, res: Response) => {
    try {
        const board = await DI.boardRepo.findOne(req.params.id)
        
        if (!board) {
            return res.status(404).json({message: "board not found"})
        }
        
        return res.json(board)
    } catch (err: any) {
        return res.status(400).json({message: err.message})
    }
}

export const createBoard = async (req: Request, res: Response) => {
    if (!req.body.name) {
        return res.status(400).json({
            message: "Name is missing"
        })
    }

    try {
        const board = new Board(req.body.name)        
        wrap(board).assign(req.body)
        await DI.boardRepo.persist(board).flush()
        return res.status(201).json(board)
    } catch (err: any) {
        return res.status(400).json({message: err.message})
    }
}

export const removeBoard = async (req: Request, res: Response) => {
    try {
        const board = await DI.boardRepo.findOne(req.params.id)        
        if (!board) {
            return res.status(404).json({ message: "board not found"})
        }
        await DI.boardRepo.removeAndFlush(board)
        return res.status(204).json({})
    } catch (err: any) {
        return res.status(400).json({ message: err.message })
    }
}

export const updateBoard = async (_req: Request, res: Response) => {
    return res.send("NOTE: NOT IMPLEMENTED YET")
}