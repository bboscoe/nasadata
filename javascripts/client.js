

$.ajax({
  url: "https://data.nasa.gov/resource/gymh-eyc2.json",
  data: {},
  success: function(data) {
    for(let i=0;i<data.length;i++){
      $("pre").append( '<tr><td>' + data[i].category + '</td></tr>' );
      //.text(JSON.stringify(data, null, "\t"));
    }
  },
  error: function(msg) {
    //todo: handle error gracefully
  }
});
