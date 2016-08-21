var main = angular.module('main', ['ngRoute'])

.config(function($routeProvider){
	$routeProvider
		.when('/blog', {
			templateUrl: './pages/blog.html',
			controller: 'BlogController'
		})
		.when('/contact', {
			templateUrl: './pages/contact.html',
			controller: 'ContactController'
		})
		.when('/cv', {
			templateUrl: './pages/cv.html',
			controller: 'CVController'
		})
		.otherwise({redirectTo: '/index.html' });
})

.controller('CVController', function($scope){
		$scope.message="Hello!!!"
})

.controller('BlogController', function($scope){
	$scope.message="Hello!!!"
})

.controller('ContactController', function($scope){
	$scope.message="Hello!!!"
})()
