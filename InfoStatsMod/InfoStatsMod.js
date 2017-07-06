(function () {
		var myPath = GDT.getRelativePath();
		var ready = function () {
				var readyEx = function () {
						InfoStatsModAbescoUG.init();
				};
				
				var errorEx = function () {
				};
		
        var jsfiles = [];
				var jsfileNameParts = [
					"charts",
					"datalist", 
					"modal", 
					"footer", 
					"image-picker", 
					"flot"					
				];
				$.each(jsfileNameParts, function(key, value){
					var jsfile= myPath + "/libs/" + value + ".js";
          jsfiles.push(jsfile);
				});
        jsfiles.push(myPath+"/source/source.js");

				var jslibs = [
					"Prototypes", 
					"Config", 
					"Utils", 
					"Footer", 
					"ReleasedGames", 
					"Analysis", 
					"Platforms", 
					"Notifications"
				];
				$.each(jslibs, function(key, value){
						var jsfile = myPath+"/source/InfoStatsMod_" + value + ".js";
						jsfiles.push(jsfile);
				});
				
				GDT.loadJs(jsfiles, readyEx, errorEx);
		};

		var error = function () {
		};

		<!-- Include one of jTable styles. -->
		GDT.loadJs(["source/InfoStatsMod_Core.js"], ready, error);
})();