require('dotenv').config()
import express from "express"
import cors from "cors"
import morgan from "morgan"
import { json, urlencoded } from "body-parser"

const app = express()

const PORT = process.env.PORT || 3000

if (process.env.NODE_ENV !== "production") {
    app.use(morgan("dev"))
}

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))

app.get("/", (_, res) => {
    res.send("Welcome to Duotiq Projects")
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)
})