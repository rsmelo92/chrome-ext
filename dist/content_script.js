"use strict";
var API_URL = 'https://randomuser.me/api/';
function triggerInjection() {
    var mainContent = document.getElementById('main');
    if (mainContent && mainContent.firstElementChild) {
        var root = document.createElement('div');
        root.setAttribute('id', 'root');
        mainContent.insertBefore(root, mainContent.firstElementChild.nextSibling);
        var rootEl_1 = document.getElementById('root');
        if (rootEl_1) {
            fetch(API_URL)
                .then(function (res) { return res.json(); })
                .then(function (_a) {
                var results = _a.results;
                var user = results[0];
                createCard(rootEl_1, user);
            });
        }
    }
}
chrome.runtime.onMessage.addListener(function (request) {
    if (request.hasChanged) {
        triggerInjection();
    }
});
