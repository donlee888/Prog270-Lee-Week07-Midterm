/**
 * @author Charlie Calvert
 */


angular.module('elvenApp', ['pres'])
.controller('MyController', function($scope, $http, presidents) {
    $scope.hint = "<p>Start with <strong>node server.js</strong> to retrieve JSON from Server</p>";
    
    // $scope.presidents = presidents;
    $scope.presidents = presidents.query({}, function(users) {
      $scope.presidentsLength = $scope.presidents.length;
      console.log($scope.presidentsLength);
    });
	
	var getDataJson = $http.get('data.json');

	getDataJson.success(function(data, status, headers, config)  {
		$scope.data = data;
	});
	
	getDataJson.error(function(data, status, headers, config) {
		throw new Error('Oh no! An Error!');
	});

});

angular.module('pres', ['ngResource'])
.factory('presidents', function($resource) {
	console.log('Presidents factory called');
	var Presidents = $resource('https://api.mongolab.com/api/1/databases/prog270/collections/Widgets/:id', {
      // apiKey:'4fb51e55e4b02e56a67b0b66',
      apiKey:'mVioK7RiTicJ2u1wTH2OS9qxgspvQ8Es',
      id:'@_id.$oid'
    });

    Prog270.prototype.getPresidentName = function() {
      return this.firstName;
    };
    
    Prog270.prototype.getPresidentName = function() {
      return this.lastName;
    };
    
    return Presidents;	 
	// return { a: 2 };		
});
