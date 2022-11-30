let requireDir = require("require-dir"),
    configs = requireDir("./configs");

module.exports = function(){
    let config = configs.getConfig();
    config.environment = configs.getEnvironment(process.argv[2]);
    return config;
};