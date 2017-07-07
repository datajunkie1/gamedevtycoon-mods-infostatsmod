/*

GameDevTycoon Expansion Module
**********************************************************************************************************************************************************
Name:                 InfoStatsMod
Description:          Provides detailed information and statistics to games released, provides charts and analysis to game sales and financial themes.
Copyright:            � 2013 Francesco Abbattista
Url:                  http://www.abesco.de/
Notes:                Originally inspired and partially based on techniques from the expansion modules: Expansion Pack and CheatMod.
Credits:              Big thanks and respect goes out to DzjengisKhan, LineLiar and kristof1104.
                      ExpansionPack for GDT by DzjengisKhan, LineLiar
                      CheatMod      for GDT by kristof1104
**********************************************************************************************************************************************************
Version:              0.3.1
Launch:               December 09th, 2013
Last Update:          December 22th, 2013
**********************************************************************************************************************************************************

Using the following additional scripts:
**********************************************************************************************************************************************************
jquery.datalist.js    Name:       DataList
                      Version:    1.0
                      Copyright:  � 2013 Francesco Abbattista, � 2010 Benjamin Léouzon
                      License:    MIT (http://www.opensource.org/licenses/mit-license.php)
**********************************************************************************************************************************************************
charts.js             Name:       Charts
                      Version:    1.1.2
                      Copyright:  � 2008 Steve Fenton
                      License:    <unknown> probably MIT (http://www.opensource.org/licenses/mit-license.php) - "Feel free to use this jQuery Plugin"                          
**********************************************************************************************************************************************************
jquery.flot.min.js    Name:       Flot (Attractive JavaScript plotting for jQuery)
                      Version:    0.8.0
                      Copyright:  � 2013 IOLA and Ole Laursen
                      License:    Licensed under the MIT (filamentgroup.com/examples/mit-license.txt)
**********************************************************************************************************************************************************
modal.js              Name:       Simple jQuery modal window
                      Version:    <unknown>
                      Copyright:  Matt Hinchliffe <www.maketea.co.uk>
                      License:    Licensed under the terms of CC 3.0 (http://creativecommons.org/licenses/by-sa/3.0/)
**********************************************************************************************************************************************************
image-picker.js       Name:       Image Picker
                      Version:    0.1.7
                      Copyright:  Rodrigo Vera https://github.com/rvera/image-picker
                      License:    MIT License, https://github.com/rvera/image-picker/blob/master/LICENSE
**********************************************************************************************************************************************************
footer.js             Name:       Constant Footer
                      Version:    1.0.0
                      Copyright:  � 2008 Steve Fenton, Modifications for this module � 2013 Francesco Abbattista
                      License:    <unknown> probably MIT (http://www.opensource.org/licenses/mit-license.php) - "Feel free to use this jQuery Plugin"                          
**********************************************************************************************************************************************************

*/

var InfoStatsModAbescoUG = {};
(function () {
    InfoStatsModAbescoUG.VERSION = '1.0';

    this.Core;
    
    InfoStatsModAbescoUG.init = function(){
        try {
            Core = new InfoStatsModAbescoUG_Core();
            Core.setup();
        }
        catch(e){
            alert('An exception occured in the InfoStatsMod Expansion init!\r\n\r\n'+e.message);
        }
        finally {
            
        }
    };
    
    return this;
})();
