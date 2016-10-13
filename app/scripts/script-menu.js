(function($) {
	'use strict';

	var jDoc = $(document);
  var jWin = $(window);

	jDoc.ready(function() {
		var	jSidebar = $('div.dark');
    // Detection de la taille du support
    var isMobile = window.matchMedia('only screen and (max-width: 768px)');

    if (isMobile.matches) {
      jSidebar.toggleClass('dark');
    }
	});
})(jQuery);
