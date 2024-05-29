import express from "express";
// import * as env from "../src/lib/enVariables.js";
import path from "path";
import api_router from "./routes.js";
import auth_middleware from "./auth.js";

// ------------------server config------------------------

// this is retarded
const __dirname = new URL(".", import.meta.url).pathname;
const dirname = __dirname.slice(1, __dirname.length);

const dist_path = path.join(dirname, "..", "dist", "index.html");

const port = 5000;

const app = express();

app.use(express.json());
app.use(express.static("./dist"));

// ---------------Routes-------------------

app.use("/api", auth_middleware, api_router);

app.use("*", (req, res, next) => {
    res.sendFile(dist_path);
});

app.listen(port, () => {
    console.log("http://localhost:" + port);
});
