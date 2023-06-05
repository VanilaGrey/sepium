export default () => ({
	description: 'sepium-test',
	getImages(filename, additions = {}) {
		const image = Object.assign(additions, {
			default: `images/${filename}.jpg`,
			default2x: `images/${filename}@2x.jpg`,
			webp: `images/${filename}.webp`,
			webp2x: `images/${filename}@2x.webp`
		});

		return image;
	},
	pixelperfect: JSON.stringify({ breakpoints: [1280], ext: 'webp' }),
	projectName: 'sepium'
});
