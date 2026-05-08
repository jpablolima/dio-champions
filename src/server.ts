import express, {Request, Response, json} from "express"


const app = express();
const port = process.env.PORT || 3332

app.use(json())

app.get("/", (req: Request, res: Response) => {
   res.status(200).json({ player: "Giorgian de Arrascaeta"})
})

app.listen(port,  "0.0.0.0", ()=> {
    console.log(`🚀 Server running on port http://localhost:${port}`)
})

