'use strict';

let actions = require('../lib/actions');

describe('actions', function() {
    
    let url;
    
    beforeEach(function() {
        url = 'http://google.com'
    })
    
    describe('fetchUrl', function() {

        it('should return the correct action', function() {
            let action = actions.fetchUrl(url);
            action.url.should.equal(url);
            action.type.should.equal(actions.FETCH_URL);
        });
    });
    
    describe('fetchedUrl', function() {
        
        it('should return the correct action', function() {
            let action = actions.fetchedUrl(url, 'body');
            action.url.should.equal(url);
            action.type.should.equal(actions.FETCHED_URL);
            action.body.should.equal('body');
        })
    })
})
