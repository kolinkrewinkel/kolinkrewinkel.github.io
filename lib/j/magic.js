/*
 *  Panel Management 
 */

function getPanelHeight() {
	return $('#bio').height();
}

function getCurrentPanelIndex() {
	return Math.round($(document).scrollTop()/getPanelHeight());
}

function getTotalNumberOfPanels() {
	return Math.round($(document).height()/getPanelHeight());
}

function setCurrentPanelIndex(newIndex) {
  	$('body').stop().animate({scrollTop: newIndex * getPanelHeight()}, 1280, getDefaultEasing(false));
}

$(document).keydown(function(e){
    if (e.keyCode == 38 && !e.metaKey) { 
    	setCurrentPanelIndex(Math.max(getCurrentPanelIndex() - 1, 0));

       return false;
    } else if (e.keyCode == 40 && !e.metaKey) { 
    	setCurrentPanelIndex(Math.min(getCurrentPanelIndex() + 1, getTotalNumberOfPanels()));

       return false;
    }
});

/*
 *  Animation Conveniences
 */

function getDefaultEasing(asObject) {
	if (asObject) {
		return Quint.easeOut;	
	}

	return 'easeOutQuint';	
}
