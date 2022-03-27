const router = require('express').Router();
const db = require('../../models');
const requiresToken = require('../requiresToken')

// GET /timeline -> view main timeline chatroom messages
router.get('/', async (req, res) => {
	//get the chatroom
	const chatroom = await db.Chatroom.findOne()
	//get all messages within the chatroom
	const messages = await db.Messages.find({
		id: chatroom.messages
	})
	res.json({messages});
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

// POST /timeline
router.post('/addmessage', requiresToken, async (req, res) => {
	try {
		//get current user
		let user = res.locals.user
		//create new message with the content from on-page form and author as currentuser
		let newMessage = await db.Messages.create({
			content: req.body.content,
			author: user
		})
		let chatroom = await db.Chatroom.findOne({})
		//add the new message to the chatroom
		chatroom.messages.push(newMessage)
		//add the new message to the user
		user.messages.push(newMessage)
		await user.save()
		await chatroom.save()
		res.json({ 
			msg: `user ${user.name} is trying to add a new message`, 
			content: `${newMessage.content}`,
			user: {user}
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
