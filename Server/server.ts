import * as express from "express";
import { json, urlencoded } from "body-parser"
import { join } from "path";
import { cors } from "cors";
import * as compression from "compression";
import connect_db from "./db";

// Routes
import index from "./Routes/index";

//import users from "./Routes/login.route";


const app: express.Express = express();

app.use(compression())
app.use(express.static(join(__dirname, "public")));
app.use(urlencoded({ extended: true }));

app.use(json());

//app.use("/api/users", users);

// index route always loads last

app.use("/", index);

const port: string | number = process.env.PORT || 3000;

app.listen(port, async () => {
    try {
        await connect_db();
        console.log("server started successfully. on port " + port);
    } catch (error) {
        console.error(error);
    }
}); 