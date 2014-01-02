function getDefaultEasing(asObject)
{
	if (asObject)
	{
		return Quint.easeOut;	
	}

	return 'easeOutQuint';	
};

function performIntroAnimation()
{
	var bioPanel = $('#bio');
	bioPanel.css({left: '-260px'});

	bioPanel.animate({left: 0}, 1000, getDefaultEasing(false));
}


$(function ()
{
	performIntroAnimation();

	var contentController = $.superscrollorama({triggerAtCenter: false});
	// .addTween(target, tween, duration, offset, reverse)
	document.addEventListener('touchmove', function (e) {
		console.log('updating ' + contentController);
		contentController.triggerCheckAnim();		
	}, false);

	
	var contentScrollDuration = $('#avatar').height() * 2;

	var defaultDuration = .5;

	var baseSelectors = ['facebook', 'stream'];
	for (var i = 0, l = baseSelectors.length; i < l; i++)
	{
		if (i == 0)
		{
			continue;
		}

		var selector = '#' + baseSelectors[i];
		var background = $(selector + '-background');
		var tween = TweenMax.from(background, defaultDuration, {autoAlpha:0});

		contentController.addTween(selector, tween, contentScrollDuration, -(contentScrollDuration * 1.333));
	}

	// Facebook In
	// contentController.addTween('#facebook', TweenMax.from( $('#facebook-description'), defaultDuration, {css:{'left': '-100%'}, ease:globalEasing}));
	
	// Facebook Out

    contentController.addTween('#facebook-description', TweenMax.to($('#facebook-description'), defaultDuration, {css:{opacity: 0}}), contentScrollDuration);
	// contentController.addTween('#facebook-description', TweenMax.to($('#facebook-description'), 1, {css:{opacity: 0}}, 200));
	
	// Stream In
	// contentController.addTween('#stream', TweenMax.from( $('#stream-description'), defaultDuration, {css:{autoAlpha: 0, 'top': '-100%'}, ease:globalEasing}));
	// contentController.addTween('#stream', TweenMax.from( $('#stream-hero'), defaultDuration, {css:{autoAlpha: 0, 'top': '100%', 'margin-top': '0'}, ease:globalEasing}));

	// contentController.addTween('#stream-standin', TweenMax.from( $('#stream-description'), defaultDuration, {css:{'top': '-100%'}, ease:globalEasing}));
	// contentController.addTween('#stream-standin', TweenMax.from( $('#stream-hero'), defaultDuration, {css:{'top': '100%', 'margin-top': '0'}, ease:globalEasing}));

	// contentController.addTween('#current-standin', TweenMax.to( $('#stream-description'), defaultDuration, {css:{'top': '-100%'}, ease:globalEasing}));
	// contentController.addTween('#current-standin', TweenMax.to( $('#stream-hero'), defaultDuration, {css:{'top': '100%', 'margin-top': '0'}, ease:globalEasing}));
	// contentController.addTween('#current-standin', TweenMax.from( $('#current-hero'), defaultDuration, {css:{'right': '-100%'}, ease:globalEasing}));
	// contentController.addTween('#current-standin', TweenMax.from( $('#current-description'), defaultDuration, {css:{'top': '200%'}, ease:globalEasing}));
	
	// contentController.addTween('#kkgridview-standin', TweenMax.to( $('#current-hero'), defaultDuration, {css:{'right': '-100%'}, ease:globalEasing}));
	// contentController.addTween('#kkgridview-standin', TweenMax.to( $('#current-description'), defaultDuration, {css:{'top': '200%'}, ease:globalEasing}));
	// // contentController.addTween('#kkgridview-standin', TweenMax.from( $('#kkgridview-heading'), defaultDuration, {css:{'top': '-100%'}, ease:globalEasing}));
	// contentController.addTween('#kkgridview-standin', TweenMax.from( $('#kkgridview-hero'), defaultDuration, {css:{'zoom': '0'}, ease:globalEasing}));
	// contentController.addTween('#kkgridview-standin', TweenMax.from( $('#kkgridview-extended-description'), defaultDuration, {css:{'top': '100%'}, ease:globalEasing}));

	contentController.triggerCheckAnim();
});
