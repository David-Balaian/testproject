import express from 'express'
import dotenv from 'dotenv'
import router from './routes.js'
dotenv.config()
const app = express()
const port = 5000

app.use(express.json())
app.use(router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log("server run on 5000 port", "color: #f90;");
})