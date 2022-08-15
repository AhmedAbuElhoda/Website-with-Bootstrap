$(document).ready(function(){
	
$('.carousel').carousel({
  interval: 6000
	});
$('.loading-overly .lds-dual-ring').fadeOut(1000,function(){
	$('body').css('overflow','auto');
$(this).parent().fadeOut(1000,function(){
	
	$(this).remove();
		});
	});
	var scrollButton = $('#scroll');
$(window).scroll(function(){
	console.log($(this).scrollTop());
	$(this).scrollTop() >= 700 ? scrollButton.show():	scrollButton.hide(); 
    	
})
	scrollButton.click(function(){
			console.log('click');
			$("html,body").animate({scrollTop: 0},600);
				})
});
