
import  creatApp from  "./app"

const app = creatApp;
const port = process.env.PORT || 3332



app.listen(port,  "0.0.0.0", ()=> {
    console.log(`🚀 Server running on port http://localhost:${port}`)
})

