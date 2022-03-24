Roman
Mark
Andy

# P3 Concept
- We would like to create a discord/slack 'jr' clone utilizing socket.io
- Users can create an account and start chatting in the main 'timeline' or opt to create a new room for more private/focused chatting.

# Technologies Used
- javascript
- socket.io
- react.js
- express
- mongodb
- mongoose
- Material UI

# User Stories
- as a user i want to create an account to start chatting
- as a user i want to have different chat rooms to contribute to or read from
- as a user i want to login in and log out of my account
- as a user i want to be able to delete my account
- as a user i want to have a feed / home that shows different posts.
- as a user i want to have a profile where i could edit my name, profile picture, and the about me section
- as a user i want to see a name, thumbnail of profile picture, and timestamp for each post

# MVP goals
- chat app usable by many users at once
- A user can make a new room 
- access to different 'rooms'
- edit user profile
- delete user profile 
- see other profiles 
- live messages 

# Stretch Goals
- ability to post something other than text (images, sound, etc)
- differentiate between private/public rooms - auth lock'd rooms

# Routes
| Method | Path                        | Purpose                                           |
|--------|-----------------------------|---------------------------------------------------|
| GET    | `/`                         | landing / home                                    |
| GET    | `/signup`                   | sign up / registration page                       |
| POST   | `/signup`                   | create new user in db                             |
| GET    | `/login`                    | login page                                        |
| GET    | `/profile`                  | display user profile page                         |
| GET    | `/profile/:id`              | displays specific users profile                   |
| PUT    | `/profile/:id`              | update personal user profile                      |
| DELETE | `/profile/:id`              | delete personal profile                           |
| GET    | `/timeline`                 | view main 'timeline' chatroom                     |
| POST   | `/timeline`                 | add a chat to the timeline                        |
| DELETE | `/timeline/:messageId`      | remove your own message from the timeline         |
| GET    | `/rooms`                    | view all chatrooms you are subscribed to          |
| POST   | `/rooms`                    | create a new chatroom                             |
| GET    | `/rooms/:roomId`            | view specific chatroom                            |
| DELETE | `/rooms/:roomId`            | delete a specific chatroom                        |
| PUT    | `/rooms/:roomId`            | update details about a specific chatroom          |
| POST   | `/rooms/:roomId`            | add message to specific chat room                 |
| DELETE | `/rooms/:roomId/:messageId` | delete a specific message from a specific room    |
| PUT    | `/rooms/:roomId/:messageId` | edit an already-posted message in a specific room |