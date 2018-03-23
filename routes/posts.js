module.exports = {
    getPosts(req, res) {
        res.status(200).send(req.store.posts);  
    },
    addPost(req, res) {
        let newPost = req.body;
        let id = req.store.posts.length;
        req.store.posts.push({...newPost, comments: []});
        res.status(201).send({id: id});
    },
    updatePost(req, res) {
        const postId = req.params.postId;
        if(postId >= req.store.posts.length) return res.sendStatus(400);

        Object.assign(req.store.posts[req.params.id], req.body);
        res.sendStatus(204);
    },
    removePost(req, res) {
        const postId = req.params.postId;
        if(postId >= req.store.posts.length) return res.sendStatus(400);

        req.store.posts.splice(req.params.id, 1);
        //remove all comments linked to post
        res.sendStatus(204);
  
    }
}