const fs = require('fs');
const path = require('path');
const mime = require('mime-types');
const Promise = require('bluebird');
const glob = Promise.promisify( require('glob') );

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function mkdir(path) {
	return () => {
		return new Promise((resolve, reject) => {
			fs.mkdir(path, (err) => {
				if (!err || err.code == 'EEXIST') resolve();
				else reject(err);
			});
		});
	};	
}

function copyFile(from, to) {
	return new Promise((resolve, reject) => {
		const read = fs.createReadStream(from);
		const write = fs.createWriteStream(to);

		write.on('finish', () => resolve());

		read.pipe(write);
	});
}

function mergeFileGroups(fileGroups) {
	fileGroups = fileGroups.map(
		fileGroup => fileGroup.map(
			file => ({ 
				name: path.basename(file), 
				path: file
			})
		)
	);

	return fileGroups.reduce(
		(files, fileGroup) => files.concat(fileGroup),
		[]
	);
}

function onlyAudio(files) {
	return files.filter(
		file => {
			const type = mime.lookup(file.name);

			return type && type.startsWith('audio');
		}
	);
}

function shuffleArray(sourceArray) {
	const resultArray = [];
	const indexesArray = sourceArray.map((x, i) => i);

	while (indexesArray.length) {
		const randomInt = getRandomInt(0, indexesArray.length);
		const randomIndex = indexesArray[randomInt];

		resultArray.push(sourceArray[randomIndex]);
		indexesArray.splice(randomInt, 1);
	}

	return resultArray;
}

function readdirs(from) {
	return () => {
		const promises = from.map(
			dir => glob(
				path.join(dir, '**/*'), 
				{ nodir: true }
			)
		);

		return Promise.all(promises);
	};
}

function copyFiles(to) {
	return (files) => {
		const paddedLength = files.length.toString().length;

		const promises = files.map((file, index) => {
			const fromFile = file.path;
			const toFile = path.join(
				to,
				`${(index+1).toString().padStart(paddedLength, '0')}. ${file.name}`
			);

			return copyFile(fromFile, toFile);
		});

		return Promise.all(promises);
	};
}

function checkArgs(from, to) {
	return new Promise((resolve, reject) => {
		if (!from 
		|| Object.prototype.toString.call( from ) !== '[object Array]' 
		||  from.length === 0) {
			reject( new TypeError('Incorrect value for `from` argument. Should be an Array represent list of paths point to input location') );
			return;
		}

		if (!to || typeof to !== 'string') {
			reject( new TypeError('Incorrect value for `to` argument. Should be a String represent a path point to output location') );
			return;
		}

		resolve();
	});
}

module.exports = {
	getRandomInt,
	mkdir,
	copyFile,
	mergeFileGroups,
	onlyAudio,
	readdirs,
	copyFiles,
	checkArgs
};