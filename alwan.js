jQuery(document).ready(function() { 

 //Set Default State of each portfolio piece
 $(".paging").show();
 $(".paging a:first").addClass("active");

 //Get size of images, how many there are, then determin the size of the image reel.
 var imageWidth = $(".sompret").width();
 var imageSum = $(".image_reel img").size();
 var imageReelWidth = imageWidth * imageSum;
 
 //Adjust the image reel to its new size
 $(".image_reel").css({'width' : imageReelWidth});

 //Paging + Slider Function
 rotate = function(){ 
     var triggerID = $active.attr("rel") - 1; //Get number of times to slide
     var image_reelPosition = triggerID * imageWidth; //Determines the distance the image reel needs to slide
 
     $(".paging a").removeClass('active'); //Remove all active class
     $active.addClass('active'); //Add active class (the $active is declared in the rotateSwitch function)
    
  $(".crott").stop(true,true).slideUp('slow');
  
  $(".crott").eq( $('.paging a.active').attr("rel") - 1 ).slideDown("slow");
  
     //Slider Animation
     $(".image_reel").animate({
         left: -image_reelPosition
     }, 500 );
 
  
 };

 //Rotation + Timing Event
 rotateSwitch = function(){ 
 $(".crott").eq( $('.paging a.active').attr("rel") - 1 ).slideDown("slow"); 
     play = setInterval(function(){ //Set timer - this will repeat itself every 3 seconds
         $active = $('.paging a.active').next();
         if ( $active.length === 0) { //If paging reaches the end...
             $active = $('.paging a:first'); //go back to first
         }
         rotate(); //Trigger the paging and slider function
     }, 10000); //Timer speed in milliseconds (3 seconds) 
 
 };
 
 rotateSwitch(); //Run function on launch

 //On Click
    $(".paging a").click(function() {   
        $active = $(this); //Activate the clicked paging
        //Reset Timer
        clearInterval(play); //Stop the rotation
        rotate(); //Trigger rotation immediately
        rotateSwitch(); // Resume rotation
        return false; //Prevent browser jump to link anchor
    });   

});

imgr = new Array();
imgr[0] = "http://2.bp.blogspot.com/-uitX7ROPtTU/Tyv-G4NA_uI/AAAAAAAAFBY/NcWLPVnYEnU/s1600/no+image.jpg";
showRandomImg = true;
aBold = true;
summaryPost1 = 80;
summaryTitle = 20;
numposts1 = 6;

function removeHtmlTag(strx,chop){
    var s = strx.split("<");
    for(var i=0;i<s.length;i++){
        if(s[i].indexOf(">")!=-1){
            s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length);
        }
    }
    s =  s.join("");
    s = s.substring(0,chop-1);
    return s;
}

function showrecentposts1(json) {
 j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
 img  = new Array();
    
   for (var i = 0; i < numposts1; i++) {
     var entry = json.feed.entry[i];
     var posttitle = entry.title.$t;
  var pcm;
     var posturl;
     if (i == json.feed.entry.length) break;
     for (var k = 0; k < entry.link.length; k++) {
        if (entry.link[k].rel == 'alternate') {
          posturl = entry.link[k].href;
          break;
        }
     }
  
  for (var k = 0; k < entry.link.length; k++) {
        if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
          pcm = entry.link[k].title.split(" ")[0];
          break;
        }
     }
  
     if ("content" in entry) {
        var postcontent = entry.content.$t;}
     else
     if ("summary" in entry) {
        var postcontent = entry.summary.$t;}
     else var postcontent = "";
     
     postdate = entry.published.$t;
 
 if(j>imgr.length-1) j=0;
 img[i] = imgr[j];
 
 s = postcontent ; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

 if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

 //cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';


 var month = [1,2,3,4,5,6,7,8,9,10,11,12];
 var month2 = ["January","February","March","April","May","June","July","August","September","October","November","December"];

 var day = postdate.split("-")[2].substring(0,2);
 var m = postdate.split("-")[1];
 var y = postdate.split("-")[0];

 for(var u2=0;u2<month.length;u2++){
  if(parseInt(m)==month[u2]) {
   m = month2[u2] ; break;
  }
 }

 var daystr = m+ ' ' + day + ' ' + y ;
 
 var trtd = '<div class="crott"><a href="'+posturl+'">'+posttitle+'</a><p>'+removeHtmlTag(postcontent,summaryPost1)+'... </p></div>';     
  document.write(trtd);     
    
     j++;
 }
 
}

