import mongoose from "mongoose";
// mongoose.set('strictQuery',true);
import dotenv from "dotenv";

dotenv.config();
const DB = process.env.MONGO_URI;
// "mongodb+srv://kushal313:9632@cluster0.pyhoisp.mongodb.net/placementcell?retryWrites=true&w=majority";

console.log(process.env.PORT);
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;



export default db;
