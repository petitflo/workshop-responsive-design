"use strict";!function(i){var e=i(document);i(window);e.ready(function(){var e=i(".overall"),t=i(".menu-button"),n=i("div.dark"),a=window.matchMedia("only screen and (max-width: 768px)");t.on("click",function(){e.toggleClass("is-visible")}),a.matches?n.toggleClass("dark"):(i("div.sidebar").midnight(),i("div.sidebar").css({height:"133px",left:"20px",top:"34%"}))})}(jQuery);