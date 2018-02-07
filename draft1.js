angular.module('app', ['ui.router'])
    
    .config(
                ['$stateProvider',
                    '$urlRouterProvider',
                    
        function ($stateProvider,
                    $urlRouterProvider) {
    
            $stateProvider
    
                .state('home', {
                    url: '/',
                    templateUrl: '/partials/home.html'
                })
    
                .state('contact', {
                    url: '/contact',
                    templateUrl: '/partials/contact.html',
                    controller: 'ContactController',
                })
    
                .state('articles', {
                    url: '/articles',
                    templateUrl: '/partials/articles.html',
                    resolve: {
                        articles: 'ArticlesService'
                    },
                    controller: 'ArticlesController'
                })
    
                .state('articles.article', {
                    url: '/:pageName',
                    templateUrl: function ($stateParams) {
                        return '/partials/articles/' +
                            $stateParams.pageName + '.html';
                    }
                });
    
            $urlRouterProvider.otherwise('/');
        }]);