function showrecentposts2(json) {
 j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
 img  = new Array();
  
   for (var i = 0; i < numposts1 ; i++) {
     var entry = json.feed.entry[i];
     var posttitle = entry.title.$t;
  var pcm;
     var posturl;
     if (i == json.feed.entry.length) break;
     for (var k = 0; k < entry.link.length; k++) {
        if (entry.link[k].rel == 'alternate') {
          posturl = entry.link[k].href;
          break;
        }
     }
  
  for (var k = 0; k < entry.link.length; k++) {
        if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
          pcm = entry.link[k].title.split(" ")[0];
          break;
        }
     }
  
     if ("content" in entry) {
        var postcontent = entry.content.$t;}
     else
     if ("summary" in entry) {
        var postcontent = entry.summary.$t;}
     else var postcontent = "";
     
     postdate = entry.published.$t;
 
 if(j>imgr.length-1) j=0;
 img[i] = imgr[j];
 
 s = postcontent ; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

 if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

 //cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';


 var month = [1,2,3,4,5,6,7,8,9,10,11,12];
 var month2 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

 var day = postdate.split("-")[2].substring(0,2);
 var m = postdate.split("-")[1];
 var y = postdate.split("-")[0];

 for(var u2=0;u2<month.length;u2++){
  if(parseInt(m)==month[u2]) {
   m = month2[u2] ; break;
  }
 }

 var daystr = day+ ' ' + m + ' ' + y ;
 
 var trtd = '<a href="'+posturl+'"><img src="'+img[i]+'"/></a>';
  document.write(trtd);     
    
     j++;
 }
 
}

function labelthumbs(t){for(var e=0;e<numposts;e++){var r,n=t.feed.entry[e],m=n.title.$t;if(e==t.feed.entry.length)break;for(var i=0;i<n.link.length;i++){if("replies"==n.link[i].rel&&"text/html"==n.link[i].type)var l=n.link[i].title,o=n.link[i].href;if("alternate"==n.link[i].rel){r=n.link[i].href;break}}var u;try{u=n.media$thumbnail.url,u=u.replace("/s72-c/","/w"+thumb_width+"-h"+thumb_height+"-c/")}catch(h){s=n.content.$t,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),u=-1!=a&&-1!=b&&-1!=c&&""!=d?d:no_thumb}var p=n.published.$t,w=p.substring(0,4),_=p.substring(5,7),f=p.substring(8,10);document.write('<ul class="rp_thumbs">'),document.write("<li>"),1==showpostthumbnails&&document.write('<a href="'+r+'"><div class="rp_thumb"><span class="rollover"></span><img width="'+thumb_width+'" height="'+thumb_height+'" alt="'+m+'" src="'+u+'"/></div></a>'),document.write('<span class="rp_title"><a href="'+r+'" target ="_top">'+m+"</a></span>");var g="";if(document.write('<span class="rp_meta">'),1==showpostdate&&(g=g+'<span class="rp_meta_date">'+f+"/"+_+"/"+w+"</span>"),1==showcommentnum&&("1 Comments"==l&&(l="1 Comment"),"0 Comments"==l&&(l="No Comments"),showcomment='<span class="rp_meta_comment"><a href="'+o+'">'+l+"</a></span>",g+=showcomment),1==displaymore&&(g=g+'<span class="rp_meta_more"><a href="'+r+'" class="url" target ="_top">المزيد...</a></span>'),document.write(g),document.write("</span>"),document.write('<span class="rp_summary">'),"content"in n)var v=n.content.$t;else if("summary"in n)var v=n.summary.$t;else var v="";var k=/<\S[^>]*>/g;if(v=v.replace(k,""),1==showpostsummary)if(v.length<numchars)document.write(""),document.write(v),document.write("");else{document.write(""),v=v.substring(0,numchars);var y=v.lastIndexOf(" ");v=v.substring(0,y),document.write(v+"..."),document.write("")}document.write("</span>"),document.write("</li>"),document.write("</ul>")}document.write('<ul class="rp_thumbs2">');for(var e=1;e<numposts2;e++){var r,n=t.feed.entry[e],m=n.title.$t;if(e==t.feed.entry.length)break;for(var i=1;i<n.link.length;i++){if("replies"==n.link[i].rel&&"text/html"==n.link[i].type)var l=n.link[i].title,o=n.link[i].href;if("alternate"==n.link[i].rel){r=n.link[i].href;break}}var $;try{$=n.media$thumbnail.url.replace("/s72-c/","/w"+thumb_width2+"-h"+thumb_height2+"-c/")}catch(h){s=n.content.$t,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),$=-1!=a&&-1!=b&&-1!=c&&""!=d?d:no_thumb2}var p=n.published.$t,w=p.substring(0,4),_=p.substring(5,7),f=p.substring(8,10);1==showpostthumbnails2&&document.write('<a href="'+r+'"><div class="rp_thumb2"><img width="'+thumb_width2+'" height="'+thumb_height2+'" alt="'+m+'" src="'+$+'"/></div></a>'),document.write("<li>"),document.write('<span class="rp_title rp_title2"><a href="'+r+'" target ="_top">'+m+"</a></span>");var g="";document.write('<span class="rp_meta rp_meta2">'),1==showpostdate2&&(g=g+'<span class="rp_meta_date rp_meta_date2">'+f+"/"+_+"/"+w+"</span>"),1==showcommentnum2&&("1 Comments"==l&&(l="1 Comment"),"0 Comments"==l&&(l="No Comments"),showcomment='<span class="rp_meta_comment rp_meta_comment2"><a href="'+o+'">'+l+"</a></span>",g+=showcomment),1==displaymore2&&(g=g+'<span class="rp_meta_more rp_meta_more2"><a href="'+r+'" class="url" target ="_top">المزيد...</a></span>'),document.write(g),document.write("</span>"),document.write("</li>")}document.write("</ul>")}
//Recent Comments
var numComments=numComments||5,characters=characters||40;function recent_comments(tb){var commentsHtml;commentsHtml='<ul id="recent_comments">';for(var i=0;i<numComments;i++){var commentlink,authorName;if(i==tb.feed.entry.length)break;commentsHtml+="<li>";var entry=tb.feed.entry[i];for(var l=0;l<entry.link.length;l++){if(entry.link[l].rel=='alternate'){commentlink=entry.link[l].href}}for(var a=0;a<entry.author.length;a++){authorName=entry.author[a].name.$t}commentsHtml+="<strong><a href=\""+commentlink+"\" title=\""+authorName+"\">"+authorName+"</a></strong>";var commHTML=entry.content.$t;var commBody=commHTML.replace(/(<([^>]+)>)/ig,"");if(commBody!=""&&commBody.length>characters){commBody=commBody.substring(0,characters);commBody+=" &hellip;"}else{commBody=commBody}commentsHtml+=" - ";commentsHtml+="<span>"+commBody+"</span>";commentsHtml+="</li>"}commentsHtml+='</ul>';document.write(commentsHtml)}
//]]>
//Recent Comments Settings
var numComments  = 5;
var characters  = 60;

