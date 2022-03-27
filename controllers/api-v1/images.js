const express = require('express');
const router = express.Router();
const multer = require('multer');
// cloudinary npm package to manage uploads
const cloudinary = require('cloudinary').v2;
// utility for deleting files
const { unlinkSync } = require('fs');

//config for multer --- tell it about the static folder
const uploads = multer({ dest: 'uploads/' }); // this is a middleware

// GET /images
router.get('/', (req, res) => {
	res.send('get all images ');
});

// router.post
// uploads.method(''key in the body)
router.post('/', uploads.single('image'), async (req, res) => {
	try {
		// handle upload errors
		if (!req.file) return res.status(400).json({ msg: 'no file uploaded' });
		const cloudImageData = await cloudinary.uploader.upload(req.file.path);
		console.log(cloudImageData.url);
		// cloudImageData save this to the database
		const cloudImage = `https://res.cloudinary.com/dkn0c0u0g/image/upload/v1593119998/${cloudImageData.public_id}.png`;
		// delete the file so it doesnt clutter up the server
		unlinkSync(req.file.path);
		// maybe we should save something in the db ???
		// send image back
		res.json({ cloudImage });
	} catch (error) {
		console.log(error);
		res.status(503).json({ msg: 'you should look at the server console' });
	}
});

module.exports = router;
