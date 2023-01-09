import Express from "express";

const app = Express();

const port = 8000;

app.listen(port, () => console.log(`your server is running succesfully on port ${port} `));