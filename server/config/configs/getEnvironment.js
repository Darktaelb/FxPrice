let fs = require('fs'),
    logging = require("../../logging/logging");
const ENVIRONMENTFILENAME = "environments.json";

module.exports = function(environmentName){
    const environmentsContent = JSON.parse(fs.readFileSync(ENVIRONMENTFILENAME, "utf8"));
    const environment = environmentsContent.environments.filter(function(element){
        return element.environmentName === environmentName;
    });

    if(environment.length < 1){
        logging("Environment with name: " + environmentName + " doesn't exists.");
    }
    else{
        if( environment.length > 1){
            logging("Environment with name: " + environmentName + " repeated. By default used the first.");
        }
        return environment[0];
    }
};