module.exports = {
    getComments(req, res) {
        res.status(200).send(req.store.posts[req.params.id].comments);  
    },
    addComment(req, res) {
        const postId = req.params.id;
        if(postId >= req.store.posts.length) {
            console.log("postId >= Length");
            return res.sendStatus(400);
        }
        let newComment = req.body;
        let id = req.store.posts[req.params.id].comments.length;
        req.store.posts[req.params.id].comments.push(newComment);
        res.status(201).send({id: id});
    },
    updateComment(req, res) {
        const postId = req.params.postId;
        if(postId >= req.store.posts.length) return res.sendStatus(400);

        const commentId = req.params.commentId;
        if(commentId >= req.store.posts[postId].comments.length) return res.sendStatus(400);

        Object.assign(req.store.posts[postId].comments[commentId] , req.body);
        res.status(204).send("Comment updated");
    },
    removeComment(req, res) {
        const postId = req.params.postId;
        if(postId >= req.store.posts.length) return res.sendStatus(400);

        const commentId = req.params.commentId;
        if(commentId >= req.store.posts[postId].comments.length) return res.sendStatus(400);

        //postId is contained in request       
        req.store.posts[postId].comments.splice(commentId, 1);
        res.status(204).send("Post deleted");
    }
}