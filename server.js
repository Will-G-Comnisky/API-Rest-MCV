import app from "./src/app.js"
import spdy from "spdy" // HTTP 2 (retrocompativel com HTTPS)
import fs from "fs"


const server = spdy.createServer({
    key: fs.readFileSync("privatekey.pem", "utf-8"),
    cert: fs.readFileSync("certificate.pem", "utf-8")
}, app); 


const PORT = process.env.PORT || 3001
server.listen(PORT, ()=>{
    console.log(`Server Rodando em http://localhost:${PORT}`);
} )