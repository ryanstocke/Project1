



// Stuart Post 1 JS //

var queryURL = "https://api.seatgeek.com/2/events?performers.slug=denver-nuggets&client_id=MTQxNDE1NzJ8MTU0MzUxNDMzOS44MQ";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

//game 1
        var str1 = response.events[0].datetime_utc
        $("#date1").html("Date: " + moment(str1).subtract(7, 'hours').format('LT') + " MST");
        $("#time1").html("Time: " + moment(str1).subtract(7, 'hours').format("dddd, MMM Do"));
        $("#game1").html(response.events[0].title);
        $("#tickets1").attr("href", response.events[0].url);

//game 2
        var str2 = response.events[1].datetime_utc
        $("#date2").html("Date: " + moment(str2).subtract(7, 'hours').format('LT') + " MST");
        $("#time2").html("Time: " + moment(str2).subtract(7, 'hours').format("dddd, MMM Do"));
        $("#game2").html(response.events[1].title);
        $("#tickets2").attr("href", response.events[1].url);

//game 3
        var str3 = response.events[2].datetime_utc
        $("#date3").html("Date: " + moment(str3).subtract(7, 'hours').format('LT') + " MST");
        $("#time3").html("Time: " + moment(str3).subtract(7, 'hours').format("dddd, MMM Do"));
        $("#game3").html(response.events[2].title);
        $("#tickets3").attr("href", response.events[2].url);

});



    // $(".stuartPost").hide();
    // $(".stuartPost").slidedown();
    
   
        // var post = $('#stuartPost').is(':visible');
        // $('#stuartPost')[post?'hide':'slideDown'](post ? 0 : 'slow');


// End Stuart Post 1 JS // 
