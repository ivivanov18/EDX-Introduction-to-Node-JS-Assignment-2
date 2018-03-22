const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const logger = require('morgan');

const routes = require('./routes');

const app = express();


//Initialization of the store
let store = {
    posts: [
      {name: 'Top 10 ES6 Features every Web Developer must know',
      url: 'https://webapplog.com/es6',
      text: 'This essay will give you a quick introduction to ES6. If you don’t know what is ES6, it’s a new JavaScript implementation.',
      comments: [
        {text: 'Cruel…..var { house, mouse} = No type optimization at all'},
        {text: 'I think you’re undervaluing the benefit of ‘let’ and ‘const’.'},
        {text: '(p1,p2)=>{ … } ,i understand this ,thank you !'}      
      ]
      }
    ]
  }


app.use(bodyParser.json());
app.use(logger('dev'));
app.use(errorHandler());
app.use((req, res, next) => {
  req.store = store;
  next();
})

////////////POSTS////////////
app.get('/posts',(req, res) => {
  routes.posts.getPosts(req,res);
});

app.post('/posts',(req,res) => {
  routes.posts.addPost(req,res,store);
})

app.put('/posts/:id', (req, res) => {
  routes.posts.updatePost(req, res);
});

app.delete('/posts/:id', (req, res) => {
  routes.posts.removePost(req, res);
});

////////////COMMENTS////////////
app.get('/posts/:id/comments',(req, res) => {
  routes.comments.getComments(req,res);
});

app.post('/posts/:id/comments',(req,res) => {
  routes.comments.addComment(req,res,store);
})

app.put('/posts/:postId/comments/:commentId', (req, res) => {
  routes.comments.updateComment(req, res);
});

app.delete('/posts/:postId/comments/:commentId', (req, res) => {
  routes.comments.removeComment(req, res);
});


app.listen(3000)


