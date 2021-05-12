const axios = require('axios');
const { response } = require('express');
const baseUrl = `https://hatchways.io/api/assessment/blog/posts?`

getPosts = async(tags, sortBy="id", direction="asc")=>{
    tag = tags.split(",")
    tags = tag.filter(el=> el.length>1)

    if(tags.length==1){ // Only one tag found then no need to make concurrent calls
        const endPoint = `${baseUrl}tag=${tags}&sortBy=${sortBy}&direction=${direction}`
        console.log(endPoint)
        const posts = await axios.get(endPoint)
        .then((response) => {
            data = response.data.posts
            if(direction === "desc")
                data = data.sort((a, b) => (b[sortBy] > a[sortBy]) ? 1 : -1);
            else
                data = data.sort((a, b) => (b[sortBy] < a[sortBy]) ? 1 : -1);
            return data
        })
        .catch(err => {
            console.log(err)
            return {"status":400, data: {"status": "ERROR"}}
          });
          return {"status": 200, data:{posts}};
    }
    else{
        // make concurrent calls by using all .spread
        uniqeTags = [...new Set(tags)]
        console.log(uniqeTags)
        let endPoints = uniqeTags.map(tag => axios.get(`${baseUrl}tag=${tag}&sortBy=${sortBy}&direction=${direction}`));
        console.log(endPoints)
        const posts = await axios.all(endPoints)
        .then(axios.spread((...responses) => {
            console.log("WOW")
            // console.log(responses[1].data.posts, responses.length)
            let data=[]
            for(let response of responses){
                // console.log(response)
                if (response.data.posts.length>1)
                    data.push(response.data.posts)
            }
            let post = {};
            let posts = [];
            for (let i = 0; i < data.length; i++) {
              let blog = data[i];
              for (let i = 0; i < blog.length; i++) {
                post[blog[i].id] = blog[i];
              }
            }

            for (let key in post) {
                posts.push(post[key]);
            }
            // console.log(posts)
            if(direction === "desc")
                posts = posts.sort((a, b) => (b[sortBy] > a[sortBy]) ? 1 : -1);
            else
                posts = posts.sort((a, b) => (b[sortBy] < a[sortBy]) ? 1 : -1);
            return posts
        }))
        .catch(err => {
            console.log(err)
            return {"status":400, data: {"status": "ERROR"}}
          });
          return {"status": 200, data:{posts}};
    }
}
module.exports ={
    getPosts: getPosts
}