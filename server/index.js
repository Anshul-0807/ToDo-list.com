import Express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import Connection from "./database/db.js";
import Routes from "./routes/route.js";

const app = Express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', Routes);

const port = 8000;

Connection();

app.listen(port, () => console.log(`your server is running succesfully on port ${port} `));