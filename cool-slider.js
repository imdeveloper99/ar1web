$(document).ready(function() {
    $(".paging-ar1web").show(); 
    $(".paging-ar1web a:first").addClass("active");

var imageWidth = $(".coolslider-ar1web").width(); 
var imageSum = $(".ar1web_img img").size(); 
var imageReelWidth = imageWidth * imageSum;

    $(".ar1web_img").css({'width' : imageReelWidth});

rotate = function(){ var triggerID = $active.attr("rel") - 1; 

var ar1web_imgPosition = triggerID * imageWidth;

    $(".paging-ar1web a").removeClass('active');
        $active.addClass('active');

    $(".cooltitlear1web").stop(true,true).slideUp('slow');
    $(".cooltitlear1web").eq( 
    $('.paging-ar1web a.active').attr("rel") - 1 ).slideDown("slow"); 
    $(".ar1web_img").animate({left: -ar1web_imgPosition}, 400 );
    };

rotateSwitch = function(){
    $(".cooltitlear1web").eq( $('.paging-ar1web a.active').attr("rel") - 1 ).slideDown("slow");

play = setInterval(function(){
    $active = $('.paging-ar1web a.active').next();

if ( $active.length === 0) {
    $active = $('.paging-ar1web a:first'); } rotate(); }, 4000); };

rotateSwitch(); $(".ar1web_img a, .cooltitlear1web a").hover(function() {
    clearInterval(play); }, function() { rotateSwitch();
    });
    $(".paging-ar1web a").click(function() { $active = $(this);
    clearInterval(play); rotate(); rotateSwitch();  return false;
    });
});
