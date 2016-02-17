angular.module('shortly.services', [])

.factory('Links', function($http) {
  // Your code here

  var getAll = function() {
    return $http({
        method: 'GET',
        url: '/api/links'
      })
      .then(function(resp) {
        return resp.data;
      });
  };

  var addOne = function(link) {
    return $http({
      method: 'POST',
      url: '/api/links',
      data: link
    });
  };

  return {
    getAll: getAll,
    addOne: addOne
  };
})

.factory('Pokemon', function($http) {
    var getAll = function(callback) {
      $.ajax({
        // This is the url you should use to communicate with the parse API server.
        url: 'http://www.pokeapi.co/api/v2/pokemon/',
        type: 'GET',
        contentType: 'json',
        success: function(data) {
          console.log(data);
          callback(data);
        },
        error: function(data) {
          console.error('CAN NOT COMPUTE');
        }
      });
    };

    var save = function(dataObj) {
      console.log(dataObj);
      return $http({
        method: 'POST',
        url: '/api/pokemon/save',
        data: dataObj
      });

    };

    var getImage = function(id, callback) {
      $.ajax({
        // This is the url you should use to communicate with the parse API server.
        url: 'http://pokeapi.co/api/v1/sprite/' + id + '/',
        type: 'GET',
        contentType: 'json',
        success: function(data) {
          console.log(data.image);
          callback(data.image);
        },
        error: function(data) {
          console.error('CAN NOT COMPUTE');
        }
      });
    };


    return {
      getAll: getAll,
      getImage: getImage,
      save: save
    };
  })
  .factory('Trainer', function($http, $location, $window) {
    var getParty = function() {
      return $http({
          method: 'GET',
          url: '/api/trainer/party?user=' + $window.sessionStorage.user
        })
        .then(function(resp) {
          return resp.data;
        });

    };

    return {
      getParty: getParty
    };
  })
  .factory('Auth', function($http, $location, $window) {
    // Don't touch this Auth service!!!
    // it is responsible for authenticating our user
    // by exchanging the user's username and password
    // for a JWT from the server
    // that JWT is then stored in localStorage as 'com.shortly'
    // after you signin/signup open devtools, click resources,
    // then localStorage and you'll see your token from the server
    var signin = function(user) {
      return $http({
          method: 'POST',
          url: '/api/users/signin',
          data: user
        })
        .then(function(resp) {
          return resp.data.token;
        });
    };

    var signup = function(user) {
      return $http({
          method: 'POST',
          url: '/api/users/pokeSignUp',
          data: user
        })
        .then(function(resp) {
          return resp.data;
        });
    };

    var isAuth = function() {
      return !!$window.localStorage.getItem('com.shortly');
    };

    var signout = function() {
      $window.localStorage.removeItem('com.shortly');
      $location.path('/signin');
    };


    return {
      signin: signin,
      signup: signup,
      isAuth: isAuth,
      signout: signout
    };
  });
