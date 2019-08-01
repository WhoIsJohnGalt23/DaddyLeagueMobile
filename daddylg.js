$(document).ready(function(){
$('nav.navbar.navbar-expand-lg.dlnavbar.dlnavbg').prepend($('<img>',{id:'theImg',src:'https://www.freepnglogos.com/uploads/playstation-png-logo/playstation-brand-png-logo-16.png'}));


$('.col-md-9.col-xs-9.col-sm-9').attr('class', 'col-md-12 col-xs-12 col-sm-12 sl');
 $('.col-md-10.col-xs-10.col-sm-10').attr('class', 'col-md-12 col-xs-12 col-sm-12 sl');
 $('table.table.table-striped.madden-stangings').attr('class', 'table table-striped madden-stangings responsive');
	
	
/***menu league title and additional links********************************************************************************************/
$( "a.navbar-brand" ).text( "warzone madden league" );
$("div#dlmaddenmenu ul.navbar-nav ").append('<a href="http://www.daddyleagues.com/wz19/admin/sync_week" class="btn btn-info ajax" role="button" data-method="post" data-disabled="true" data-loader=".ajax-loader-roster" data-html=".rosterresults">  <img class="ajax-loader-roster" style="display:none" alt="Sending ..." src="/img/ajax-loader.gif"> <em class="icon-wrench"></em></a>');

/***scoreboard**********************/
 $( "div#flip2").load( "/wz19/schedules div#scores" );
 $('div#flip2').attr('class', 'simple-ticker');
$('.simple-ticker').attr('id', 'js-ticker-fade');
    $("div#js-ticker-fade").hide();
    $("#flip").on("click", function(){
        $("div#js-ticker-fade").fadeToggle('slow');
    });
 $( "div#flip" ).load( "/wz19/admin .col-xl-6:nth-child(1) .card.text-center.card-default .card-body h4.card-title" );
 $( "div#mem").load( "/wz19/admin ul.navbar-nav.flex-row.mr-3 " );

/*league leaders home page********/
$( ".passingleaders" ).load( "/wz19/stats/player/passing  .col-xl-10" );
$( ".rushingleaders" ).load( "/wz19/stats/player/rushing .col-xl-10" );
$( ".receivingleaders" ).load( "/wz19/stats/player/receiving .col-xl-10" );
$( ".sacksleaders" ).load( "/wz19/stats/player/defense?sortby=sack  .col-xl-10" );
$( ".tacklesleaders" ).load( "/wz19/stats/player/defense?sortby=tackles .col-xl-10" );
$( ".interceptionsleaders" ).load( "/wz19/stats/player/defense?sortby=int .col-xl-10" );

/*standings tabs*******************************************************/
 $( ".afc.standings").load( "/wz19/standings .card.card-default:nth-child(4)" );
 $( ".nfc.standings").load( "/wz19/standings .card.card-default:nth-child(5)" );

/*All Teams Page**********************************************************/
if(window.location.href=== "http://www.daddyleagues.com/wz19/teams") {
         $(".col-xl-10").addClass("teams");
     }

/*Standings Page*********************************************************/
if(window.location.href=== "/wz19/standings") {
         $(" .table-responsive").addClass("table-responsive-page");
     }

/****Game of the Week******************************************************/
/*BEARS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/0.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/CHI.svg")');
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/0.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/CHI.svg")');

/*BENGALS*/
$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/1.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/CIN.svg")');
$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/1.png"]').attr( "style", "" ).css ( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/CIN.svg")');

/*BILLS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/2.png"]').attr( "style", "" ).css( 'background-image', 'url("https://i.imgur.com/U6fPpSU.png")');
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/2.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/BUF.svg")');



/*BRONCOS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/3.png"]').attr( "style", "" ).css( 'background-image', 'url("https://i.imgur.com/eGq6jyQ.png")');
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/3.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/DEN.svg")');

/*BROWNS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/4.png"]').attr( "style", "" ).css( 'background-image', 'url("https://i.imgur.com/kDT2mfa.png")');
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/4.png"]').attr( "style", "" ).css( 'background-image', 'url("https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/CLE.svg")');



/*BUCCANEERS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/5.png"]').attr( "style", "" ).css( 'background-image', 'url("https://i.imgur.com/Wu3mPB6.png")');
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/5.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/TB.svg")');


/*CARDINALS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/6.png"]').attr( "style", "" ).css( 'background-image', 'url("https://i.imgur.com/6TGa2yB.png")');
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/6.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/ARI.svg")');


/*CHARGERS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/7.png"]').attr( "style", "" ).css( 'background-image', 'url("https://i.imgur.com/i88U9sG.png")');
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/7.png"]').attr( "style", "" ).css( 'background-image', 'url("https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/LAC.svg")');


/*CHIEFS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/8.png"]').attr( "style", "" ).css( 'background-image', 'url("https://i.imgur.com/MlMFRzS.png")');
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/8.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/KC.svg")');


/*COLTS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/9.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/IND.svg")');
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/9.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/IND.svg")');


/*HASSAN*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/10.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/DAL.svg")');
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/10.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/DAL.svg")');


/*DOLPHINS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/11.png"]').attr( "style", "" ).css( 'background-image', 'url("https://i.imgur.com/7XF7mEe.png")');
$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/11.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/MIA.svg")');

/*EAGLES*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/12.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/PHI.svg")');
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/12.png"]').attr( "style", "" ).css( 'background-image', 'url("https://i.imgur.com/nyI0AZQ.png")');


/*FALCONS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/13.png"]').attr( "style", "" ).css( 'background-image', 'url("https://i.imgur.com/BiTQCab.png")');
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/13.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/ATL.svg")');


/*49ERS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/14.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/SF.svg")');
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/14.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/SF.svg")');


/*GIANTS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/15.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/NYG.svg")');
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/15.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/NYG.svg")');


/*JAGUARS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/16.png"]').attr( "style", "" ).css( 'background-image', 'url("https://i.imgur.com/bZVk0nE.png")');
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/16.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/JAC.svg")');


/*JETS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/17.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/NYJ.svg")');
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/17.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/NYJ.svg")');


/*LIONS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/18.png"]').attr( "style", "" ).css( 'background-image', 'url("https://i.imgur.com/STSHJbV.png")');
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/18.png"]').attr( "style", "" ).css( 'background-image', 'url("https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/DET.svg")');


/*PACKERS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/19.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/GB.svg")');
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/19.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/GB.svg")');



/*PANTHERS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/20.png"]').attr( "style", "" ).css( 'background-image', 'url("https://i.imgur.com/mbMWd1p.png")');
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/20.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/CAR.svg")');


/*PATRIOTS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/21.png"]').attr( "style", "" ).css( 'background-image', 'url("https://i.imgur.com/ReOPZ0M.png")');
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/21.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/NE.svg")');


/*RAIDERS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/22.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/OAK.svg")');
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/22.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/OAK.svg")');


/*RAMS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/23.png"]').attr( "style", "" ).css( 'background-image', 'url("https://static.nfl.com/static/site/img/logos/500x500/LA.png")');
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/23.png"]').attr( "style", "" ).css( 'background-image', 'url("https://static.nfl.com/static/site/img/logos/500x500/LA.png")');


/*RAVENS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/24.png"]').attr( "style", "" ).css( 'background-image', 'url("https://i.imgur.com/U84hoeM.png")');
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/24.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/BAL.svg")');


/*REDSKINS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/25.png"]').attr( "style", "" ).css( 'background-image', 'url("https://i.imgur.com/EbZGOCw.png")');
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/25.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/WAS.svg")');



/*SAINTS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/26.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/NO.svg")');
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/26.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/NO.svg")');


/*SEAHAWKS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/27.png"]').attr( "style", "" ).css( 'background-image', 'url("https://i.imgur.com/AYPe3aY.png")');
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/27.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/SEA.svg")');

/*STEELERS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/28.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/PIT.svg")');
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/28.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/PIT.svg")');


/*TITANS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/29.png"]').attr( "style", "" ).css( 'background-image', 'url("https://i.imgur.com/iY9uxhq.png")');
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/29.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/TEN.svg")');
	

/*VIKINGS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/30.png"]').attr( "style", "" ).css( 'background-image', 'url("https://i.imgur.com/wh3z8uB.png")');
       $('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/30.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/MIN.svg")');


/*TEXANS*/
	$('.col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right[style*="/img/nfl/teams/right/31.png"]').attr( "style", "" ).css( 'background-image', 'url("https://i.imgur.com/1OJdXcp.png")');
	$('.col-6.d-flex.align-items-center.justify-content-center.rounded-left[style*="/img/nfl/teams/left/31.png"]').attr( "style", "" ).css( 'background-image', 'url("http://i.nflcdn.com/static/site/6.3/img/logos/svg/teams/HOU.svg")');
});


