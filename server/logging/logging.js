module.exports = function(message, logPath){
    if(logPath){
        logPath = logPath.toLowerCase();
    }
  switch(logPath){
      default:{
          console.log(message);
          break;
      }
  }
};