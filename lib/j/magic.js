$(document).ready(function() {
	var controller = $.superscrollorama({"isVertical" : false});
	
	controller.addTween('#stream-standin', TweenMax.from( $('#stream'), 1, {autoAlpha: 0}));
	controller.addTween('#bitlimit-standin', TweenMax.from( $('#bitlimit'), 1, {autoAlpha: 0}));
	controller.addTween('#kkgridview-standin', TweenMax.from( $('#kkgridview'), 1, {autoAlpha: 0}));

	controller.triggerCheckAnim();
});
