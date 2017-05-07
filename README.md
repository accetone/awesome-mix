# Awesome Mix

![npm](https://img.shields.io/npm/v/awesome-mix.svg)
![license](https://img.shields.io/badge/license-MIT-orange.svg)  
  
Is your player shuffle or random mode frustrating you?  
Is it repeating the same song over and over again?  
  
We have a solution:
1. turn off the shuffle mode in your player
2. use awesome mix module to compose your own playlist
3. move brand new playlist to your player
4. ...
5. PROFIT!

By making this simple actions you will enjoy music in non-repetitive manner.

### Usage

Install via npm:

```bash
npm install --save awesome-mix
```

Use awesome mix module in your node.js application:

```javascript
const mix = require('awesome-mix');

let from = ['/Users/peter/mix-vol1', '/Users/peter/mix-vol2'];
let to = '/Users/peter/awesome-mix';

mix(from, to)
  .then(() => console.log('lets rock!'));
```

### Contribution

If you find error or want improve something, feel free to create issues and pull requests.

### License

Licensed under MIT.