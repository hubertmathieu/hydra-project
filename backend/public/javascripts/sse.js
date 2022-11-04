console.log('starting ssh');
if (typeof (EventSource) !== "undefined") {
    var evtSource = new EventSource('../../routes/api/stream');
    evtSource.onmessage = function (e) {
        console.log('Receiving shit');
        console.log('event = ' + e);
    };
} else {
    console.log('Le navigateur ne supporte pas les SSE')
}