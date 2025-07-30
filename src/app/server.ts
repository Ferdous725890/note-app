import { Server } from "http";
import app from "./app";
import mongoose from "mongoose";
let server: Server;
const PORT = 5000;
async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://note-app:bZZwZtD8UMSNcLOs@cluster0.frskr.mongodb.net/advance-note-app?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log("Connecting to Mongodb to using mongoose");

    server = app.listen(PORT, () => {
      console.log(`app is listen on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
