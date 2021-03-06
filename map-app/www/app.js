requirejs.config({
	// By default, load modules from the lib directory:
    baseUrl: "lib",
    // except, if the module ID starts with "app",
    // load it from the app directory. Paths
    // config is relative to the baseUrl, and
    // never includes a ".js" extension since
    // the paths config could be for a directory.
    paths: {
        app: "../app",
		view: "../app/view",
		stubview: "../app/stubview",	// for testing
		model: "../app/model",
		presenter: "../app/presenter",
		data: "../app/data",

		//jQuery: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-beta1/jquery.min",
		// If we want to load D3 from a local source:
		//d3: "d3.v3.min"
		//topojson: "http://d3js.org/topojson.v1.min",
		d3: "https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.16/d3.min",
		//topojson: "https://cdnjs.cloudflare.com/ajax/libs/topojson/1.6.19/topojson.min",

		// postal (eventbus) depends on lodash.
		postal: "postal.min",
		lodash: "lodash.core",

		// In order to allow requireJs to have dependencies on JSON files, we need to pull in the require/json plugin:
		//json: "require/json",
		// The require/json plugin depends on text:
		//text: "text"

		leaflet: "leaflet.1.0.0.rc1",
		leafletAwesomeMarkers: "leaflet.awesome-markers.min"
    }
});

requirejs(["app/main"], function(main) {
	"use strict";
	console.log("app/main.js has been loaded");
	main.init();
});
