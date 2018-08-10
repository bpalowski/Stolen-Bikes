export class Bike {
  constructor(){


  }
  static getData(IP, blue, error){
    $.get(`https://bikeindex.org:443/api/v3/search?page=${1}&per_page=${20}&location=${IP}&distance=${50}&stolenness=proximity`)
    .then(function(response){
      blue(response);
    }).fail(function(){
      error();
    });
  }
}
