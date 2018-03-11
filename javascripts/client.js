

$(document).ready(function() {

  //console.log("in function");
  // everything happens inside of here, when the button is clicked
  let j=0;
  $.ajax({
    url: "https://data.nasa.gov/resource/gymh-eyc2.json",
    data: {},
    success: function(data) {

      if(j<data.length){
      $('#foo').click(function () {
      for(let i=0;i<5;i++){
        $("pre").append( '<tr><td>' + data[j].category +' '+ data[j].sample_material+ '</td></tr>' );
        console.log(data[j]);
        j++;
        return j;
                                    }
                                  })
                                }
                          }

          })

        });
