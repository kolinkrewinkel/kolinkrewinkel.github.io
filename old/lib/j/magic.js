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

	$(".works-entry").each(function(index) {
		var delay = (index * 0.5) + 1.2;
		var formattedDelay = delay + "s";
		
		$(this).css({"-webkit-animation-delay" : formattedDelay, "-moz-animation-delay" : formattedDelay, "-ms-animation-delay" : formattedDelay, "animation-delay" : formattedDelay});

	});

	$("#email").click(function (e) {
		/* Regular email mailto opened if JS is not enabled */
		/* e.preventDefault(); */
	});
	
	$(".works-entry, .popover").hover(function () {
		if ($(this).css("opacity") == 0) {
			return false;
		}
		
		var index = $(this).index();
		var popover = $("#popovers").children().get(index);
		
		$(popover).removeClass("popover-hidden");
		$(popover).addClass("popover-show");		
	}, function () {
		var index = $(this).index();
		var popover = $("#popovers").children().get(index);
		
		$(popover).addClass("popover-hidden");
		$(popover).removeClass("popover-show");
	});

	window.onscroll = function() {
		var scroll = window.scrollY;
		$('#portfolio').css('left', '-' + scroll + 'px');
	}

	/*
When I needed a way to detect the browser time zone all I found were posts using getTimezoneOffset. The problem with that was it never took into account Daylight Saving Time (DST). If the user was currently in DST the function returns the time zone plus 60 minutes. Those extra minutes pushed the user into the next time zone incorrectly. There was no way to know if getTimezoneOffset included DST or not.

My solution was to go through each month of the current year and find its offset. Since DST adds an hour to the offset I just needed to keep the lowest offset of the year.

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
function TimezoneDetect(){
    var dtDate = new Date('1/1/' + (new Date()).getUTCFullYear());
    var intOffset = 10000; //set initial offset high so it is adjusted on the first attempt
    var intMonth;
    var intHoursUtc;
    var intHours;
    var intDaysMultiplyBy;
 
    //go through each month to find the lowest offset to account for DST
    for (intMonth=0;intMonth < 12;intMonth++){
        //go to the next month
        dtDate.setUTCMonth(dtDate.getUTCMonth() + 1);
 
        //To ignore daylight saving time look for the lowest offset.
        //Since, during DST, the clock moves forward, it'll be a bigger number.
        if (intOffset > (dtDate.getTimezoneOffset() * (-1))){
            intOffset = (dtDate.getTimezoneOffset() * (-1));
        }
    }
 
    return intOffset;
}
The function returns the correct offset, in minutes, from Coordinated Universal Time (UTC) in minutes and properly ignores DST. Remember, when calculating time zone, some time zones are set in half and three quarter hour increments.

	*/
});