/***Splash page***/
$('.Splash.col-lg-12.col-md-12.col-sm-12.col-xs-12').fadeIn('slow').delay(2000).fadeOut('slow');

/*DL personal menu ****/
$( ".dropdown-menu.dropdown-menu-right.animated.flipInX.show" ).wrap( "<div class='col-xl-12'></div>" );





/*GOW************************************************************************************************************/
$('.col-3.d-flex.align-items-center.justify-content-center.rounded-left').attr('class', ' col-6 d-flex align-items-center justify-content-center rounded-left');
 $('.col-3.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right').attr('class', ' col-6 bg-inverse d-flex align-items-center justify-content-center rounded-right');
 $('.row.row-flush .col-3:nth-child(2)').attr('class', ' gow away score');
$('.row.row-flush .col-3:nth-child(3)').attr('class', ' gow home score');
 $('.align-right.clickable.ng-scope').attr('class', ' col-lg-12 col-md-12 col-sm-12 col-xs-12 GOW left');
 $('.clickable.ng-scope').attr('class',  'col-lg-12 col-md-12 col-sm-12 col-xs-12  GOW right');
 $('.gameoftheweek .cfm-table tr td.cfm-at').attr('class', 'col-lg-12 col-md-12 col-sm-12 col-xs-12 at');
