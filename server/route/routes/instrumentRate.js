const stubbedInstrumentRates = generateInstrumentRates()

module.exports.getLatestByInstrument = function(req, res){
    const instrument = req.params.instrument;
    const instrumentRate = stubbedInstrumentRates.get(instrument)
    
    if (instrumentRate == undefined) {
        res.statusCode = 404;
        res.send();
    } else {
        res.send(instrumentRate);
    }
};

module.exports.getLatest = function(req, res){
    const instrumentRates = Array.from(stubbedInstrumentRates, ([key, value]) => value)
    res.send(instrumentRates);
};

function generateInstrumentRates() {
    const instrumentRates = new Map()
    instrumentRates.set("EUR/USD", {id:1, instrument: "EUR/USD", bid: "1.1000", ask: "1.2000", timestamp: "2022-11-30T02:54:53.880Z"})
    instrumentRates.set("EUR/JPY", {id:2, instrument: "EUR/JPY", bid: "119.60", ask: "119.90", timestamp: "2022-11-30T02:54:53.880Z"})
    instrumentRates.set("GBP/USD", {id:3, instrument: "GBP/USD", bid: "1.2500", ask: "1.2560", timestamp: "2022-11-30T02:54:53.880Z"})

    return instrumentRates
}