
(function() {
    var n = ["Yaakov","John","Jen","Jason","Paul","Frank","Larry","Paula","Laura","Jim"];
    for (var i = 0; i < n.length; i++) {
        var initial = n[i].charAt(0).toLowerCase();
        if (initial=== 'j') {
            byeSpeaker.speak(n[i]);
        } else {
            helloSpeaker.speak(n[i]);
        }
    }
})();
