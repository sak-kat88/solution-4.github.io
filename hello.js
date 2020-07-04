(function(window) {
    var helloSpeaker = new Object();
    var disp = "Hello";
    helloSpeaker.speak = function(name) {
        console.log(disp + " " + name);
    };
    window.helloSpeaker = helloSpeaker;
})(window);
