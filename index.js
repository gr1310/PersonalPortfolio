
// Lighting up each card
// Resume card

$("div.card#resume").hover(function(){
    $("div.card#resume").removeClass("opacity-75");
}, function(){
    $("div.card#resume").addClass("opacity-75");
});

// $("div.card#resume").off( "mouseenter mouseleave" );

// Projects card

$("div.card#projects").hover(function(){
    $("div.card#projects").removeClass("opacity-75");
}, function(){
    $("div.card#projects").addClass("opacity-75");
});

// $("div.card#resume").off( "mouseenter mouseleave" );

// $(".btn").click(function(event){
//     console.log(event.target.innerHTML);
//     // $(".btn").attr("href","./assets/Resume.html");
//     // window.open("./assets/Resume.html");
// });
