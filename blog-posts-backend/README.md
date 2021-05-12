# Blog-post APIs
```
Tech used in this project: NodeJs, ExpressJs, axios.
```

# Project Structure
```
├── README.md
└── bolg-posts-backend
    ├── Dockerfile
    ├── README.md
    ├── config.js
    ├── controllers
    │   ├── ping.controller.js
    │   └── posts.controller.js
    ├── main.js
    ├── package-lock.json
    ├── package.json
    ├── routes
    │   ├── ping.route.js
    │   └── posts.route.js
    ├── services
    │   └── posts.service.js
    └── test
        └── test-endpoints.js
```
# Live URLs
* `React app`: https://mighty-depths-98457.herokuapp.com/
* `nodejs api`: https://secure-oasis-88951.herokuapp.com


## Base URL
* Local: http://localhost:3001
* Deployed: https://secure-oasis-88951.herokuapp.com


### Endpoints
* [GET] /api/ping
* [GET] /posts?tags=&sortBy=&direction=

### Setup
* ``Make sure you have node installed``
* Open your terminal in the project directory 
* Then type: ```npm install```

### Run
* Open your terminal in the project directory
* To start the server type: `nodemon`
* `Note`: Server will start on localhost on port 3001



### Usage
```
. First endpoint: localhost:3001/api/ping 
. Second endpoint: localhost:3001/api/posts?tags=&sortBy=&direction=
. Examples:
   - http://localhost:3001/api/posts?tags=history,science&sortBy=id&direction=asc
   - http://localhost:3001/api/posts?tags=history,science
```

## To test on deployed version
```
. First endpoint: https://secure-oasis-88951.herokuapp.com/api/ping 
. Second endpoint: https://secure-oasis-88951.herokuapp.com/api/posts?tags=&sortBy=&direction=
. Examples:
   - https://secure-oasis-88951.herokuapp.com/api/posts?tags=history,science&sortBy=id&direction=asc
   - https://secure-oasis-88951.herokuapp.com/api/posts?tags=history,science
```

### Run Test file
* Open your terminal in the project directory
* Type: `npm test`

## References
Please refer to the bellow URLs if you need to understand any of the topics:
- [Concurrent requests](https://www.storyblok.com/tp/how-to-send-multiple-requests-using-axios)
- [Server side cashe](https://www.npmjs.com/package/apicache)
- [Testing using chaiJs](https://www.chaijs.com/)
- [More on unit testing with mocha&chai](https://buddy.works/guides/how-automate-nodejs-unit-tests-with-mocha-chai)
- [How to use axios](https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/)