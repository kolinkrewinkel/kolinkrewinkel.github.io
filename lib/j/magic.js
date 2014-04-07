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

function getTotalNumberOfPanels()
{
	return Math.round($(document).height()/getPanelHeight());
}

function setCurrentPanelIndex(newIndex)
{
  	$('body').stop().animate({scrollTop: newIndex * getPanelHeight()}, 1280, getDefaultEasing(false));
}

$(document).keydown(function(e){
    if (e.keyCode == 38 && !e.metaKey)
    { 
    	setCurrentPanelIndex(Math.max(getCurrentPanelIndex() - 1, 0));

       return false;
    }
    else if (e.keyCode == 40 && !e.metaKey)
    { 
    	setCurrentPanelIndex(Math.min(getCurrentPanelIndex() + 1, getTotalNumberOfPanels()));

       return false;
    }
    else if (e.keyCode == 27)
    {
    	$('html').removeClass('expanded-bio');

    	// $('#portfolio').css({'display': 'block'});
    }
});

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
	$('#reveal-arrow').click(function ()
	{
		$('html').addClass('expanded-bio');
	});

	$('#hide-arrow').click(function ()
	{
		$('html').removeClass('expanded-bio');
	});

	if (Modernizr.touch)
	{	
		return;
	}

	$('#hint-arrow').click(function()
	{
		setCurrentPanelIndex(getCurrentPanelIndex() + 1);
	});

	performIntroAnimation();

	var contentController = $.superscrollorama({triggerAtCenter: false});		
	var contentScrollDuration = $('#avatar').height() * 2.25;
	var defaultDuration = .5;
	var backgroundOffset = -(contentScrollDuration * 2);
	var contentOffset = -(contentScrollDuration * 0.8);

	var baseSelectors = ['polychromatic', 'facebook', 'stream', 'current', 'kkgridview'];
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

	function addEntryTweenForElement(tween, element)
	{
		contentController.addTween(element, tween, contentScrollDuration, contentOffset);
	}

	function addExitTweenForElement(tween, element)
	{
		contentController.addTween(element, tween, contentScrollDuration, (contentOffset * 2.5));
	}

    addEntryTweenForElement(TweenMax.to($('#hint-arrow'), defaultDuration, {autoAlpha: 0, ease:getDefaultEasing(true)}), '#facebook-description');


	// Polychromatic Out
	addExitTweenForElement(TweenMax.to($('#polychromatic-description'), defaultDuration, {css:{'left': '100%'}, ease:getDefaultEasing(true)}), '#facebook');

	// Facebook In
    // addEntryTweenForElement(TweenMax.to($('#facebook-description'), defaultDuration, {autoAlpha: 1, ease:getDefaultEasing(true)}), '#facebook-description');
	
	// Facebook Out
    addExitTweenForElement(TweenMax.to($('#facebook-description'), defaultDuration, {autoAlpha: 1, ease:getDefaultEasing(true)}), '#facebook-description');
	
	// Stream In
	addEntryTweenForElement(TweenMax.from($('#stream-description'), defaultDuration, {css:{'left': '-100%'}, ease:getDefaultEasing(true)}), '#stream');
	addEntryTweenForElement(TweenMax.from($('#stream-hero'), defaultDuration, {css:{'margin-left': '100%'}, ease:getDefaultEasing(true)}), '#stream')

	// Stream Out
	addExitTweenForElement(TweenMax.to($('#stream-description'), defaultDuration, {css:{'left': '-100%'}, ease:getDefaultEasing(true)}), '#current');
	addExitTweenForElement(TweenMax.to($('#stream-hero'), defaultDuration, {css:{'margin-left': '100%'}, ease:getDefaultEasing(true)}), '#current')

	// Current In	
	addEntryTweenForElement(TweenMax.from($('#current-description'), defaultDuration, {css:{'left': '-100%'}, ease:getDefaultEasing(true)}), '#current');
	addEntryTweenForElement(TweenMax.from($('#current-hero'), defaultDuration, {css:{'margin-left': '100%'}, ease:getDefaultEasing(true)}), '#current');

	// Current Out
	addExitTweenForElement(TweenMax.to($('#current-description'), defaultDuration, {css:{'left': '-100%'}, ease:getDefaultEasing(true)}), '#kkgridview');
	addExitTweenForElement(TweenMax.to($('#current-hero'), defaultDuration, {css:{'margin-left': '100%'}, ease:getDefaultEasing(true)}), '#kkgridview')
	
	// KKGridView In
	addEntryTweenForElement(TweenMax.from($('#kkgridview-heading'), defaultDuration, {autoAlpha: 0, ease:getDefaultEasing(true)}), '#kkgridview');
	addEntryTweenForElement(TweenMax.from($('#kkgridview-hero'), defaultDuration, {autoAlpha:0, scale:0, ease:getDefaultEasing(true)}), '#kkgridview');
	addEntryTweenForElement(TweenMax.from($('#kkgridview-extended-description'), defaultDuration, {autoAlpha: 0, ease:getDefaultEasing(true)}), '#kkgridview');

	contentController.triggerCheckAnim(true);
});
