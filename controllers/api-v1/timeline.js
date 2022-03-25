const router = require('express').Router();
const db = require('../../models');

// GET /timeline -> view main timeline chatroom
router.get('/', (req, res) => {
	res.json({ msg: 'main timeline chatroom' });
});
//POST /timeline - this route is meant to create THE ONE party chat room for all users to chat in
router.post('/',async (req,res)=>{
	try {
		const chatRoom = await db.Chatroom.create({
			name: req.body.name,
			description: req.body.description
		})
		res.json({
			msg: 'room created',
			chatRoom
		})
	} catch (error) {
		console.log(error)
		res.status(503).json({msg: "servers on fire"})
	}
	res.json({msg: 'created a room'})
})

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
