const utils = require('./utils');

require('./polyfills');

function shuffle(from, to) {
	return utils.checkArgs(from, to)
		.then(utils.mkdir(to))
		.then(utils.readdirs(from))
		.then(utils.mergeFileGroups)
		.then(utils.onlyAudio)
		.then(utils.shuffleArray)
		.then(utils.copyFiles(to));
}

module.exports = shuffle;