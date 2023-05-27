import express from "express";
import cors from "cors";
import { userRouter, authRouter, messageRouter } from "./routes";
import { pgHelper } from "./database/pg-helper";

const app = express()
const port = process.env.PORT || 8081 

app.use(cors())
app.use(express.json())

app.use(userRouter)
app.use(authRouter)
app.use(messageRouter)

pgHelper.connect().then(() => {
    app.listen(port, () => console.log("API running"));
    
}).catch((error) => console.log(error)
)
