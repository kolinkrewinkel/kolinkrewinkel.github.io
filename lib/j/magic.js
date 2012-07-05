$(function() {
	// ID the browser and add it to the body class for CSS modifications.
	var browser = $.browser;
	if (browser.msie) {
		$("body").addClass("msie");
	} else if (browser.webkit) {
		$("body").addClass("webkit");
	} else if (browser.opera) {
		$("body").addClass("opera");
	} else if (browser.mozilla) {
		$("body").addClass("mozilla");
	} else {
		$("body").addClass("misc");
	}
});