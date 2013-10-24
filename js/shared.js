/*global define:true*/
//TODO: write dot template plugin
define([
	'dot',
	'jquery'
], function (dot, $) {
	"use strict";

	var ret = {}
	,   $main = $('main')
	,   $header = $('header')
	,   $footer = $('footer')
	,   $primaryContainer = $('.container.primary')
	,   $contentContainer = $('main').find('.container')
	,   $gameframe = $('iframe.game')
	;

	ret.dot = dot;

	ret.swapVis  = function ($replaceWhat, $replaceWith) {
		$($replaceWhat).hide();
		$($replaceWith).show();
	};

	ret.resize = function () {
		var priHeight = parseInt($primaryContainer.height(), 10)
		,   headerHeight = parseInt($header.height(), 10)
		;
		$main.height($primaryContainer.height() - $header.height() - $footer.height());
	};
	ret.minimize = function () {
		$primaryContainer.addClass('minimized');
	};
	ret.maximize = function () {
		// kill game
        $gameframe[0].src = 'about:blank';
		$primaryContainer.removeClass('minimized');
	};

	ret.loadFrameSrc = function (frameSrc) {
		$gameframe[0].src = frameSrc;
		ret.minimize();
	};


	window.loadFrameSrc = ret.loadFrameSrc;

	return ret;
});
