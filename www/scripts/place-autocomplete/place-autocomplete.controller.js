(function () {
	'use strict';

	angular
		.module('barebone.place-autocomplete')
		.controller('PlaceAutocompleteController', PlaceAutocompleteController);

	PlaceAutocompleteController.$inject = [];

	/* @ngInject */
	function PlaceAutocompleteController() {
		var vm = angular.extend(this, {
			onAddressSelection: onAddressSelection,
			geo: '',
			data: {},
			countryCode: 'US'
		});

		// *******************************************************************

		function onAddressSelection(data) {
			console.log(data);
			var location = data.geometry.location;
			vm.geo = location.lat() + ', ' + location.lng();
		}
	}
})();