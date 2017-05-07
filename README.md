# Playlist Shuffle

Is your player shuffle or random mode frustrating you? Is it repeating the same song over and over again?

### Usage

Install via npm:

```bash
npm install --save playlist-shuffle
```

Use shuffle package in your node.js application:

```javascript
const shuffle = require('playlist-shuffle');

let from = ['/Users/peter/mix-vol1', '/Users/peter/mix-vol2'];
let to = '/Users/peter/awesome-mix';

shuffle(from, to)
  .then(() => console.log('lets rock!'));
```

### Contribution

If you find error or want improve something, feel free to create issues and pull requests.

### License

Licensed under MIT.