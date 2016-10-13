(function($) {
	'use strict';

	var jDoc = $(document);
  var jWin = $(window);

	jDoc.ready(function() {
		var	jOverall = $('.overall');
		var jMenuButton = $('.menu-button');
    var	jSidebar = $('div.dark');
    // Detection de la taille du support
    // Pour l'initialisation du plugin midNight
    var isMobile = window.matchMedia('only screen and (max-width: 768px)');

		jMenuButton.on('click', function() {
			jOverall.toggleClass('is-visible');
		});

    // Test de la condition du support
    if (!isMobile.matches) {
      // Initialisation du plugin jQuery midNight
      $('div.sidebar').midnight();
      $('div.sidebar').css({
        'height' : '133px',
        'left' : '20px',
        'top' : '34%'
      });
    }
    else {
      // Suppression de la Class dark si celle-ci existe
      jSidebar.toggleClass('dark');
    }
	});
})(jQuery);
