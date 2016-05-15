'use strict';
let {List, Map} = require('immutable');

let reducer = require('../lib/reducers');
let actions = require('../lib/actions');

describe('reducers', function() {
   let url;

   beforeEach(function() {
      url = 'http://google.com'
   })

   describe('fetch reducer', function() {

      it('should add an entry in the state for this url', function() {
         let action = actions.fetchUrl(url);
         let nextState = reducer(undefined, action);
         nextState.size.should.equal(1);
         nextState.getIn([url, 'url']).should.equal(url);
         nextState.getIn([url, 'fetching']).should.equal(true);
         nextState.getIn([url, 'fetched']).should.equal(false);
      });

      it('should only fetch a url once', function() {
         let action = actions.fetchUrl(url);
         let initialState = Map({
         });
         initialState.set(url, Map({url, fetching: true, fetched: false}));
         let nextState = reducer(initialState, action);
         
         nextState.size.should.equal(1);
      })
   });
   
   describe('fetched url', function() {
      
      it('should do nothing if the state does not contain the url', function() {
         let initialState = Map();
         let action = actions.fetchedUrl(url, 'body');
         let nextState = reducer(initialState, action);
         nextState.size.should.equal(0);
      });
      
      it('should set the body property in a state containing the url', function() {
         let initialState = Map({
         });
         initialState = initialState.set(url, Map({url, fetching: true, fetched: false}))
         let action = actions.fetchedUrl(url, 'body');
         let nextState = reducer(initialState, action);
         console.log(initialState);
         console.log(nextState);
         nextState.getIn([url, 'body']).should.equal('body');
      });
   })
});