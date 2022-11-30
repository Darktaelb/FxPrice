let requireDir = require("require-dir"),
    middlewares = requireDir("./middlewares");
module.exports = function(main){
    middlewares.removeUnnecessaryHeadersMiddleware(main.app);
    middlewares.allowCrossDomainMiddleware(main.app);
};