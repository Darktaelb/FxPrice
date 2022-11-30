const logging = require("../logging/logging");

module.exports = function(io){
    let index = 10
    let isFeedEnabled = false

    io.on("connection", socket => {
        logging(`Socket ${socket.id} has been connected.`)

        if (!isFeedEnabled){
            isFeedEnabled = true

            setInterval(() => {
                const dateInIso = new Date().toISOString()
                io.emit('rateUpdate', {key: "EUR/USD", updatedValue: {id: ++index, instrument: "EUR/USD", bid: "1.1000", ask: "1.2000", timestamp: dateInIso}})
            }, 1000)
            setInterval(() => {
                const dateInIso = new Date().toISOString()
                io.emit('rateUpdate', {key: "EUR/JPY", updatedValue: {id: ++index, instrument: "EUR/JPY", bid: "119.60", ask: "119.90", timestamp: dateInIso}})
            }, 800)
            setInterval(() => {
                const dateInIso = new Date().toISOString()
                io.emit('rateUpdate', {key: "GBP/USD", updatedValue: {id: ++index, instrument: "GBP/USD", bid: "1.2500", ask: "1.2560", timestamp: dateInIso}})
            }, 600)
        }

        socket.on('disconnect', function() {
            logging(`Socket ${socket.id} has been disconnected.`)
        })
    })
};
