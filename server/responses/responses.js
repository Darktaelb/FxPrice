module.exports.serverErrorResponse = function(res){
    res.setHeader('Content-Type', 'application/json');
    res.status(500);
    res.send();
};