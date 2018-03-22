jQuery(document).ready(function($) {
	
	$('.download-button').confettiButton();
	
	$('.demo-button-1').confettiButton({
		num: 120,
		colorArray: ['#BDC3C7', '#2C3E50'],
		speed: 2,
		maxX: 300,
		maxY: 300
	});
	
	$('.hover-button').confettiButton({
		hoverOnly: true
	});
	
	$('.green-button').confettiButton({
		colorArray: ['#2ECC71'],
	});
	
	$('.rgba-button').confettiButton({
		colorArray: ['rgba(0, 0, 0, 0.3)', 'rgba(255, 255, 255, 0.3)'],
	});
	
	$('.large-button').confettiButton({
		minScale: 200,
		maxScale: 400
	});
	
	$('.slow-button').confettiButton({
		speed: 6
	});
	
	$('.logo').confettiButton();
	
});