$(document).ready(function(){
  $("#postComment").click(function(){
      var myobj = {Name:$("#name").val(),Comment:$("#comment").val()};
      jobj = JSON.stringify(myobj);
      $("#json").text(jobj);
      
      
      var url = "comment";
        $.ajax({
        url:url,
        type: "POST",
        data: jobj,
        contentType: "application/json; charset=utf-8",
        success: function(data,textStatus) {
            $("#done").html(textStatus);
        }
        })
     
  });
  
  
  
   $("#deleteComments").click(function() {
        var url = "deleteAll";
        $.ajax({
        url:url,
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function(data,textStatus) {
            $("#comments").html("<ul></ul>");
            $("#done").html("Deleted");
            $("#json").text("");
        }
        })
      });
  
  
  
  
    $("#getComments").click(function() {
        $.getJSON('comment', function(data) {
          console.log(data);
          var everything = "<ul>";
          for(var comment in data) {
            com = data[comment];
            everything += "<li> Name: " + com.Name + " -- Comment: " + com.Comment + "</li>";
          }
          everything += "</ul>";
          $("#comments").html(everything);
        })
      });
  
  $("#commentsByUser").click(function() {
      var myobj = {Name:$("#userName").val()};
      jobj = JSON.stringify(myobj);
      $("#json").text(jobj);
      
      
      var url = "byUser?q="+$("#userName").val();
        $.ajax({
        url:url,
        type: "GET",
        data: jobj,
        contentType: "application/json; charset=utf-8",
        success: function(data,textStatus) {
            console.log(data);
          var everything = "<ul>";
          for(var comment in data) {
            com = data[comment];
            everything += "<li> Name: " + com.Name + " -- Comment: " + com.Comment + "</li>";
          }
          everything += "</ul>";
          $("#comments").html(everything);
        }
        })
      });
});












