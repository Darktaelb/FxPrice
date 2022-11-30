let fs = require('fs');
const CONFIGFILENAME = "config.json";

module.exports = function(){
    return JSON.parse(fs.readFileSync(CONFIGFILENAME, "utf8"));
};