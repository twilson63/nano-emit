# nano-emit

A light weight event emitter that you can subscribe to an event and emit and event, you can also unsubscribe too.

## API

* subscribe
* emit
* unsubscribe

## Usage

```
const ne = require('nano-emit')

ne.subscribe(function (event) {
  console.log(event)
})

ne.emit('Beep Boop')
```

## Install

```
npm install nano-emit
```

## Use Cases

Great for a minimum web app. See nano-web.
