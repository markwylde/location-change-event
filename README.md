# location-change-event

Emit an event when the location of the page is changed.

## Install
```bash
npm install --save location-change-event
```

## Example Usage
```javascript
require('location-change-event');

window.addEventListener('locationchange', function (event) {
  console.log('locationchange', event);
});
```
