# Blog-posts web app
For more info on how to run locally, or any other info refer to the `README.md` inside the `blog-posts-backend` directory to start the server README.md inside `blog-posts-frontend` directory to run the web app

## Whole Project Structure
```
├── README.md
├── blog-posts-frontend
│   ├── README.md
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   └── src
│       ├── App.css
│       ├── App.js
│       ├── App.test.js
│       ├── index.css
│       ├── index.js
│       ├── logo.svg
│       ├── reportWebVitals.js
│       └── setupTests.js
└── blog-posts-backend
    ├── Dockerfile
    ├── README.md
    ├── config.js
    ├── controllers
    │   ├── ping.controller.js
    │   └── posts.controller.js
    ├── main.js
    ├── package-lock.json
    ├── package.json
    ├── routes
    │   ├── ping.route.js
    │   └── posts.route.js
    ├── services
    │   └── posts.service.js
    └── test
        └── test-endpoints.js
```

# Live URLs
* `React.JS app`: https://mighty-depths-98457.herokuapp.com/
* `Node.JS api`: https://secure-oasis-88951.herokuapp.com


## git hooks
### pre-commit
```
#!/bin/sh

mv "blog-posts-frontend/.git" "blog-posts-frontend/.git2"
mv "blog-posts-backend/.git" "blog-posts-backend/.git2"

git rm --cached blog-posts-frontend
git rm --cached blog-posts-backend

git add blog-posts-frontend/*
git add blog-posts-backend/*

git reset blog-posts-frontend/.git2
git reset blog-posts-backend/.git2
```
### post-commit
```
#!/bin/sh

mv "blog-posts-frontend/.git2" "blog-posts-frontend/.git"
mv "blog-posts-backend/.git2" "blog-posts-backend/.git"
```
## References
Please refer to the bellow URLs if you need to understand any of the topics:
- [Concurrent requests](https://www.storyblok.com/tp/how-to-send-multiple-requests-using-axios)
- [Server side cashe](https://www.npmjs.com/package/apicache)
- [Testing using chaiJs](https://www.chaijs.com/)
- [More on unit testing with mocha&chai](https://buddy.works/guides/how-automate-nodejs-unit-tests-with-mocha-chai)
- [How to use axios](https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/)
- [Creating git hooks](https://stackoverflow.com/questions/34618950/git-ignore-git-folder)