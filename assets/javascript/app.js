
// When this is live, instead of having HTML below, it will be references to the giant objects we made. '
//want to make slidedown function
$("#peru").on("click", function() {
$(".container").prepend("<div class='contentDiv'><h2>" + "Peru Trip!" + "</h2><h5><i>By: Anna</i></h5><p>" + "Hey y'all! Peru was super awesome. I'm gonna tell you all about it...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae mauris interdum, vehicula nisl sit amet, finibus ex. Ut dapibus lectus ut sapien dictum, vel ultrices orci rhoncus. Praesent pharetra arcu at lectus facilisis, et dapibus nisi scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam luctus, lacus non vulputate malesuada, tortor ex congue neque, a accumsan leo tortor quis diam. Quisque sapien purus, sollicitudin vitae varius eu, malesuada at eros. Nunc pretium felis dolor, placerat malesuada lorem congue euismod. Duis nec ligula sit amet ipsum sagittis imperdiet. Donec feugiat ipsum nec turpis dignissim, sed vulputate dolor maximus.</p>" +
    "<img class='peru' height=200px; width=250px; src='assets/images/peruHolder.jpg'>" + "<p>Pellentesque ac interdum nisl. Donec porta lorem eget nisl blandit, et luctus metus scelerisque. Duis consectetur mollis nunc eu placerat. Cras facilisis odio sit amet commodo efficitur. Nam at mauris nisi. Nulla facilisi. Ut venenatis mauris arcu, id pretium nulla rhoncus pulvinar. Praesent neque dui, scelerisque non rutrum eget, molestie eget ipsum. Sed nec purus et dolor mattis porta. Mauris in fringilla mi. In in nunc sagittis, blandit purus at, tempus orci. Pellentesque non massa at tellus auctor porttitor eget et mi. Nam metus turpis, finibus posuere sagittis ut, efficitur ac erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec a pharetra mi.</p><p>Phasellus nibh quam, condimentum vitae felis a, aliquam finibus est. Donec non fringilla tellus, ac molestie quam. Cras vel odio metus. Morbi in diam vitae quam condimentum tincidunt vel eget dolor. Curabitur at malesuada nibh, eu condimentum elit. Nullam ac placerat lacus. Pellentesque ut erat sem. Phasellus malesuada, massa ac egestas rutrum, libero odio sagittis lacus, sed accumsan lacus ipsum id velit.</p><p>Aenean facilisis ut odio eget blandit. Pellentesque id sagittis massa. Ut ornare sollicitudin eros in finibus. Vivamus arcu nisl, finibus ac molestie id, varius vel ante. Pellentesque commodo felis eget sem volutpat mollis. In neque magna, tincidunt non leo id, gravida elementum leo. Sed laoreet, odio id interdum luctus, odio velit ultricies neque, at accumsan massa lectus id quam. In consectetur pretium quam, et tincidunt eros consequat sed. Fusce dapibus, elit at varius faucibus, lectus quam condimentum diam, ac luctus urna magna non dui. Proin blandit turpis non massa fermentum pulvinar. Aliquam erat volutpat. Vestibulum porttitor lorem nec enim tempor, in molestie arcu iaculis.</p><p>Phasellus blandit in sapien quis sodales. Sed condimentum finibus erat, et porttitor lectus ultricies quis. Praesent vulputate lorem ac augue facilisis, nec fermentum diam gravida. Vestibulum et libero turpis. Duis porttitor massa nec massa laoreet hendrerit. Donec vel malesuada nisl. Phasellus porta, est et luctus dignissim, nisl erat iaculis justo, in elementum massa lacus id ipsum. Aenean dignissim ante ac scelerisque rhoncus. Pellentesque rhoncus eros et quam consequat luctus.</p></div>")
    
})



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