for (var i = 0; i < 5; i++) {
    console.log('inside for loop:' + i);
}
console.log('Outside for loop:' + i);
function doWork(x) {
    if (x) {
        var y = 10;
        console.log('IF Block:' + y);
    }
    console.log('Out of IF Block:' + y);
}
doWork(true);
doWork(false);
