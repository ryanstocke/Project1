



// Stuart Post 1 JS //

var queryURL = "https://api.seatgeek.com/2/events?performers.slug=denver-nuggets&client_id=MTQxNDE1NzJ8MTU0MzUxNDMzOS44MQ";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
//game 1
        var str = response.events[0].datetime_utc
        var dateTime = str.split("T");
        $("#date1").html("Date: " + moment(dateTime[0]).format("dddd, MMM Do"));
        console.log(dateTime[1]);
        $("#time1").html("Time: " + moment(dateTime[1]).format("h hh"));
        $("#game1").html(response.events[0].title);
        $("#tickets1").attr("href", response.events[0].url);

//game 2
        var str = response.events[1].datetime_utc
        var dateTime = str.split("T");
        $("#date2").html("Date: " + moment(dateTime[0]).format("dddd, MMM Do"));
        console.log(dateTime[1]);
        $("#time2").html("Time: " + moment(dateTime[1]).format("h hh"));
        $("#game2").html(response.events[1].title);
        $("#tickets2").attr("href", response.events[1].url);

//game 3
        var str = response.events[2].datetime_utc
        var dateTime = str.split("T");
        $("#date3").html("Date: " + moment(dateTime[0]).format("dddd, MMM Do"));
        console.log(dateTime[1]);
        $("#time3").html("Time: " + moment(dateTime[1]).format("h hh"));
        $("#game3").html(response.events[2].title);
        $("#tickets3").attr("href", response.events[2].url);
    
 


});



    // $(".stuartPost").hide();
    // $(".stuartPost").slidedown();
    
   
        // var post = $('#stuartPost').is(':visible');
        // $('#stuartPost')[post?'hide':'slideDown'](post ? 0 : 'slow');


// End Stuart Post 1 JS // 
