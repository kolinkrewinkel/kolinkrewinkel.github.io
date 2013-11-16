$(document).ready(function() {
	var controller = $.superscrollorama({"isVertical" : false});
	// var globalEasing = Back.easeInOut;
	var globalEasing = Quint.easeOut;
	var defaultDuration = 0.8;

	var baseSelectors = ['stream', 'current', 'kkgridview'];
	for (var i = 0, l = baseSelectors.length; i < l; i++)
	{
		var baseSelector = baseSelectors[i];
		var selectorified = '#' + baseSelector;
		controller.addTween(selectorified + '-standin', TweenMax.from( $(selectorified + '-background'), defaultDuration, {autoAlpha: 0, ease:globalEasing}));
		controller.addTween(selectorified + '-standin', TweenMax.from( $(selectorified), defaultDuration, {autoAlpha: 0, ease:globalEasing}));
	}
	
	controller.addTween('#current-standin', TweenMax.to( $('#stream-description'), defaultDuration, {css:{'top': '-100%'}, ease:globalEasing}));
	controller.addTween('#current-standin', TweenMax.to( $('#stream-hero'), defaultDuration, {css:{'top': '100%', 'margin-top': '0'}, ease:globalEasing}));

	controller.addTween('#current-standin', TweenMax.from( $('#current-hero'), defaultDuration, {css:{'right': '-100%'}, ease:globalEasing}));
	// controller.addTween('#current-standin', TweenMax.from( $('#current-hero'), defaultDuration, {css:{'top': '-100%'}, ease:globalEasing}));
	controller.addTween('#current-standin', TweenMax.from( $('#current-description'), defaultDuration, {css:{'top': '100%'}, ease:globalEasing}));

	controller.triggerCheckAnim();
});
