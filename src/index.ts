require('dotenv').config()
import express from "express"
import cors from "cors"
import morgan from "morgan"
import { json, urlencoded } from "body-parser"
import { boardRouter } from "./routes"
import { MikroORM, RequestContext } from "@mikro-orm/core"
import config from "./mikro-orm.config";
import { __prod__ } from "./constants"
import { DIType } from "./types"
import { Board } from "./entities"

export const DI = {} as DIType

const main = async () => {
    const app = express()

    const PORT = process.env.PORT || 3000

    if (!__prod__) {
        app.use(morgan("dev"))
    }

    DI.orm = await MikroORM.init(config)
    DI.em = DI.orm.em
    DI.boardRepo = DI.orm.em.getRepository(Board)

    app.use(cors())
    app.use(json())
    app.use(urlencoded({ extended: true }))
    app.use((_req: express.Request, _res: express.Response, next: express.NextFunction) => {
        RequestContext.create(DI.orm.em, next)
    })

    app.use("/api/v1/boards", boardRouter)

    app.get("/", (_, res) => {
        res.send("Welcome to Duotiq Projects")
    })

    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}...`)
    })
}

try {
    main()
} catch (err: unknown) {
    console.error(err)
}