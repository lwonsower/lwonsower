var main = angular.module('main', ['ngRoute'])

.config(function($routeProvider){
	$routeProvider
		.when('/contact', {
			templateUrl: '/pages/contact.html',
			controller: 'ContactController'
		})
		.when('/cv', {
			templateUrl: '/pages/cv.html',
			controller: 'CVController'
		})
		.when('/socialmedia', {
			templateUrl: '/pages/socialmedia.html',
			controller: 'SocialMediaController'
		})
		.otherwise({redirectTo: '/index.html' });
})

.controller('CVController', function($scope){
	$scope.message="Hello!!!"
})

.controller('ContactController', function($scope){
	$scope.message="Hello!!!"
})

.controller('SocialMediaController', function($scope, GetFeed){
	$scope.content = [];
	$scope.getData = () => {
		GetFeed.tumblrFeed().then(function(data){
			$scope.content.push(data);
			GetFeed.instagramFeed().then(function(data2){
				$scope.content.push(data2)
					console.log("inside controller", $scope.content)
			})
		});
	}	
})

.factory(`GetFeed`, ($http, $window) => {
	let tumblrFeed = () => {
    return $http({
      method: 'GET',
      url: '/tumblr'
    }).then( res => {
    	console.log("tumblr", res)
      return res;
    })
  }
  let instagramFeed = () => {
    return $http({
      method: 'GET',
      url: '/instagram'
    }).then(res => {
    	console.log("insta", res)
      return res;
    })
  }

  return {
  	tumblrFeed: tumblrFeed,
  	instagramFeed: instagramFeed
  }
});
