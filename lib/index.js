var originalPushState = window.history.pushState;
var originalReplaceState = window.history.replaceState;

window.history.pushState = function (data, title, url) {
  window.dispatchEvent(new window.Event('locationchange'));
  return originalPushState.call(window.history, data, title, url);
}

window.history.replaceState = function (data, title, url) {
  window.dispatchEvent(new window.Event('locationchange'));
  return originalReplaceState.call(window.history, data, title, url);
}

window.addEventListener('popstate', function () {
  window.dispatchEvent(new window.Event('locationchange'));
});
