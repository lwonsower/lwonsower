angular.module('main', ['pages', 'ngroute' ])

.config(function($routeProvider){
	$routeProvider
		.when('/blog', {
			templateUrl: 'pages/blog.html',
			controller: 'BlogController'
		})
		.when('/contact', {
			templateUrl: 'pages/contact.html',
			controller: 'ContactController'
		})
		.when('/cv', {
			templateUrl: 'pages/cv.html',
			controller: 'CVController'
		})
		.otherwise({redirectTo: '/index.html' });
});

angular.module('pages', []{
	.controller('CVController', function($scope){
		$scope.message="Hello!!!"
	})
})

angular.module('pages', []{
	.controller('BlogController', function($scope){
		$scope.message="Hello!!!"
	})
})

angular.module('pages', []{
	.controller('ContactController', function($scope){
		$scope.message="Hello!!!"
	})
})