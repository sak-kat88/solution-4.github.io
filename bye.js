(function(window) {
    var bye = new Object();
    var disp = "Goodbye";
    bye.speak = function speak(name) {
        console.log(disp + " " + name);
    };
    window.bye = bye;
})(window);