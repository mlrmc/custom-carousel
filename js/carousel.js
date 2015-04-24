$(document).ready(function(){


var slideWidth = $('.slide').width(),
    numOfSlides = $('.slide').size(),
    positionNum =0,
    slideSpeed = 400;

    $('#tray').width(slideWidth * numOfSlides);

    $('a.next').click(function(event){

    	if (positionNum === (numOfSlides - 1)){
    		positionNum = 0;
    	} else {
    		positionNum += 1;
		}

    	var distance = positionNum * slideWidth;

    	$('#tray').animate({right: distance}, slideSpeed);
       event.preventDefault();

    });


    $('a.prev').click(function(event){

    	if (positionNum === 0) {
    		positionNum = numOfSlides -1;
    	} else {
       		positionNum -=1;
		}

    	

    	var distance = positionNum * slideWidth;

    	$('#tray').animate({right: distance}, slideSpeed);
        event.preventDefault();

    });

    //hide arrows initially
    $('a.prev, a.next').hide();

    //show arrows on hover

    $('#frame').hover(function(){
    	$('a.prev, a.next').show();
    },function(){
    	$('a.prev, a.next').hide();
    });


    
});