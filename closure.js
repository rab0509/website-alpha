/*var passed = 3;

var addTo = function () {
    var inner = 2;
    return passed + inner;
}

console.dir(addTo);*/

var timer1;
var timer2;
var counter = 0;

function setup() {
    /*createCanvas(200,200);*/
    timer1 = createP('timer1');
    timer2 = createP('timer2');

    makeTimer(timer1, 500);
    makeTimer(timer2, 312);

}

function makeTimer(elt, wait) {
    var counter = 0;
    setInterval(timeIt, wait);
    function timeIt() {
        elt.html(counter);
        counter++;
    }
}

setup();
