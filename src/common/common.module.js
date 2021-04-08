(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://mysterious-tor-96594.herokuapp.com/')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
