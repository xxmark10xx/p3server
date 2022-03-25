const router = require('express').Router();
const db = require('../../models');
const requiresToken = require('../requiresToken')

// GET /timeline -> view main timeline chatroom
router.get('/', (req, res) => {
	res.json({ msg: 'main timeline chatroom' });
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

// POST /timeline -> add a chat to the timeline
router.post('/', requiresToken, async (req, res) => {
	//res.locals.user = current user trying to post a message
	// console.log(res.locals.user)
	console.log(res.locals.user)
	//get current user
	try {
		let user = res.locals.user
		let input = req.body.content
		let newMessage = await db.Messages.create({
			content: req.body.content,
			author: res.locals.user
		})
		user.messages.push(newMessage)
		await user.save()
		// let commentingUser = await db.User.findByIdAndUpdate(user.id,{ "$push": {"messages" : newMessage} })
		
		console.log(user.messages)
		res.json({ 
			msg: `user ${user.name} is trying to add a new message`, 
			content: `${input}`,  
			// comments: `${commentingUser}`
		});
	} catch (error) {
		console.log(error)
	}
	//get content input
	//assign input to current user
	//save in db
});

// DELETE /timeline -> Remove your own
router.delete('/:messageId', (req, res) => {
	let pId = req.params.messageId;
	res.json({ msg: `remove your own message:${pId} from the timeline ` });
});

module.exports = router;
