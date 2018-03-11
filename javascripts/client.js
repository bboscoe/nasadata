

$(document).ready(function() {

  //console.log("in function");
  // everything happens inside of here, when the button is clicked
  let j=0;
  $.ajax({
    url: "https://data.nasa.gov/resource/gymh-eyc2.json",
    data: {},
    success: function(data) {
      $('#foo').click(function () {
      for(let i=0;i<data.length;i++){
        $("pre").append( '<tr><td>' + data[i].category +' '+ data[i].sample_material+ '</td></tr>' );
        console.log(data[i]);

      });
    }


  });


});
