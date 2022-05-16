var timeDisplayEl = $('#time-display');

function displayTime() {
  var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
  timeDisplayEl.text(rightNow);
}

  setInterval(displayTime, 1000);

  $(document).ready(function() {
    
    $(".saveBtn").on("click", function() {
      var value = $(this).siblings('.description').val();
      var time = $(this).parent().attr("id");
 
      localStorage.setItem(time, value);

      $(".notification").addClass("show")

      setTimeout(function() {
        $(".notification").removeClass("show");

      }, 5000); 
  });

  function hourUpdate() {
    var currentHour = moment().hours();

    $('.time-block').each(function() {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      if(blockHour < currentHour){
          $(this).addClass("past");
      } else if(blockHour === currentHour){
        $(this).removeClass("past");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future")
      }
    })
  }
    hourUpdate();

    var interval = setInterval(hourUpdate, 15000)

    $("#am-9 .description").val(localStorage.getItem("am-9"))
    $("#am-10 .description").val(localStorage.getItem("am-10"))
    $("#am-11 .description").val(localStorage.getItem("am-11"))
    $("#pm-12 .description").val(localStorage.getItem("pm-12"))
    $("#pm-13 .description").val(localStorage.getItem("pm-13"))
    $("#pm-14 .description").val(localStorage.getItem("pm-14"))
    $("#pm-15 .description").val(localStorage.getItem("pm-15"))
    $("#pm-16 .description").val(localStorage.getItem("pm-16"))
    $("#pm-17 .description").val(localStorage.getItem("pm-17"))

  });