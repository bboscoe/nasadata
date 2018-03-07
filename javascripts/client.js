

$.ajax({
  url: "https://data.nasa.gov/resource/gymh-eyc2.json",
  data: {},
  success: function(data) {
    $("pre").text(JSON.stringify(data, null, "\t"));
  },
  error: function(msg) {
    //todo: handle error gracefully
  }
});
/* Note that the whole content variable is just a string */
var content = "<table>"
for(i=0; i<3; i++){
    content += '<tr><td>' + 'result ' +  i + '</td></tr>';
}
content += "</table>"

$('#here_table').append(content);
