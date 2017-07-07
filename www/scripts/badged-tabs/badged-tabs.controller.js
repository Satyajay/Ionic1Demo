(function() {
	'use strict';

	angular
		.module('barebone.badged-tabs')
		.controller('BadgedTabsController', BadgedTabsController);

	BadgedTabsController.$inject = [];

	/* @ngInject */
	function BadgedTabsController() {
		var vm = angular.extend(this, {
			tab1Badge: 10,
			tab2Badge: 43
		});
	}
})();