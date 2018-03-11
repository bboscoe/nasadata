


$('button').on('click', function () {
// everything happens inside of here, when the button is clicked
let j=0;
$.ajax({
  url: "https://data.nasa.gov/resource/gymh-eyc2.json?$limit=5&$offset=j",
  data: {},
  success: function(data) {
    for(let i=0;i<data.length;i++){
      $("pre").append( '<tr><td>' + data[i].category +' '+ data[i].sample_material+ '</td></tr>' );
      console.log(data[i]);
      //.text(JSON.stringify(data, null, "\t"));
    }

);

});
