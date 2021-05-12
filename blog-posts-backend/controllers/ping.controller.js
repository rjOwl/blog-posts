const PostsService = require('../services/posts.service')    
const sortByList = ['id', 'reads', 'likes', 'popularity', undefined];
const directionList = ['asc', 'desc', undefined];
const url = require('url');

const getPing = async (req, res)=>{
    return res.json({"success": true})
}

module.exports = {
    getPing: getPing
}