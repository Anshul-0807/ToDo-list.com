import Express from "express";

import Connection from "./database/db.js";

const app = Express();

const port = 8000;

Connection();

app.listen(port, () => console.log(`your server is running succesfully on port ${port} `));