$('.gameoftheweek').attr('class', 'col-lg-12 col-md-12 col-sm-12 col-xs-12 gameoftheweek');
$('.gameoftheweek .GOW').wrapInner('<div class="record"></div>');
 $( ".gow.away.score" ).appendTo( $( ".col-6.d-flex.align-items-center.justify-content-center.rounded-left" ) );
$( ".gow.home.score" ).appendTo( $( ".col-6.bg-inverse.d-flex.align-items-center.justify-content-center.rounded-right" ) );

/*storylines***/
 $( ".jumbotron.hero-nature.carousel-hero" ).load( "/wz19/blog .blogpost:nth-child(1)" );
 $( ".jumbotron.hero-photography.carousel-hero" ).load( "/wz19/blog .blogpost:nth-child(2)" );
 $( ".jumbotron.hero-technology.carousel-hero" ).load( "/wz19/blog .blogpost:nth-child(3)" );




/*Playoff Race****/
  $("div#afc_playoff .list-group-item.cfm-hp-playoffrace:nth-child(n+8)").hide();
    $("div#afc_playoff .list-group h4").on("click", function(){
        $("div#afc_playoff .list-group-item.cfm-hp-playoffrace:nth-child(n+8)").slideToggle('slow');
});
 $("div#nfc_playoff .list-group-item.cfm-hp-playoffrace:nth-child(n+8)").hide();
    $("div#nfc_playoff .list-group h4").on("click", function(){
        $("div#nfc_playoff .list-group-item.cfm-hp-playoffrace:nth-child(n+8)").slideToggle('slow');
});


/*Standings tab***/
$(".col-xl-10.teams .row .col-xl-6").attr("class","col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12");

