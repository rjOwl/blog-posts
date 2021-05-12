const express = require('express');
const postsRouter = require("./routes/posts.route");
const pingRouter = require("./routes/ping.route");
const apicache = require('apicache');
const cors = require('cors')
const morgan = require('morgan');

const PORT = process.env.PORT || 3001
const app = express()
const cache = apicache.middleware

// Configs
app.use(cors())
app.use(express.json());
app.use(express.urlencoded());
app.use(cache('2 minutes'))
app.use(morgan('dev'));

// Routes
app.use("/api/ping", pingRouter);
app.use("/api/posts", postsRouter);

// Application Level Middleware to show request Info
app.use("/", (req, res) => {
    console.log(`application Level Middleware : { Time : ${new Date()} , Method : ${req.method} , URL : ${req.url}}`);
    res.status(400).send("End point Not found").end()
})

/* Start the HTTP server */
app.listen(PORT, (err) => {
    if (err) console.log(err)
    else console.log(`Server started on port: ${PORT}`)
})

