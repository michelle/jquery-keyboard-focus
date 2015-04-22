# jquery-keyboard-focus

### Demo

Open `index.html`, or see the [jsFiddle demo](http://jsfiddle.net/Lmesnb3a/).

### Usage

Pass in the class you want to add when an element is focused by the keyboard to `$.fn.keyboardFocus`.

```javascript
$('.keyboard-interactions-only').keyboardFocus('is-focused');

// Or, if you have dynamic elements and want to apply your focus class to all
// elements that match a given selector:
$.keyboardFocus({
  'a.keyboard-interactions-only': 'is-focused'
  // You can specify multiple class name mappings.
});
```

### Installation

```
bower install jquery-keyboard-focus
```

or

```
npm install jquery-keyboard-focus
```

Include `jquery.keyboard-focus.min.js` in your source.
