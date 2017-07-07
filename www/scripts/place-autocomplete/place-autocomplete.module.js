(function() {
	'use strict';

	angular
		.module('barebone.place-autocomplete', [
			'ionic',
			'ion-google-autocomplete'
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app.place-autocomplete', {
					url: '/place-autocomplete',
					views: {
						'menuContent': {
							templateUrl: 'scripts/place-autocomplete/place-autocomplete.html',
							controller: 'PlaceAutocompleteController as vm'
						}
					}
				});
		});
})();