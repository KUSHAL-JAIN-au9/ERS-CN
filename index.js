import express from "express";
import dotenv from "dotenv";
import db from "./config/mongoose.js";
import session from "express-session";
import passport from "passport";
import routes from "./routes/index.js";
import ejs from "ejs";
import cors from "cors";
import passportLocal from "./config/passport-local-startegy.js";
import flash from "connect-flash";

dotenv.config();
db.on("error", console.error.bind(console, "Error in connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to Database :: Mongodb Kushal");
});
const app = express();
const router = express.Router();
const port = process.env.PORT || 8000;

// Define routes and middleware

app.use(cors());

console.log(process.env.SECRET);
app.set("view engine", "ejs");
app.engine("ejs", ejs.renderFile);
app.set("views", "./views");

// Parse application/json
app.use(express.json());

app.use(
  session({
    //change the secrate before deployment in production mode
    secret: process.env.SECRET, // SECRET is stored in the system veriable
    //if the session data is alredy stored we dont need to rewrite it again and again so this is set to false
    resave: false,
    //when the user is not logged in or identity is not establish in that case we dont need to save extra data in
    //session cookie so this is set to false
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 100 },
  })
);

app.use(flash());

//extract styles and scripts from sub pages into the layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);
app.use(express.urlencoded({ extended: false }));

//for static file use
app.use(express.static("./assets"));

// for authentication
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

// express router
app.use("/", routes);

app.listen(port, (err) => {
  if (err) {
    console.log(`server not running `, err);
  }
  console.log(`Server listening on port ${port}`);
});
