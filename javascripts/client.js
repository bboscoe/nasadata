


    $('button').on('click', function () {
// everything happens inside of here, when the button is clicked
$.ajax({
  url: "https://data.nasa.gov/resource/gymh-eyc2.json?$limit=5&$offset=0",
  data: {},
  success: function(data) {
    for(let i=0;i<data.length;i++){
      $("pre").append( '<tr><td>' + data[i].category +' '+ data[i].sample_material+ '</td></tr>' );
      console.log(data[i]);
      //.text(JSON.stringify(data, null, "\t"));
    }
  },
  error: function(msg) {
    //todo: handle error gracefully
    //https://soda.demo.socrata.com/resource/earthquakes.json?$limit=5&$offset=0
  }

});

    
