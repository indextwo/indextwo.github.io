var optionsObject;

jQuery(document).ready(function($) {
	
	hljs.configure({
		tabReplace:	'&nbsp;',
		languages:	['js']
	});
	
	$('code').not('.inline').each(function(i, block) {
		hljs.highlightBlock(block);
	});
	
	$('#header .navlist a').click(function(e) {
		
		var hashLink = $(this).attr('href');
		
		if (hashLink.charAt(0) == '#') {
			e.preventDefault();
			
			jumpToLink(hashLink);
		}
		
	});
	
	function jumpToLink(hashLink) {
		
		if ($(hashLink).length > 0) {
			var targetY = $(hashLink).offset().top - $('#header').outerHeight();
			
			$('html, body').animate({scrollTop: targetY}, 600);
			
			history.pushState(null, null, hashLink);
		}
	}
	
	optionsObject = {'offsetTopElement': $('#header')};
	
	$(window).on('scroll', function(e) {
		var withinViewportArray = $('.percentage-box').percentWithinViewport(optionsObject);
		
		$.each(withinViewportArray, function(index) {
			
			var myPercVisible = parseInt($(this).attr('data-viewport-percent'));
			$(this).css({'opacity': myPercVisible / 100});
			$(this).find('.percentage').text(myPercVisible + '%');
			
		});
	}).trigger('scroll');
	
	$('.control-panel form').on('input paste blur change', 'input, textarea, select', function(e) {
		var field = $(this);
		
		if (field.attr('type') == 'number') {
			field.val(field.val().replace(/[^0-9]/g, ''));
		}
		
		var fieldValue = parseInt(field.val());
		
		if (field.attr('type') == 'radio' || field.attr('type') == 'checkbox') {
			fieldValue = field.is(':checked');
		}
		
		console.log(field.attr('id'), 'changed to', fieldValue);
		
		switch (field.attr('id')) {
			case 'fixedheader': {
				if (fieldValue) {
					optionsObject.offsetTopElement = $('#header');
				} else {
					delete optionsObject.offsetTopElement;
				}
				
				break;
			}
			
			default: {
				
			}
		}
		
		asessOffsets();
		$(window).trigger('scroll');
	});
	
	function asessOffsets() {
		//	Offset top
		
		$('.offset-top').height(0);
		
		if ($('#offsettop-trigger').is(':checked')) {
			
			optionsObject.offsetTop = parseInt($('#offsettop').val());
			
			$('.offset-top').height(optionsObject.offsetTop);
			
			if ($('#fixedheader').is(':checked')) {
				$('.offset-top').css({'top': $('#header').outerHeight()});
			} else {
				$('.offset-top').css({'top': 0});
			}
		} else {
			delete optionsObject.offsetTop;
		}
		
		//	Offset bottom
		
		$('.offset-bottom').height(0);
		
		if ($('#offsetbottom-trigger').is(':checked')) {
			
			optionsObject.offsetBottom = parseInt($('#offsetbottom').val());
			
			$('.offset-bottom').height(optionsObject.offsetBottom);
		} else {
			delete optionsObject.offsetBottom;
		}
	}
	
	var confettiColorArray = ['#FF5566', '#FFFFFF', '#F1C40F', '#2EBFF6', '#2ECC71'];
	
	for (var i = 0; i < 60; i++) {
		var bgColor = confettiColorArray[Math.floor(Math.random() * confettiColorArray.length)];
		
		var translateX = Math.floor(Math.random() * (120 - 5)) + 5;
		var translateY = Math.floor(Math.random() * (120 - 5)) + 5;
		
		var scale = (Math.floor(Math.random() * (15 - 5)) + 5) / 10;
		var rotate = Math.floor(Math.random() * 90);
		
		var xRand = Math.random() >= 0.5;
		var yRand = Math.random() >= 0.5;
		
		if (!xRand) {
			translateX = -translateX;
		}
		
		if (!yRand) {
			translateY = -translateY;
		}
		
		var time = 1 + Math.floor(Math.random() * 100) * 0.01;
		var delay = -((Math.floor(Math.random() * 100) * 0.01) * time);
		
		var confetti = $('<div class="confetti absolute" />').appendTo('.explosion');
		confetti.css({
			'background-color': bgColor,
			'transform': 'translate(' + translateX + 'px, ' + translateY + 'px)' + ' rotate(' + rotate + 'deg) scale(' + scale + ')',
			'animation-duration': time + 's',
			'animation-delay': delay + 's',
		});
	}
	
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());
	gtag('config', 'UA-116076389-1');
	
	$('.download-button').click(function() {
		if ($(this).attr('data-button-location')) {
			ga('send', {
				hitType: 'event',
				eventCategory: 'Buy',
				eventAction: 'click',
				eventLabel: $(this).attr('data-button-location')
			});
		}
	});
	
});