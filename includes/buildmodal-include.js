console.log("Included buildmodal-include.js");

var contentStringArray = ["pageSettings", "help"];


(function ( $ ) {

	$.fn.buildModal = function(options) {

		// console.log("buildModal()");

		var settings = $.extend({
			action: "show",
			contentURL: ""
		}, options)
		
		var randomQueryNumber = Math.floor((Math.random()*100)+1);

		// console.log("buildModal.options.action == " + options.action);
		// console.log("buildModal.options.contentURL == " + options.contentURL);


		// Reset
		$(this).find(".loading-overlay").show();
		$(this).find("#build-modal-content").empty();

		// Load Content		
		if (options.contentURL == null || options.contentURL == undefined ) {
			console.log("ArgumentError - options.contentURL not defined. Must contain valid URL to modal content include.");
			return false;
		}

		else

		if (options.contentURL != null) {
		
			console.log("Call Modal Content");

			$(this).find("#build-modal-content").load(options.contentURL + "?nocache=" + randomQueryNumber.toString(), function(){
				// console.log("Content Loaded");
			})

			$(this).find(".loading-overlay").fadeOut(400);

		}


		// Show Modal
		if (options.action == "show") {
			$(this).modal("show");
		} else
		if (options.action == "hide") {
			$(this).modal("hide");
		} else {
			$(this).modal("show");
		};

		return this;

	};
	
	$.fn.buildGlobalError = function(options) {
	
		var settings = $.extend({
			message: "show",
			kind: "info"
		}, options)
	
	}


}( jQuery ));


// openModal("pageSettings");
// loadModalContent("pageSettings");