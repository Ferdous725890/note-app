import { Server } from "http";
import app from "./app";
let server: Server;
const PORT =5000
async function main() {
  try {
    server = app.listen(PORT, () =>{
        console.log(`app is listen on port ${ PORT}`)
    })
  } catch (error) {
    console.log(error);
  }
}

main()