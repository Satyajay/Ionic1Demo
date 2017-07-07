(function() {
	'use strict';

	angular
		.module('barebone.badged-tabs', [
			'ionic'
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app.badged-tabs', {
					url: '/badged-tabs',
					abstract: true,
					views: {
						'menuContent': {
							templateUrl: 'scripts/badged-tabs/badged-tabs.html',
							controller: 'BadgedTabsController as vm'
						}
					}
				})
				.state('app.badged-tabs.one', {
					url: '/one',
					views: {
						'tab-one': {
							templateUrl: 'scripts/badged-tabs/tab-one.html'
						}
					}
				})
				.state('app.badged-tabs.two', {
					url: '/two',
					views: {
						'tab-two': {
							templateUrl: 'scripts/badged-tabs/tab-two.html'
						}
					}
				});
		});
})();