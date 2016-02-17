$(document).ready(function() {
    $(&quot;.paging&quot;).show(); 
    $(&quot;.paging a:first&quot;).addClass(&quot;active&quot;);

var imageWidth = $(&quot;.easyslider&quot;).width(); 
var imageSum = $(&quot;.image_reel img&quot;).size(); 
var imageReelWidth = imageWidth * imageSum;

    $(&quot;.image_reel&quot;).css({&#39;width&#39; : imageReelWidth});

rotate = function(){ var triggerID = $active.attr(&quot;rel&quot;) - 1; 

var image_reelPosition = triggerID * imageWidth;

    $(&quot;.paging a&quot;).removeClass(&#39;active&#39;);
        $active.addClass(&#39;active&#39;);

    $(&quot;.easytitledes&quot;).stop(true,true).slideUp(&#39;slow&#39;);
    $(&quot;.easytitledes&quot;).eq( 
    $(&#39;.paging a.active&#39;).attr(&quot;rel&quot;) - 1 ).slideDown(&quot;slow&quot;); 
    $(&quot;.image_reel&quot;).animate({left: -image_reelPosition}, 400 );
    };

rotateSwitch = function(){
    $(&quot;.easytitledes&quot;).eq( $(&#39;.paging a.active&#39;).attr(&quot;rel&quot;) - 1 ).slideDown(&quot;slow&quot;);

play = setInterval(function(){
    $active = $(&#39;.paging a.active&#39;).next();

if ( $active.length === 0) {
    $active = $(&#39;.paging a:first&#39;); } rotate(); }, 4000); };

rotateSwitch(); $(&quot;.image_reel a, .easytitledes a&quot;).hover(function() {
    clearInterval(play); }, function() { rotateSwitch();
    });
    $(&quot;.paging a&quot;).click(function() { $active = $(this);
    clearInterval(play); rotate(); rotateSwitch();  return false;
    });
});
