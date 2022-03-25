const router = require('express').Router();

// GET /timeline -> view main timeline chatroom
router.get('/', (req, res) => {
	res.json({ msg: 'main timeline chatroom' });
});

// POST /timeline -> add a chat to the timeline
router.post('/', (req, res) => {
	res.json({ msg: 'add chat timeline' });
});

// DELETE /timeline -> Remove your own
router.delete('/:messageId', (req, res) => {
	let pId = req.params.messageId;
	res.json({ msg: `remove your own message:${pId} from the timeline ` });
});

module.exports = router;
