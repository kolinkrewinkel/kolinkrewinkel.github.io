/*
 *
 *  Panel Management
 * 
 */

function getPanelHeight()
{
	return $('#bio').height();
}

function getCurrentPanelIndex()
{
	return Math.round($(document).scrollTop()/getPanelHeight());
}

function setCurrentPanelIndex(newIndex)
{
  	$('body').animate({scrollTop: newIndex * getPanelHeight()}, 325, getDefaultEasing(false));
}

/*
 *
 *  Animation Conveniences
 * 
 */

function getDefaultEasing(asObject)
{
	if (asObject)
	{
		return Quint.easeOut;	
	}

	return 'easeOutQuint';	
}

/*
 *
 *  Animation Dirtywork
 * 
 */

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
	var backgroundOffset = -(contentScrollDuration * 2);
	var contentOffset = -(contentScrollDuration * 0.8);

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

		contentController.addTween(selector, tween, contentScrollDuration, backgroundOffset);
	}

	function addContentTweenToElement(tween, element)
	{
		contentController.addTween(element, tween, contentScrollDuration, contentOffset);
	}

	// Facebook In
	// contentController.addTween('#facebook-description', TweenMax.from($('#facebook-description'), defaultDuration, {css:{'left': '-100%'}, ease:globalEasing}, contentScrollDuration));
	
	// Facebook Out
    addContentTweenToElement(TweenMax.to($('#facebook-description'), defaultDuration, {autoAlpha: 0, ease:getDefaultEasing(false)}), '#facebook-description');
	
	// Stream In
	addContentTweenToElement(TweenMax.from($('#stream-description'), defaultDuration, {css:{autoAlpha: 0, 'left': '-100%'}, ease:getDefaultEasing(false)}), '#stream');
	addContentTweenToElement(TweenMax.from($('#stream-hero'), defaultDuration, {css:{autoAlpha: 0, 'left': '100%'}, ease:getDefaultEasing(false)}), '#stream')

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
