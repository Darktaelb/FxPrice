const app = require("express")(),
    http = require("http"),
    io = require("socket.io"),
    middleware = require("./middleware/middleware"),
    routes = require("./route/route"),
    run = require("./run/run"),
    socket = require("./socket/socket"),
    getConfig = require("./config/config");

const main = {};
main.app = app;
main.config = getConfig();
main.http = http.Server(app)
main.io = io(main.http, { cors: { origin: "*" } })

middleware(main);
routes(main);
run(main);

socket(main.io);