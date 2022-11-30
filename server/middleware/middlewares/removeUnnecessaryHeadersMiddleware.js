module.exports = function(app){
    app.use(function(req, res, next){
        res.removeHeader("X-Powered-By");
        next();
    });
};