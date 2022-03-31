const express = require('express');
const router = express.Router();
const multer = require('multer');
// cloudinary npm package to manage uploads
const cloudinary = require('cloudinary').v2;
// utility for deleting files
const { unlinkSync } = require('fs');

const requiresToken = require('../requiresToken');
const db = require("../../models")

//config for multer --- tell it about the static folder
const uploads = multer({ dest: 'uploads/' }); // this is a middleware

// GET /images
router.get('/', (req, res) => {
	res.send('get all images ');
});

// router.post
router.put('/', requiresToken, uploads.single('image'), async (req, res) => {
	try {
		if (!req.file) return res.status(400).json({ msg: 'no file uploaded' });
		const cloudImageData = await cloudinary.uploader.upload(req.file.path);
		console.log(cloudImageData.url);
		const cloudImage = `https://res.cloudinary.com/dofaspy32/image/upload/v1593119998/${cloudImageData.public_id}.png`;
		unlinkSync(req.file.path);
		res.json({ cloudImage });
		const userX = await db.User.findByIdAndUpdate(
			res.locals.user.id
		, { avatar: cloudImage })
		console.log("this is our found user ", userX)
		console.log(res.locals.user.id)
	} catch (error) {
		console.log(error);
		res.status(503).json({ msg: 'you should look at the server console' });
	}
});

module.exports = router;
