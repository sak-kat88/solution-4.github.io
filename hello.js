(function(window) {
    var hello = new Object();
    var disp = "Hello";
    hello.speak = function(name) {
        console.log(disp + " " + name);
    };
    window.hello = hello;
})(window);