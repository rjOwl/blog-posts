const PostsService = require('../services/posts.service')    
const sortByList = ['id', 'reads', 'likes', 'popularity', undefined];
const directionList = ['asc', 'desc', undefined];

const getPosts = async (req, res)=>{
    console.log(req.query)
    let { tags, sortBy, direction } = req.query;

    console.log(tags, sortBy, direction)
    if(tags===undefined || !decodeURI(tags).replace(/\s/g, ""))
        return res.status(400).send({ error: 'Tags parameter is required' })
    else if(sortByList.indexOf(sortBy) === - 1)
        return res.status(400).send({ error: 'sortBy parameter is invalid' })
    else if(directionList.indexOf(direction) === - 1)
       return res.status(400).send({ error: 'direction parameter is invalid' })

    console.log("Tags: ", tags, tags.length)
    console.log("Sort By: ", sortBy)
    console.log("Sort Type: ", direction)
    try{
        posts = await PostsService.getPosts(decodeURI(tags).replace(/\s/g, ""), sortBy, direction)
        return res.status(posts.status).json(posts.data)
        }catch(err){
        console.log(err)
        return res.status(400).json({"status": "ERROR"})
    }
}

module.exports = {
    getPosts: getPosts
}