$(document).ready(function(){
  
  
  $("#InspirationalSubmit").click(function(){
      var myobj = {Phrase:$("#phrase").val(),Category:"Inspirational"};
      jobj = JSON.stringify(myobj);
      var url = "inspirational";
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
  $("#RelationshipsSubmit").click(function(){
      var myobj = {Phrase:$("#phrase").val(),Category:"Relationships"};
      jobj = JSON.stringify(myobj);
      $("#json").text(jobj);
      
      
      var url = "relationships";
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
  $("#AcademicsSubmit").click(function(){
      var myobj = {Phrase:$("#phrase").val(),Category:"Academics"};
      jobj = JSON.stringify(myobj);
      $("#json").text(jobj);
      
      
      var url = "academics";
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
  $("#FunnySubmit").click(function(){
      var myobj = {Phrase:$("#phrase").val(),Category:"Funny"};
      jobj = JSON.stringify(myobj);
      $("#json").text(jobj);
      
      
      var url = "funny";
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
  
  
    var inspToggle = 0;
    $("#InspirationalShow").click(function() {
      
      if (inspToggle == 0){
        $.getJSON('inspirational', function(data) {
          console.log(data);
          var everything = "<ul>";
          for(var phrase in data) {
            com = data[phrase];
            everything += "<li> Phrase: " + com.Phrase + "</li>";
          }
          everything += "</ul>";
          $(".Inspirational").html(everything);
        })
        inspToggle = 1;
      }
      else{
        $(".Inspirational").html("");
        inspToggle = 0;
      }
      });
      
      
    var relToggle = 0;
    $("#RelationshipsShow").click(function() {
      
      if (relToggle == 0){
        $.getJSON('relationships', function(data) {
          console.log("Got relationship data");
          console.log(data);
          var everything = "<ul>";
          for(var phrase in data) {
            com = data[phrase];
            console.log(com.Phrase);
            everything += "<li> Phrase: " + com.Phrase + "</li>";
          }
          everything += "</ul>";
          $(".Relationships").html(everything);
          
        })
        relToggle = 1;
      }
      else{
        $(".Relationships").html("");
        
        relToggle = 0;
      }
      });
      
      
    var acaToggle = 0;
    $("#AcademicsShow").click(function() {
      
      if (acaToggle == 0){
        $.getJSON('academics', function(data) {
          console.log(data);
          var everything = "<ul>";
          for(var phrase in data) {
            com = data[phrase];
            everything += "<li> Phrase: " + com.Phrase + "</li>";
          }
          everything += "</ul>";
          $(".Academics").html(everything);
        })
        acaToggle = 1;
      }
      else{
        $(".Academics").html("");
        acaToggle = 0;
      }
      });
      
      
    var funnyToggle = 0;
    $("#FunnyShow").click(function() {
      
      if (funnyToggle == 0){
        $.getJSON('funny', function(data) {
          console.log(data);
          var everything = "<ul>";
          for(var phrase in data) {
            com = data[phrase];
            everything += "<li> Phrase: " + com.Phrase + "</li>";
          }
          everything += "</ul>";
          $(".Funny").html(everything);
        })
        funnyToggle = 1;
      }
      else{
        $(".Funny").html("");
        funnyToggle = 0;
      }
      });
  
});












