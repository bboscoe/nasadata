

$.ajax({
  url: "https://data.nasa.gov/resource/gymh-eyc2.json?$limit=5&$offset=0",
  data: {},
  success: function(data) {
    for(let i=0;i<data.length;i++){
      $("pre").append( '<tr><td>' + data[i].category +' '+ data[i].sample_material+ '</td></tr>' );
      console.log(data[i]);
      //.text(JSON.stringify(data, null, "\t"));
    }
    document.write("<a href='https://data.nasa.gov/resource/gymh-eyc2.json?$limit=5&$offset=5'> next</a>");
  },
  error: function(msg) {
    //todo: handle error gracefully
    //https://soda.demo.socrata.com/resource/earthquakes.json?$limit=5&$offset=0
  }
});
//Object Helper Functions
    oFunctions = {};
    oFunctions.keys = {};

    //NEXT KEY
    oFunctions.keys.next = function(o, id){
        var keys = Object.keys( o ),
            idIndex = keys.indexOf( id ),
            nextIndex = idIndex += 1;
        if(nextIndex >= keys.length){
            //we're at the end, there is no next
            return;
        }
        var nextKey = keys[ nextIndex ]
        return nextKey;
    };

    //PREVIOUS KEY
    oFunctions.keys.previous = function(o, id){
        var keys = Object.keys( o ),
            idIndex = keys.indexOf( id ),
            nextIndex = idIndex -= 1;
        if(idIndex === 0){
        //we're at the beginning, there is no previous
            return;
        }
        var nextKey = keys[ nextIndex ]
        return nextKey;
    };
