﻿function unpackModal() {
	console.log("unpackModal()");
	randomQueryNumber = Math.floor(Math.random() * 100 + 1);
	$.getScript(buildModalJSIncludePath + "?nocache=" + randomQueryNumber.toString())
}
var buildModalHTMLIncludePath = "includes/buildmodal-include.html",
	buildModalJSIncludePath = "includes/buildmodal-include.js";
$(document).ready(function() {
	console.log("Including Modals");
	console.log("Included buildmodal-include.html");
	randomQueryNumber = Math.floor(Math.random() * 100 + 1);
	$("#build-menu-modal-container").load(buildModalHTMLIncludePath + "?nocache=" + randomQueryNumber.toString(), unpackModal)
});