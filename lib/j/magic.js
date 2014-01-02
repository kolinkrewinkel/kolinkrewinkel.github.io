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
	
		
	if (Modernizr.touch) {
		var scrollPos = 0;
		// using iScroll but deacting -webkit-transform because pin wouldn't work becasue of a webkit bug: https://code.google.com/p/chromium/issues/detail?id=20574
		// var myScroll = new iScroll('portfolio', {vScrollbar: true, hScroll: false, vScroll: true, bounce: false, useTransform: false, useTransition: false});
		function animationLoop () {
			// make sure to have the requestAnimationFrame polyfill by Paul Irish: https://gist.github.com/paulirish/1579671
			window.requestAnimationFrame(animationLoop);

			var doc = document.documentElement, body = document.body;
			var left = (doc && doc.scrollLeft || body && body.scrollLeft || 0);
			var top = (doc && doc.scrollTop  || body && body.scrollTop  || 0);

			if (top != scrollPos) { // if position has changed
				scrollPos = top;
				// udate scrollcontainer position
				// controller.setScrollContainerOffset(0, -myScroll.y);
				// force an immediate update
				contentController.triggerCheckAnim(true);
				console.log('updating');


				// window.requestAnimationFrame(animationLoop);
			}
		}
		// when deactivating transform in iScroll (useTransform:false) requestAnimationFrame is not triggered during touchmove
		document.addEventListener("touchmove", function() {
			animationLoop();
		});

		// $(window).swipe({	
		//   swipe:function(event, direction, distance, duration, fingerCount){
	 //  		var bioPanel = $('#bio');
	 //  		var panelHeight = bioPanel.height();
	 //  		var totalHeight = $('#portfolio').height();

		// 	var doc = document.documentElement, body = document.body;
		// 	var left = (doc && doc.scrollLeft || body && body.scrollLeft || 0);
		// 	var top = (doc && doc.scrollTop  || body && body.scrollTop  || 0);

		// 	var currentIndex = Math.round(top/panelHeight);

		// 	var newOffset;

		//   	if (direction === 'down')
		//   	{
		//   		if (top == 0)
		//   		{
		//   			return;
		//   		}

		//   		currentIndex--;

		//   	}
		//   	else if (direction === 'up')
		//   	{
		// 		if (top == (totalHeight - panelHeight))
		// 		{
		// 			return;
		// 		}

		// 		currentIndex++;
		//   	}

		//   	console.log(currentIndex);

		//   	newOffset = currentIndex * panelHeight;

		//   	$("body").animate({ scrollTop: newOffset }, 1000);
		//   },
		// 	threshold:100,
		// 	allowPageScroll: 'none'
		// });
	}	
	
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
