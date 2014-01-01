$(document).ready(function ()
{
	var globalEasing = Quint.easeOut;

	var bioPanel = $("#bio");
	bioPanel.css({left: '-260px'});

	bioPanel.animate({left: 0}, 1000, "easeOutQuint");

	var controller = $.superscrollorama({"isVertical" : true});
	// var globalEasing = Back.easeInOut;
	var defaultDuration = .5;

	var baseSelectors = ['facebook', 'stream'];
	for (var i = 0, l = baseSelectors.length; i < l; i++)
	{
		var baseSelector = baseSelectors[i];
		var selectorified = '#' + baseSelector;
		// controller.addTween(selectorified, TweenMax.from( $(selectorified + '-background'), defaultDuration, {autoAlpha: 0, ease:globalEasing}));
	}

	// Facebook In
	// controller.addTween('#facebook', TweenMax.from( $('#facebook-description'), defaultDuration, {css:{'left': '-100%'}, ease:globalEasing}));
	
	// Facebook Out
	controller.addTween('#facebook-description', TweenMax.to( $('#facebook-description'), 200, {css:{opacity: 0}}));
	
	// Stream In
	// controller.addTween('#stream', TweenMax.from( $('#stream-description'), defaultDuration, {css:{autoAlpha: 0, 'top': '-100%'}, ease:globalEasing}));
	// controller.addTween('#stream', TweenMax.from( $('#stream-hero'), defaultDuration, {css:{autoAlpha: 0, 'top': '100%', 'margin-top': '0'}, ease:globalEasing}));

	// controller.addTween('#stream-standin', TweenMax.from( $('#stream-description'), defaultDuration, {css:{'top': '-100%'}, ease:globalEasing}));
	// controller.addTween('#stream-standin', TweenMax.from( $('#stream-hero'), defaultDuration, {css:{'top': '100%', 'margin-top': '0'}, ease:globalEasing}));

	// controller.addTween('#current-standin', TweenMax.to( $('#stream-description'), defaultDuration, {css:{'top': '-100%'}, ease:globalEasing}));
	// controller.addTween('#current-standin', TweenMax.to( $('#stream-hero'), defaultDuration, {css:{'top': '100%', 'margin-top': '0'}, ease:globalEasing}));
	// controller.addTween('#current-standin', TweenMax.from( $('#current-hero'), defaultDuration, {css:{'right': '-100%'}, ease:globalEasing}));
	// controller.addTween('#current-standin', TweenMax.from( $('#current-description'), defaultDuration, {css:{'top': '200%'}, ease:globalEasing}));
	
	// controller.addTween('#kkgridview-standin', TweenMax.to( $('#current-hero'), defaultDuration, {css:{'right': '-100%'}, ease:globalEasing}));
	// controller.addTween('#kkgridview-standin', TweenMax.to( $('#current-description'), defaultDuration, {css:{'top': '200%'}, ease:globalEasing}));
	// // controller.addTween('#kkgridview-standin', TweenMax.from( $('#kkgridview-heading'), defaultDuration, {css:{'top': '-100%'}, ease:globalEasing}));
	// controller.addTween('#kkgridview-standin', TweenMax.from( $('#kkgridview-hero'), defaultDuration, {css:{'zoom': '0'}, ease:globalEasing}));
	// controller.addTween('#kkgridview-standin', TweenMax.from( $('#kkgridview-extended-description'), defaultDuration, {css:{'top': '100%'}, ease:globalEasing}));

	controller.triggerCheckAnim();
});
