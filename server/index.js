require('dotenv').config();
const {sequelize} = require('./util/database')
const {SERVER_PORT} = process.env

const {User} = require('./models/user')
const {Checklist} = require('./models/checklist')

const express = require('express')
const cors = require('cors')

// const {getAllPosts, getCurrentUserPosts, addPost, editPost, deletePost} = require('./controllers/posts')
const {addPokemon} = require('./controllers/checklist')
const {register, login} = require('./controllers/auth')
const {isAuthenticated} = require('./middleware/isAuthenticated')

const app = express();

app.use(express.json())
app.use(cors())
//                                                                                                                                                                              //


User.hasMany(Checklist)
Checklist.belongsTo(User)




//~AUTH
app.post('/register', register)
app.post('/login', login)

// //^ GET POSTS - no auth required
// app.get('/posts', getAllPosts)

// //* CRUD POSTS - auth required
// app.get('/userposts/:userId', getCurrentUserPosts)
app.post('/posts', isAuthenticated, addPokemon)
// app.put('/posts/:id', isAuthenticated, editPost)
// app.delete('/posts/:id', isAuthenticated, deletePost)

// sequelize.sync({ force: true }) this wipes all the data clean, users and posts, which could be nice to delete tests. replace sync below
sequelize.sync()
.then(() => {
app.listen(SERVER_PORT, () => console.log(`db sync successful & server running on port ${SERVER_PORT}`))})
.catch(err => console.log(err))