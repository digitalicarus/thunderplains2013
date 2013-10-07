/*global define:true,console:true*/
define([
	'jquery',
	'shared'
], function ($, Shared) {
	"use strict";

	var $main = $('main')
	,   $header = $('header')
	,   $container = $('.container')
	,   state = 'maximized'
	;


	$(window).on('resize', Shared.resize);
	$main.mCustomScrollbar({
		mouseWheel: true,
		verticalScroll: true,
		scrollInertia: 0,
		scrollButtons: {
			enable: true
		}
	});

	$('button.bg-minimize').on('click', Shared.minimize);
	$('button.bg-maximize').on('click', Shared.maximize);
	Shared.resize();

});

