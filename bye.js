(function(window) {
    var byeSpeaker = new Object();
    var disp = "Goodbye";
    byeSpeaker.speak = function speak(name) {
        console.log(disp + " " + name);
    };
    window.byeSpeaker = byeSpeaker;
})(window);
