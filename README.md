# Playlist Shuffle

![npm](https://img.shields.io/npm/v/playlist-shuffle.svg)
![license](https://img.shields.io/badge/license-MIT-orange.svg)  
  
Is your player shuffle or random mode frustrating you?  
Is it repeating the same song over and over again?  
  
We have a solution:
1. turn off the shuffle mode in your player
2. use shuffle package to compose your own awesome playlist
3. move brand new playlist to your player
4. ...
5. PROFIT!

By making this simple actions you will enjoy music in non-repetitive manner.

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