// REQUIRED EXTERNAL MODULES

import * as dotenv from "dotenv"
import express from "express"
import cors from "cors"
import helmet from "helmet"
import { itemsRouter } from "./items/items.router"

dotenv.config()

// APP VARIABLES

if (!process.env.PORT) {
  process.exit(1)
}

const PORT = parseInt(process.env.PORT as string, 10)
const app = express()

// APP CONFIGURATION

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use("/api/menu/items", itemsRouter)

// SERVER ACTIVATION

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
