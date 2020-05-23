(function($){"use strict";$.fn.myOwl=function(options){var settings=$.extend({items:1,dots:!1,loop:!0,mouseDrag:!0,touchDrag:!0,nav:!1,autoplay:!1,navText:['',''],margin:0,stagePadding:0,autoplayTimeout:3000,autoplayHoverPause:!0,autoplaySpeed:3000,smartSpeed:450,navRewind:!1,responsive:{},animateOut:'',animateIn:'',center:'',merge:'',autoWidth:'',},options);return this.owlCarousel({items:settings.items,loop:settings.loop,mouseDrag:settings.mouseDrag,touchDrag:settings.touchDrag,nav:settings.nav,navText:settings.navText,dots:settings.dots,margin:settings.margin,stagePadding:settings.stagePadding,autoplay:settings.autoplay,autoplayTimeout:settings.autoplayTimeout,autoplayHoverPause:settings.autoplayHoverPause,animateOut:settings.animateOut,animateIn:settings.animateIn,responsive:settings.responsive,navRewind:settings.navRewind,center:settings.center,merge:settings.merge,autoWidth:settings.autoWidth,autoplaySpeed:settings.autoplaySpeed,smartSpeed:settings.smartSpeed})};$.fn.instaFeed=function(options){var settings=$.extend({token:'',$this:$(this),photos:0},options);$.ajax({url:'https://api.instagram.com/v1/users/self/media/recent',dataType:'jsonp',type:'GET',data:{access_token:settings.token,count:settings.photos},success:function(data){for(let x in data.data){settings.$this.append('<li><a href="'+data.data[x].link+'" ><img src="'+data.data[x].images.standard_resolution.url+'"></a></li>')}},error:function(data){console.log(data)}})}
function initparallax(){var a={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return a.Android()||a.BlackBerry()||a.iOS()||a.Opera()||a.Windows()}};var trueMobile=a.any();if(null==trueMobile){var b=new Scrollax();b.reload();b.init()}}
function email_pattern(email){var regex=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;return regex.test(email)}
let contentToCenter=()=>{let header=$('.xs-header'),banner=$('.content-to-center .container');banner.css('marginTop',(header.outerHeight()))}
function setLogo(){let logo=$('.xs-logo').children(),navLogo=$('.nav-brand'),clone=logo.clone();if($(window).width()<=991){if(navLogo.children().length===0){clone.appendTo(navLogo)}}}
function equalHeight(){let post=$('.single-blog-post-thumb'),subFrom=$('.newsletter-thumb-wraper');if($(window).width()>=991){subFrom.css('height',post.outerHeight())}else{subFrom.css('height','auto')}}
function setWidth(){let navwraper=$('.navSidebar-wraper'),child=navwraper.children();if(child.length>1){navwraper.css('width',(child.outerWidth(!0)*child.length))}else{navwraper.css('width','')}}
$.fn.customNumber=function(options){var settings=$.extend({plusIcon:'',minusIcon:''},options);this.append('<span class="add">'+settings.plusIcon+'</span>');this.append('<span class="sub">'+settings.minusIcon+'</span>');return this.each(function(){let spinner=$(this),input=spinner.find('input[type="number"]'),add=spinner.find('.add'),sub=spinner.find('.sub');input.parent().on('click','.sub',function(event){event.preventDefault();if(input.val()>parseInt(input.attr('min'),10)){input.val(function(i,oldvalue){return--oldvalue})}});input.parent().on('click','.add',function(event){event.preventDefault();if(input.val()<parseInt(input.attr('max'),10)){input.val(function(i,oldvalue){return++oldvalue})}})})}
$.fn.scrollView=function(){return this.each(function(){$('html, body').animate({scrollTop:$(this).offset().top},1000)})}
$.fn.mySelect=function(options){let $this=$(this),numberOfOptions=$(this).children('option');$this.addClass('select-hidden');$this.wrap('<div class="select"></div>');$this.after('<div class="select-styled"></div>');let styledSelect=$this.next('.select-styled');styledSelect.text($this.children('option').eq(0).text());let list=$('<ul />',{'class':'select-options'}).insertAfter(styledSelect);for(let i=0;i<numberOfOptions.length;i++){$('<li />',{text:$this.children('option').eq(i).text(),rel:$this.children('option').eq(i).val()}).appendTo(list)}
let listItems=list.children('li');styledSelect.on('click',function(e){e.stopPropagation();$('.select-styled.active').not(this).each(function(){$(this).removeClass('active').next('.select-options').fadeIn()});$(this).toggleClass('active').next('.select-options').toggle();$(this).parent().toggleClass('focus')});listItems.on('click',function(e){e.stopPropagation();styledSelect.text($(this).text()).removeClass('active');$this.val($(this).attr('rel'));list.hide();if($(this).parent().parent().hasClass('focus')){$(this).parent().parent().removeClass('focus')}});$(document).on('click',function(){styledSelect.removeClass('active');list.hide()})}
$.fn.myChart=function(options){var settings=$.extend({barColor:'',scaleColor:'transparent',trackColor:'#f9f9f9',lineCap:'round',size:160,lineWidth:10,},options);return this.easyPieChart({barColor:settings.barColor,scaleColor:settings.scaleColor,trackColor:settings.trackColor,lineCap:settings.lineCap,size:settings.size,lineWidth:settings.lineWidth})}
function stickyHeader(){let mainheader=$('.nav-sticky'),height=mainheader.outerHeight(),scroll=$(document).scrollTop();$(window).on('load',function(){if($(document).scrollTop()>height){if(mainheader.hasClass('sticky-header')){mainheader.removeClass('sticky-header')}else{mainheader.addClass('sticky-header')}}})
$(window).on('scroll',function(){let scrolled=$(document).scrollTop(),header=$('.sticky-header');if(scrolled>scroll){header.addClass('sticky')}else{header.removeClass('sticky')}
if(scrolled===0){mainheader.removeClass('sticky-header')}else{mainheader.addClass('sticky-header')}
scroll=$(document).scrollTop()})}
$(window).on('load',function(){initparallax();stickyHeader();if($('.cases-grid').length>0){var $container=$('.cases-grid'),colWidth=function(){var w=$container.width(),columnNum=1,columnWidth=0;if(w>1200){columnNum=3}else if(w>900){columnNum=3}else if(w>600){columnNum=3}else if(w>450){columnNum=2}else if(w>385){columnNum=1}
columnWidth=Math.floor(w/columnNum);$container.find('.cases-grid-item').each(function(){var $item=$(this),multiplier_w=$item.attr('class').match(/cases-grid-item-w(\d)/),multiplier_h=$item.attr('class').match(/cases-grid-item-h(\d)/),width=multiplier_w?columnWidth*multiplier_w[1]:columnWidth,height=multiplier_h?columnWidth*multiplier_h[1]*0.4-12:columnWidth*0.5;$item.css({width:width})});return columnWidth},isotope=function(){$container.isotope({resizable:!1,itemSelector:'.cases-grid-item',masonry:{columnWidth:colWidth(),gutterWidth:3}})};isotope();$(window).on('resize',isotope);var $optionSets=$('.filter-button-wraper .option-set'),$optionLinks=$optionSets.find('a');$optionLinks.on('click',function(){var $this=$(this);var $optionSet=$this.parents('.option-set');$optionSet.find('.selected').removeClass('selected');$this.addClass('selected');var options={},key=$optionSet.attr('data-option-key'),value=$this.attr('data-option-value');value=value==='false'?!1:value;options[key]=value;if(key==='layoutMode'&&typeof changeLayoutMode==='function'){changeLayoutMode($this,options)}else{$container.isotope(options)}
return!1})}
contentToCenter();setLogo();equalHeight();setWidth()});$(document).ready(function(){initparallax();contentToCenter();equalHeight();setWidth();stickyHeader();if($('.xs-menus').length>0){$('.xs-menus').xs_nav({mobileBreakpoint:992,},{passive:!0})}
if($('.single-page-menu li a').length>0){$('.single-page-menu li a').on('click',function(){if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')||location.hostname==this.hostname){var target=$(this.hash);target=target.length?target:$('[name='+this.hash.slice(1)+']');if(target.length){$('html,body').animate({scrollTop:target.offset().top},1000);return!1}}});$('.single-page-menu li a').on('click',function(){var panel=$('.nav-overlay-panel'),menuWraper=$('.nav-menus-wrapper');if(menuWraper.hasClass('nav-menus-wrapper-open')){menuWraper.removeClass('nav-menus-wrapper-open')}
if(panel.css('display')==='block'){panel.css('display','none')}})}
$(document).on('submit','#xs-contact-form',function(event){event.preventDefault();var xs_contact_name=$('#xs_contact_name'),xs_contact_email=$('#xs_contact_email'),xs_contact_phone=$('#xs_contact_phone'),xs_contact_subject=$('#xs_contact_subject'),x_contact_massage=$('#x_contact_massage'),xs_contact_submit=$('#xs_contact_submit'),xs_contact_error=!1;$('.xpeedStudio_success_message').remove();if(xs_contact_name.val().trim()===''){xs_contact_name.addClass('invaild');xs_contact_error=!0;xs_contact_name.focus();return!1}else{xs_contact_name.removeClass('invaild')}
if(xs_contact_email.val().trim()===''){xs_contact_email.addClass('invaild');xs_contact_error=!0;xs_contact_email.focus();return!1}else if(!email_pattern(xs_contact_email.val().toLowerCase())){xs_contact_email.addClass('invaild');xs_contact_error=!0;xs_contact_email.focus();return!1}else{xs_contact_email.removeClass('invaild')}
if(xs_contact_phone.val().trim()===''){xs_contact_phone.addClass('invaild');xs_contact_error=!0;xs_contact_phone.focus();return!1}else{xs_contact_phone.removeClass('invaild')}
if(xs_contact_subject.val().trim()===''){xs_contact_subject.addClass('invaild');xs_contact_error=!0;xs_contact_subject.focus();return!1}else{xs_contact_subject.removeClass('invaild')}
if(x_contact_massage.val().trim()===''){x_contact_massage.addClass('invaild');xs_contact_error=!0;x_contact_massage.focus();return!1}else{x_contact_massage.removeClass('invaild')}
if(xs_contact_error===!1){xs_contact_submit.before().hide().fadeIn();$.ajax({type:"POST",url:"assets/php/contact-form.php",data:{'xs_contact_name':xs_contact_name.val(),'xs_contact_email':xs_contact_email.val(),'xs_contact_phone':xs_contact_phone.val(),'x_contact_massage':x_contact_massage.val(),},success:function(result){xs_contact_submit.after('<p class="xpeedStudio_success_message">'+result+'</p>').hide().fadeIn();setTimeout(()=>{$(".xpeedStudio_success_message").fadeOut(1000,function(){$(this).remove()})},5000);$('#xs-contact-form')[0].reset()}})}});if($('.xs-video-popup').length>0){$('.xs-video-popup').magnificPopup({disableOn:700,type:'iframe',mainClass:'mfp-fade',removalDelay:160,preloader:!1,fixedContentPos:!1})}
if($('.offset-side-bar').length>0){$('.offset-side-bar').on('click',function(e){e.preventDefault();e.stopPropagation();$('.cart-group').addClass('isActive')})}
if($('.close-side-widget').length>0){$('.close-side-widget').on('click',function(e){e.preventDefault();$('.cart-group').removeClass('isActive')})}
if($('.navSidebar-button').length>0){$('.navSidebar-button').on('click',function(e){e.preventDefault();e.stopPropagation();$('.info-group').addClass('isActive')})}
if($('.close-side-widget').length>0){$('.close-side-widget').on('click',function(e){e.preventDefault();$('.info-group').removeClass('isActive')})}
$('body').on('click',function(e){$('.info-group').removeClass('isActive');$('.cart-group').removeClass('isActive')});$('.xs-sidebar-widget').on('click',function(e){e.stopPropagation()});$('body').on('contextmenu',function(e){e.preventDefault();e.stopPropagation();return!1});$(document).on('keydown',function(e){if((e.ctrlKey&&(e.keyCode==85))||(e.ctrlKey&&(e.shiftKey&&e.keyCode==73))||(e.ctrlKey&&(e.shiftKey&&e.keyCode==75))){return!1}else{return!0}})
if($('.xs-modal-popup').length>0){$('.xs-modal-popup').magnificPopup({type:'inline',fixedContentPos:!1,fixedBgPos:!0,overflowY:'auto',closeBtnInside:!1,callbacks:{beforeOpen:function(){this.st.mainClass="my-mfp-slide-bottom xs-promo-popup"}}})}
if($('img').length>0){$('img').each(function(){$(this).attr('draggable','false');$(this).on('mousedown',function(event){if(event.preventDefault){event.preventDefault()}})})}
if($('.subscribe-form').length>0){$('.subscribe-form').ajaxChimp({url:'https://facebook.us8.list-manage.com/subscribe/post?u=85f515a08b87483d03fee7755&amp;id=66389dc38b'})}
$(function(){var wow=new WOW({boxClass:'wow',animateClass:'animated',offset:0,mobile:!1,live:!0,scrollContainer:null,});wow.init()});let url=window.location.pathname,activePage=url.substr(url.lastIndexOf('/')+1);$('.xs-menus .nav-menu li a').each(function(e,i){var currentPage=this.href.substr(this.href.lastIndexOf('/')+1);if(activePage==currentPage){$([i]).addClass("active");if($([i]).parents().closest('.nav-submenu').parent('li')){$([i]).parents().closest('.nav-submenu').parent('li').addClass('active')}
$([i]).parent().addClass('active')}});if($('.banner-slider').length>0){$('.banner-slider').myOwl({animateOut:'fadeOut',animateIn:'fadeIn'})}
if($('.tab-swipe').length>0){$('.tab-swipe').append('<li class="indicator"></li>');if($('.tab-swipe li a').hasClass('active')){let cLeft=$('.tab-swipe li a.active').position().left+'px',cWidth=$('.tab-swipe li a.active').css('width');$('.indicator').css({left:cLeft,width:cWidth})}
$('.tab-swipe li a').on('click',function(){$('.tab-swipe li a').removeClass('isActive');$(this).addClass('isActive');let cLeft=$('.tab-swipe li a.isActive').position().left+'px',cWidth=$('.tab-swipe li a.isActive').css('width');$('.indicator').css({left:cLeft,width:cWidth})})}
if(($('#sync1')&&$('#sync2')).length>0){let sync1=$("#sync1");let sync2=$("#sync2");let slidesPerPage=3;let syncedSecondary=!0;sync1.owlCarousel({items:1,slideSpeed:2000,nav:!1,autoplay:!0,dots:!0,loop:!0,responsiveRefreshRate:200,}).on('changed.owl.carousel',syncPosition);sync2
.on('initialized.owl.carousel',function(){sync2.find(".owl-item").eq(0).addClass("current")}).owlCarousel({items:slidesPerPage,dots:!0,nav:!1,autoplay:!0,smartSpeed:200,slideSpeed:500,slideBy:slidesPerPage,responsiveRefreshRate:100,responsive:{0:{items:1},768:{items:2},1024:{items:slidesPerPage}}}).on('changed.owl.carousel',syncPosition2);function syncPosition(el){let count=el.item.count-1;let current=Math.round(el.item.index-(el.item.count/2)-.5);if(current<0){current=count}
if(current>count) {current=0}
sync2
.find(".owl-item").removeClass("current").eq(current).addClass("current");let onscreen=sync2.find('.owl-item.active').length-1;let start=sync2.find('.owl-item.active').first().index();let end=sync2.find('.owl-item.active').last().index();if(current>end){sync2.data('owl.carousel').to(current,100,!0)}
if(current<start){sync2.data('owl.carousel').to(current-onscreen,100,!0)}}
function syncPosition2(el){if(syncedSecondary){let number=el.item.index;sync1.data('owl.carousel').to(number,100,!0)}}
sync2.on("click",".owl-item",function(e){e.preventDefault();let number=$(this).index();sync1.data('owl.carousel').to(number,300,!0)})}
if(($('#sync3')&&$('#sync4')).length>0){let sync3=$("#sync3");let sync4=$("#sync4");let slidesPerPage=3;let syncedSecondary=!0;sync3.owlCarousel({items:1,slideSpeed:2000,nav:!1,autoplay:!0,dots:!0,loop:!0,responsiveRefreshRate:200,}).on('changed.owl.carousel',syncPosition);sync4
.on('initialized.owl.carousel',function(){sync4.find(".owl-item").eq(0).addClass("current")}).owlCarousel({items:slidesPerPage,dots:!0,nav:!1,smartSpeed:200,autoplay:!0,slideSpeed:500,slideBy:slidesPerPage,responsiveRefreshRate:100,responsive:{0:{items:1},768:{items:2},1024:{items:slidesPerPage}}}).on('changed.owl.carousel',syncPosition2);function syncPosition(el){let count=el.item.count-1;let current=Math.round(el.item.index-(el.item.count/2)-.5);if(current<0){current=count}
if(current>count) {current=0}
sync4
.find(".owl-item").removeClass("current").eq(current).addClass("current");let onscreen=sync4.find('.owl-item.active').length-1;let start=sync4.find('.owl-item.active').first().index();let end=sync4.find('.owl-item.active').last().index();if(current>end){sync4.data('owl.carousel').to(current,100,!0)}
if(current<start){sync4.data('owl.carousel').to(current-onscreen,100,!0)}}
function syncPosition2(el){if(syncedSecondary){let number=el.item.index;sync3.data('owl.carousel').to(number,100,!0)}}
sync4.on("click",".owl-item",function(e){e.preventDefault();let number=$(this).index();sync3.data('owl.carousel').to(number,300,!0)})}
if(($('#sync5')&&$('#sync6')).length>0){let sync5=$("#sync5");let sync6=$("#sync6");let slidesPerPage=3;let syncedSecondary=!0;sync5.owlCarousel({items:1,slideSpeed:2000,nav:!1,autoplay:!0,dots:!0,loop:!0,responsiveRefreshRate:200,}).on('changed.owl.carousel',syncPosition);sync6
.on('initialized.owl.carousel',function(){sync6.find(".owl-item").eq(0).addClass("current")}).owlCarousel({items:slidesPerPage,dots:!0,nav:!1,smartSpeed:200,autoplay:!0,slideSpeed:500,slideBy:slidesPerPage,responsiveRefreshRate:100,responsive:{0:{items:1},768:{items:2},1024:{items:slidesPerPage}}}).on('changed.owl.carousel',syncPosition2);function syncPosition(el){let count=el.item.count-1;let current=Math.round(el.item.index-(el.item.count/2)-.5);if(current<0){current=count}
if(current>count) {current=0}
sync6
.find(".owl-item").removeClass("current").eq(current).addClass("current");let onscreen=sync6.find('.owl-item.active').length-1;let start=sync6.find('.owl-item.active').first().index();let end=sync6.find('.owl-item.active').last().index();if(current>end){sync6.data('owl.carousel').to(current,100,!0)}
if(current<start){sync6.data('owl.carousel').to(current-onscreen,100,!0)}}
function syncPosition2(el){if(syncedSecondary){let number=el.item.index;sync5.data('owl.carousel').to(number,100,!0)}}
sync6.on("click",".owl-item",function(e){e.preventDefault();let number=$(this).index();sync5.data('owl.carousel').to(number,300,!0)})}
if($('.testimonial-slider').length>0){$('.testimonial-slider').myOwl({dots:!0})}
if($('.gallery-slider').length>0){$('.gallery-slider').myOwl({nav:!0,navText:['<i class="icon icon-left-arrows"></i>','<i class="icon icon-right-arrow"></i>']})}
var barColors=['#50e2c2','#ffac42','#9013fd'];var chart=$('.chart');function chartInit(){for(let i=0;i<$('.single-piechart').length;i++){$(chart[i]).myChart({barColor:barColors[i]})}}
chart.each(function(){var value=$(this).attr('data-percent');$(this).find('.chart-content').append('<span class="chart-value">'+value+'%</span>')})
var chartValue=$('.chart-value');for(let i=0;i<barColors.length;i++){$(chartValue[i]).css('color',barColors[i])}
var number_percentage=$(".number-percentage");function animateProgressBar(){number_percentage.each(function(){$(this).animateNumbers($(this).attr("data-value"),!0,parseInt($(this).attr("data-animation-duration"),10))})}
if($('.waypoint-tigger').length>0){var waypoint=new Waypoint({element:document.getElementsByClassName('waypoint-tigger'),handler:function(direction){animateProgressBar();chartInit()},offset:'50%'})}
$.fn.animateNumbers=function(stop,commas,duration,ease){return this.each(function(){var $this=$(this);var start=parseInt($this.text().replace(/,/g,""),10);commas=(commas===undefined)?!0:commas;$({value:start}).animate({value:stop},{duration:duration==undefined?500:duration,easing:ease==undefined?"swing":ease,step:function(){$this.text(Math.floor(this.value));if(commas){$this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,"))}},complete:function(){if(parseInt($this.text(),10)!==stop){$this.text(stop);if(commas){$this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,"))}}}})})};$('body').on('click','.next-step[href^="#"]',function(event){event.preventDefault();var target=$(this).attr('href');if($(target).length>0){$('html, body').animate({scrollTop:$(target).offset().top},1000)}else{console.warn('Element '+target+' does not exist')}});if($('.xs-select').length>0){$('.xs-select').mySelect()}
if($('.custom_number').length>0){$('.custom_number').customNumber({plusIcon:'<i class="icon icon-up-arrow2"></i>',minusIcon:'<i class="icon icon-down-arrow2"></i>'})}
if($(".btn-floating").length>0){var content=$('.floating-icons-list');content.addClass('hidden');$('.btn-floating').each(function(){$(this).on('click',function(e){e.preventDefault();$(this).next().toggleClass("open");$(this).next().toggleClass("hidden");if($(this).hasClass('active')){$(this).removeClass('active')}else{$(this).addClass('active')}})})}
if($('.product-slider, .about-slider').length>0){$('.product-slider, .about-slider').myOwl({dots:!0})}
$('.comment-reply-link').on('click',function(event){event.preventDefault();$('#comment-form').scrollView()});if($('.rate-graph').length>0){$('.rate-graph').each(function(){if($(this).find('.rate-graph-bar').attr('data-percent')<=100){$(this).find('.rate-graph-bar').css({width:$(this).find('.rate-graph-bar').attr('data-percent')+'%',})}else{$(this).find('.rate-graph-bar').css({width:100+'%',})}})}
if($('.case-study-slider').length>0){$('.case-study-slider').myOwl({items:3,dots:!0,margin:30,stagePadding:15,responsive:{0:{items:1},768:{items:2},1024:{items:3}}})}
if($('#rev_slider_6_1').length>0){var revapi6,tpj;(function(){if(!/loaded|interactive|complete/.test(document.readyState))document.addEventListener("DOMContentLoaded",onLoad);else onLoad();function onLoad(){if(tpj===undefined){tpj=jQuery;if("off"=="on")tpj.noConflict()}
if(tpj("#rev_slider_6_1").revolution==undefined){revslider_showDoubleJqueryError("#rev_slider_6_1")}else{revapi6=tpj("#rev_slider_6_1").show().revolution({sliderType:"standard",jsFileLocation:"",sliderLayout:"fullwidth",dottedOverlay:"none",delay:9000,navigation:{keyboardNavigation:"off",keyboard_direction:"horizontal",mouseScrollNavigation:"off",mouseScrollReverse:"default",onHoverStop:"off",arrows:{style:"gyges",enable:!0,hide_onmobile:!1,hide_onleave:!1,tmp:'',left:{h_align:"left",v_align:"center",h_offset:20,v_offset:0},right:{h_align:"right",v_align:"center",h_offset:20,v_offset:0}}},responsiveLevels:[1240,1024,778,480],visibilityLevels:[1240,1024,778,480],gridwidth:[1240,1024,778,480],gridheight:[868,768,960,720],lazyType:"none",minHeight:"850",parallax:{type:"mouse",origo:"enterpoint",speed:400,speedbg:0,speedls:0,levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],},shadow:0,spinner:"spinner0",stopLoop:"off",stopAfterLoops:-1,stopAtSlide:-1,shuffle:"off",autoHeight:"off",disableProgressBar:"on",hideThumbsOnMobile:"off",hideSliderAtLimit:0,hideCaptionAtLimit:0,hideAllCaptionAtLilmit:0,debugMode:!1,fallbacks:{simplifyAll:"off",nextSlideOnWindowFocus:"off",disableFocusListener:!1,}})}}}())}});$(window).on('scroll',function(){if($('.working-process-anim').length>0){var scrollTop=$(window).scrollTop(),elementOffset=$('.working-process-anim').offset().top,elementHeight=$('.working-process-anim').outerHeight(!0);if(!(elementOffset<screenTop)){$('.working-process-anim').removeClass('current-section')}
if(elementOffset<=(scrollTop+150)){$('.working-process-anim').addClass('current-section');if(!((elementHeight+elementOffset)>(scrollTop+200))){$('.working-process-anim').removeClass('current-section')}}}});$(window).on('resize',function(){contentToCenter();setLogo();equalHeight();setWidth()});if($('.map').length>0){google.maps.event.addDomListener(window,'load',initMap);function initMap(){var map;var mapPosition={lat:40.712775,lng:-74.005973};var contentString='<img src="assets/images/position.png" alt="">';var pointer='assets/images/map-marker.png';var infowindow=new google.maps.InfoWindow({content:contentString,maxWidth:483});var marker=new google.maps.Marker({position:mapPosition,map:map,title:'Xpeed Studio',icon:pointer});var mapOptions={zoom:13,center:mapPosition,infowindow,marker}
map=document.getElementsByClassName('map');for(let i=0;i<map.length;i++){const element=new google.maps.Map(map[i],mapOptions)}
marker.addListener('click',function(){infowindow.open(map,marker)})}}})(jQuery)