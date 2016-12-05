var maxTime = 1000;

var evenDoubler = function(v, callback) {
    var waitTime = Math.floor(Math.random()*(maxTime+1));
    if (v%2) {
        setTimeout(function() {
            callback(new Error("Odd input"));
        }, waitTime);
    } else {
        setTimeout(function() {
            callback(null, v*2, waitTime);
        }, waitTime);
    }
};

var handleResults = function(err, results, time) {
    if (err) {
        console.log("Error: " + err.Message);
    } else {
        console.log("The results are: " + results + " (" + time + " ms)");
    }
};

evenDoubler(2, handleResults);

console.log("-----");
