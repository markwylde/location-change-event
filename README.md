Emit an event when the location of the page is changed.

## Install
```bash
npm install --save location-change-event
```

## Example Usage
```javascript
window.addEventListener('locationchange', function (event) {
  console.log('locationchange', event)
});
```
