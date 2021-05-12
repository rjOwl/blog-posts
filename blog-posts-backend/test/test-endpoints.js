const expect  = require('chai').expect;
const request = require('request');
const axios = require('axios');
const baseEndPoint = `http://localhost:3001/api/`

describe('Blog Posts APIs tests', function() {
  describe('/ping endpoint', function() {
    it('Should return the correct body for /ping', function(done) {
        request(`${baseEndPoint}ping`, function(error, response, body) {
          expect(body).to.equal('{"success":true}');
            done();
        });
    });
    it('Should return "End point Not found" body for incorrect endpoint: /pings', function(done) {
        request(`${baseEndPoint}pings`, function(error, response, body) {
            expect(body).to.equal('End point Not found');
            done();
        });
    });
    it('Should return 200 status code for /ping', function(done) {
      request(`${baseEndPoint}ping`, function(error, response, body) {
          expect(response.statusCode).to.equal(200);
          done();
      });
    });
    it('Should return 400 status code for incorrect endpoint: /pings', function(done) {
      request(`${baseEndPoint}pings`, function(error, response, body) {
          expect(response.statusCode).to.equal(400);
          done();
      });
    });
  })

  describe('/posts endpoint', function() {
    it('Should return 200 status code when tags', function(done) {
      request(`${baseEndPoint}posts?tags=tech`, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
    it('Should return 400 status code when endpoint is incorrect', function(done) {
      request(`${baseEndPoint}posts?tags=tech`, function(error, response, body) {
          expect(response.statusCode).to.equal(400);
          done();
      });
    });
    it('Should return 400 status code when there\'s no tags in the parameter', function(done) {
      request(`${baseEndPoint}posts`, function(error, response, body) {
          expect(response.statusCode).to.equal(400);
          done();
      });
    });
    it('Should return 200 status code when all three parameters exist', function(done) {
      request(`${baseEndPoint}posts?tags=health,tech&sortBy=likes&direction=desc`, function(error, response, body) {
          expect(response.statusCode).to.equal(200);
          done();
      });
    });
    it('Should return 200 status code when tags exists and any of the other parameters exists', function(done) {
      request(`${baseEndPoint}posts?tags=health,tech&sortBy=popularity`, function(error, response, body) {
          expect(response.statusCode).to.equal(200);
          done();
      });
    });
    it('Should return 400 status code when tags exists and any of the other parameters doesn\'t match', function(done) {
      request(`${baseEndPoint}posts?tags=health,tech&sortBy=popularities`, function(error, response, body) {
          expect(response.statusCode).to.equal(400);
          done();
      });
    });
    it('Will pass the test when posts don\'t have duplicate values', function(done) {
      axios.get(`${baseEndPoint}posts?tags=health,tech`)
      .then(res => {
        let post = res.data;
        let postID = [];
        let postObj = {};
        let test = true;
        // Gets all post ids
        for (let i = 0; i < post.length; i++) {
          postID.push(post[i].id)
        }
        postID.forEach(blog => {
          postObj[blog] = postObj[blog] ? postObj[blog] + 1 : 1
        })
        // If greater than one then there are duplicates and test will fail
        for (let key in postObj) {
          if (postObj[key] > 1) {
            test = false
          }
        }
        expect(test).to.equal(true);
        })
        .catch(error => {
          //console.log(error)
        })
        done();
    });

  });
});
