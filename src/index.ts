require('dotenv').config()
import express from "express"
import cors from "cors"
import morgan from "morgan"
import { json, urlencoded } from "body-parser"
import { boardRouter } from "./routes"
import { MikroORM, RequestContext } from "@mikro-orm/core"
import { config as MikroConfig } from "./mikro-orm.config";

const main = async () => {
    const app = express()

    const PORT = process.env.PORT || 3000

    if (process.env.NODE_ENV !== "production") {
        app.use(morgan("dev"))
    }

    const orm = await MikroORM.init(MikroConfig)

    app.use(cors())
    app.use(json())
    app.use(urlencoded({ extended: true }))
    app.use((_req: express.Request, _res: express.Response, next: express.NextFunction) => {
        RequestContext.create(orm.em, next)
    })

    app.use("/api/v1/boards/", boardRouter)

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