/*Game Recap Page***/
$( ".card.b" ).wrap( "<div class='col-xl-12'></div>" );
$(".card.Awayteam.flex-row.align-items-center.align-items-stretch.border-0 .col-12.py-3.card-madden-team.rounded-right").appendTo(".card.Awayteam.flex-row.align-items-center.align-items-stretch.border-0 .col-8.py-3.card-madden-team.rounded-right");
$(".card.Hometeam.flex-row.align-items-center.align-items-stretch.border-0 .col-12.py-3.card-madden-team.rounded-right").appendTo(".card.Hometeam.flex-row.align-items-center.align-items-stretch.border-0 .col-8.py-3.card-madden-team.rounded-right");
$('.card.b .card-body.bb p.mb-0').contents().filter(function() {
    return this.nodeType == 3
}).each(function(){
    this.textContent = this.textContent.replace('Passing Yards Allowed','Pass Yds Allowed');
});
$('.card.b .card-body.bb p.mb-0').contents().filter(function() {
    return this.nodeType == 3
}).each(function(){
    this.textContent = this.textContent.replace('Rushing Yards Allowed','Rush Yds Allowed');
});
$('.card.b .card-body.bb p.mb-0').contents().filter(function() {
    return this.nodeType == 3
}).each(function(){
    this.textContent = this.textContent.replace('DaddyLeagues estimated Score','Predicted Score');
});


/*Schedules***/
$('.row.row-flush.cfm-team-schedule .col-1.text-center.d-flex.align-items-center.justify-content-center.rounded-left').attr('class', 'col-1 text-center d-flex align-items-center justify-content-center rounded-left');
$('.row.row-flush.cfm-team-schedule .col-2.d-flex.justify-content-start').attr('class', 'col-4 d-flex  justify-content-start');
$('.row.row-flush.cfm-team-schedule .col-6').attr('class', 'col-2');
$('.row.row-flush.cfm-team-schedule .col-3.text-center.d-flex.align-items-end.justify-content-end.rounded-right').attr('class', 'col-4 d-flex  justify-content-start');
$('.col-1.text-center.d-flex.align-items-center.justify-content-center.rounded-left').detach( );
$('.col-4.d-flex.justify-content-start').attr('class', 'col-5 d-flex  justify-content-start');


/*Player Page***/
$( "ul.nav.nav-tabs" ).wrap( "<div class='col-xl-12'></div>" );
$(".col-md-6.col-xs-6.col-sm-6 .card .d-flex.Teamcolors").appendTo(".card.flex-row.align-items-center.align-items-stretch.rounded-left.Teamcolors .col-10.py-3.rounded-right.cfm-player-info");
$(".xl-12").appendTo(".card.flex-row.align-items-center.align-items-stretch.rounded-left.Teamcolors .col-10.py-3.rounded-right.cfm-player-info");
$(".col-xl-12 ul.nav.nav-tabs").appendTo(".card.flex-row.align-items-center.align-items-stretch.rounded-left.Teamcolors .col-10.py-3.rounded-right.cfm-player-info");
$('table.dl-table1.madden-team-table').appendTo(".card.flex-row.align-items-center.align-items-stretch.rounded-left.Teamcolors .col-10.py-3.rounded-right.cfm-player-info");
$(".col-xl-12.col-lg-6.col-md-12.pt-2").appendTo(".card.flex-row.align-items-center.align-items-stretch.rounded-left.Teamcolors .col-10.py-3.rounded-right.cfm-player-info");
$(".col-xl-10.col-lg-6.col-md-12.pt-2").appendTo(".card.flex-row.align-items-center.align-items-stretch.rounded-left.Teamcolors .col-10.py-3.rounded-right.cfm-player-info");
$('.col-1.d-flex.align-items-left.justify-content-center.cfm-player-team-logo').attr('class', 'col-12 d-flex align-items-left justify-content-center cfm-player-team-logo');
$('.col-10.py-3.rounded-right.cfm-player-info').attr('class', 'col-12 py-3 rounded-right cfm-player-info');
$("div#tmpg .table-responsive").appendTo("#tmpg");
$(".col-12.py-3.rounded-right.cfm-player-info").appendTo(".col-12.d-flex.align-items-left.justify-content-center.cfm-player-team-logo");
$(".col-1.d-flex.align-items-left.justify-content-center.cfm-player-logo").appendTo(".col-12.d-flex.align-items-left.justify-content-center.cfm-player-team-logo");
$('.col-1.d-flex.align-items-left.justify-content-center.cfm-player-logo').attr('class', 'col-4 d-flex align-items-left justify-content-center cfm-player-logo  ');
$( ".card-footer.text-center.cfm-player-attribute" ).wrap( "<div class='att-snapshot'>Attribute Snapshot <em class='fa fa-chevron-circle-down'></em></div>" );
$(".card-footer.text-center.cfm-player-attribute").hide();
    $(".att-snapshot").on("click", function(){
        $(".card-footer.text-center.cfm-player-attribute").fadeToggle('slow');
});
$(".col-4.d-flex.align-items-left.justify-content-center.cfm-player-logo img.rounded-circle.thumb128").unwrap();


