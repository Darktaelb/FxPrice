let logging = require("../logging/logging");

module.exports = function(main){
    main.http.listen(main.config.environment.port, main.config.environment.url, function(){
        logging(main.config.serviceName + " started working on port: " + main.config.environment.port + " on url: " + main.config.environment.url);
    });
};