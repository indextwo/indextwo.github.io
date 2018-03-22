jQuery(document).ready(function($) {
	
	hljs.configure({
		tabReplace:	'&nbsp;',
		languages:	['js']
	});
	
	$('code').not('.inline').each(function(i, block) {
		hljs.highlightBlock(block);
	});
	
	$('#header .navlist a, a').click(function(e) {
		
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
	
	var uaTag = $('#analytics-tag').prop('content');
	
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());
	gtag('config', uaTag);
	
	$('.download-button').click(function() {
		if ($(this).attr('data-button-location')) {
			ga('send', {
				hitType: 'event',
				eventCategory: 'Download',
				eventAction: 'click',
				eventLabel: $(this).attr('data-button-location')
			});
		}
	});
	
});