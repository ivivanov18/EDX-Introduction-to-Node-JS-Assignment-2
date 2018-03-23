# EDX-Introduction-to-Node-JS-Assignment-2

## Aim
The goal is to put into practice the acquired knowledge in the Express module by setting up a small server that can manage requests to:
- add, update, delete posts
- add, update, delete comments to each post

## To run the app
- Clone the repository with the command `git clone` https://github.com/ivivanov18/EDX-Introduction-to-Node-JS-Assignment-2
- Install the dependencies:
    - `npm install` in the root directory
- Start the server:
    - npm start

## ANSWERS
### 1: 
The entry point of the application is the file server.js which imports the necessary routes to manage posts and/or comments. The store is initialised with one post and 3 comments. A middleware is used to pass the store to req in order to be able to update directly in the posts and comments routes.

### 2:
The project was tested with the following `curl` commands:
Everything works as it should to.
The code was tested using the following curl commands:
- List all posts: `curl "http://localhost:3000/posts/"` : OK

- List all comments for a specific post: `curl "http://localhost:3000/posts/0/comments"`: OK

- Add new post: `curl -H "Content-Type: application/json" -X POST -d '{"name": "Top 10 Node Features", "url":"http://webapplog.com/es6/node", "text": ""}'  "http://localhost:3000/posts" ` : OK

- Update post data at specific id: `curl -H 'Content-Type: application/json' -X PUT -d '{"name": "Top 10 Node Features Every Developer Must Know BY HEART", "url":"http://webapplog.com/es6", "text": ""}' "http://localhost:3000/posts/1"`: OK

- Add comment to specific post: `curl -H "Content-Type: application/json" -X POST -d '{"text": "comment 1 to post 1"}'  "http://localhost:3000/posts/1/comments" `: OK

- Update comment to specific post: `curl -H 'Content-Type: application/json' -X PUT -d '{"text": "MODIFIED: Top 10 Node Features Every Developer Must Know BY HEART"}' "http://localhost:3000/posts/1/comments/0"`: OK

### 3:
I could have added more controls when a new post or comment is added that the app accepts only the specific provided keys.
