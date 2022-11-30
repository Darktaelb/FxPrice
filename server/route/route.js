let requireDir = require("require-dir"),
    routes = requireDir("./routes")

module.exports = function(main){
    //           "/api/instrument/rate"
    main.app.get("/api/instrument/rate/latest", routes.instrumentRate.getLatest);
    main.app.get("/api/instrument/:instrument/rate/latest", routes.instrumentRate.getLatestByInstrument);
};