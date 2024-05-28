import express from "express";
import { config } from "dotenv";
import path from "path";

config();

const __dirname = new URL(".", import.meta.url).pathname;

const dist_path = path.join(__dirname, "/dist/index.html");

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.static("./dist"));

app.use((req, res, next) => {
    res.sendFile("/dist/index.html");
});

app.use((err, req, res, next) => {
    console.log(typeof err.status);

    if (err.status === 404) {
        res.sendFile(dist_path);
    }
});

app.listen(port, () => {
    console.log("http://localhost:" + port);
});
