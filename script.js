
(function() {
    var n = ["Jyoti","Payal","Sameer","Jahangir","jay","Pranshu","Avni"];
    for (var i = 0; i < n.length; i++) {
        var initial = n[i].charAt(0).toLowerCase();
        if (initial=== 'j') {
            bye.speak(n[i]);
        } else {
            hello.speak(n[i]);
        }
    }
})();