var numposts = 1;
var numposts2 = 4;
var showpostthumbnails = true;
var showpostthumbnails2 = true;
var displaymore = true;
var displaymore2 = false;
var showcommentnum = true;
var showcommentnum2 = true;
var showpostdate = true;
var showpostdate2 = true;
var showpostsummary = true;
var numchars = 100;
var thumb_width = 300;
var thumb_height = 140;
var thumb_width2 = 60;
var thumb_height2 = 60;
var no_thumb = &#39;http://1.bp.blogspot.com/-7vDs5hMaDho/U268E2ecF4I/AAAAAAAADY8/RBHVTTuJrxc/w300-h140-c/no-image.png&#39;
var no_thumb2 = &#39;http://3.bp.blogspot.com/-ltyYh4ysBHI/U04MKlHc6pI/AAAAAAAADQo/PFxXaGZu9PQ/s60-c/no-image.png&#39;

$(function () {
    $(".recent-slider").each(function () {
        $(this).append('<div id="slider"></div>');
        var e = $(this).attr("data-label"),
            n = "http://mvvos.blogspot.com//feeds/posts/summary/-/" + e + "?max-results=" + 5 + "&alt=json-in-script",
            l = $(this);
        $.ajax({
            type: "GET",
            url: n,
            async: true,
            contentType: "application/json",
            dataType: "jsonp",
            success: function (s) {
                for (var r = 0; r < s.feed.entry.length; r++) {
                    for (var n = s.feed.entry[r], i = 0; i < n.link.length; i++)
                    if ("alternate" == n.link[i].rel) {
                        var o = n.link[i].href;
                        break
                    }
                    try {
                        var c = n.media$thumbnail.url.replace("s72-c", "h300-w1200-no")
                    } catch (p) {
                        var c = "https://lh3.googleusercontent.com/24RAodFW8xxgzHpVBAthJHsf_szjRoa3-KzlAEdFgB6X6A5Gmlm-nCvt5nRkE95T52PmHSE4Mf5wvNGoRUgIXjjHi4PjiucY3RimpoVdiTPKQN5Jdj2n9-9bW0wUSzQcirYstqGO8Unv5v7RMU5JD_Q-lEuBgtUfXEmHxOs6ENvJBanzORTRCVXwSzYNRJxijualu8mHhR5S6DG8l4CIo6uADoudrzXGsz7oszRXccZK_FbasxG5xJ9O0mtPuIVavRO8Or89er61NiJIctiUWV0YqtMMOqK214VSjs8-lAx_7LmkneNOrkP7NdXvGTK0fxHgRBiHL7Tm2weLM33LjyMEzY4ygL68Hx81iJK4D-YRmUa8NJhpEKs8q93jgjwJ3ZrgDSzn2pKI-y3c5VWrYf-H38_lWOIMf7uuTOzKUOqoQYZLN8bhFYVyB4bLUwfX0gDtTT38QsV6MILDBQZl6gHQrHt1C8Lpp9EZ0x-1Vl2r2HeKlXS60iuRKZdfSWZNbibE2y9GCfdbBzRUGa-G3GRkQstDu2UBtNOo6WHZ4GI=w600-h250-no"
                    }
                    var d = n.title.$t,
                        u = n.summary.$t.substr(0, 180),
                        h = '<a href="' + o + '"><img src="' + c + '" title="<a href=\'' + o + "'><h3>" + d + "</h3></a><p>" + u + '</p>"/></a>';
                    l.find("#slider").append(h)
                }
                $("#slider").nivoSlider({
                    effect: "random",
                    pauseTime: 5e3
                })
            }
        })
    })
});
