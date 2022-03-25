const router = require('express').Router();
const db = require('../../models');
const requiresToken = require('../requiresToken')

// GET /timeline -> view main timeline chatroom
router.get('/', async (req, res) => {
	const chatroom = await db.Chatroom.findOne()
	const messages = await db.Messages.find({
		id: chatroom.messages
	})
	res.json({ msg: `${messages}` });
});
//POST /timeline - this route is meant to create THE ONE party chat room for all users to chat in
// router.post('/',async (req,res)=>{
// 	try {
// 		const chatRoom = await db.Chatroom.create({
// 			name: req.body.name,
// 			description: req.body.description
// 		})
// 		res.json({
// 			msg: 'room created',
// 			chatRoom
// 		})
// 	} catch (error) {
// 		console.log(error)
// 		res.status(503).json({msg: "servers on fire"})
// 	}
// 	res.json({msg: 'created a room'})
// })

// POST /timeline -> add a chat message to a user (***NEEDS TO BE ADDED TO TIMELINE AS WELL***)
router.post('/addmessage', requiresToken, async (req, res) => {
	try {
		//get current user
		let user = res.locals.user
		let input = req.body.content
		let newMessage = await db.Messages.create({
			content: req.body.content,
			author: res.locals.user
		})
		let chatroom = await db.Chatroom.findOne({})
		chatroom.messages.push(newMessage)
		user.messages.push(newMessage)
		await user.save()
		await chatroom.save()
		res.json({ 
			msg: `user ${user.name} is trying to add a new message`, 
			content: `${input}`
		});
	} catch (error) {
		console.log(error)
		res.status(503).json({msg: 'servers on fire'})
	}
});

// DELETE /timeline -> Remove your own
router.delete('/:messageId', (req, res) => {
	let pId = req.params.messageId;
	res.json({ msg: `remove your own message:${pId} from the timeline ` });
});

module.exports = router;
