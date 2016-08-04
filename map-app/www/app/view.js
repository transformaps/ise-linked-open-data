// This is the place where the various views are pulled into the application.
define(["d3", "view/map", "view/menu", "view/tabs"], function(d3, map, menu, tabs) {
	"use strict";

	function init() {
		d3.select("#about-btn")
		.attr("title", "See information about this app in new tab")
		.on("click", function() { window.open("https://github.com/p6data-coop/ise-linked-open-data/blob/master/map-app/README.md", "_blank");});

		map.init();
		menu.init();

		// Initialize the tabs controls, and the content of each tab:
		tabs.init();
	}
	var pub = {
		init: init
	};
	return pub;
});