/*Team Page****/
$( '.col-10.py-3.rounded-right.cfm-team-info').attr('class', 'col-12 py-3 rounded-right cfm-team-info');
$(' .col-2.d-flex.align-items-left.justify-content-center.cfm-team-logo').attr('class', 'col-12 d-flex align-items-left justify-content-center cfm-team-logo  ');
$(' .col-xl-10.col-lg-6.col-md-12.pt-2').attr('class', 'col-xl-12 col-lg-12 col-md-12 pt-2 ');
$('.col-xl-12.col-lg-6.col-md-12').attr('class', 'col-xl-12 col-lg-12 col-md-12 ');
$('.col-xl-12.col-lg-12.col-md-12 .card.flex-row.align-items-center.align-items-stretch.rounded-left.Teamcolors').attr('id', 'tmpg');
$(" ul.nav.nav-tabs").appendTo(".col-12.py-3.rounded-right.cfm-team-info  ");
$(" .col-md-6.col-xs-6.col-sm-6 .card").appendTo(".col-12.py-3.rounded-right.cfm-team-info");
$(".card.card-madden-team").appendTo(".col-12.py-3.rounded-right.cfm-team-info");
 $('table.dl-table1.madden-team-table').appendTo(".col-12.py-3.rounded-right.cfm-team-info");
$(" .col-xl-12.col-lg-12.col-md-12.pt-2").appendTo("div#tmpg .col-12.py-3.rounded-right.cfm-team-info");

/*front-office***/
$("div#frontoffice_wrapper").attr('class', 'col-12 frontoffice_wrapper');

/*pow***/
$(".oplayeroftheweek .col-4.d-flex.align-items-center.justify-content-center.rounded-left	").attr('class', 'oplayeroftheweek col-12 d-flex align-items-center justify-content-center rounded-left');
$(".oplayeroftheweek .col-8.py-2.pl-0").attr('class', 'oplayeroftheweek col-12 py-2 pl-0');
$(".dplayeroftheweek .col-4.d-flex.align-items-center.justify-content-center.rounded-left	").attr('class', 'dplayeroftheweek col-12 d-flex align-items-center justify-content-center rounded-left');
$(".dplayeroftheweek .col-8.py-2.pl-0").attr('class', 'dplayeroftheweek  col-12 py-2 pl-0');
$("img.rounded-circle.thumb24").unwrap();

/*Player search page***/
 $('table.data-table2').attr('class', 'responsive');
$( ".row" ).wrap( "<div class='col-xl-10'></div>" );
$('ul.players-add-filter.dropdown-menu.show').attr('class', 'dropdown-menu');
$("legend").appendTo(".col-xl-10 .row .col-12 .card.card-default .card-body");
$( "legend" ).wrap( "<div class='legendtwo'>Player Search <em class='fa fa-chevron-circle-down'></em></div>" );
$("form.form-horizontal").hide();
    $(".legendtwo").on("click", function(){
        $("form.form-horizontal").fadeToggle('slow');
});
