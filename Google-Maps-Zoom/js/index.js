var map;
var currentZoom = 2
// var contentString = "",

function fbw5Map() {

  var interV = setInterval(() => {


    // set the map
    map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: 53.550270,
        lng: 10.025270
      },
      zoom: currentZoom,
      //disableDefaultUI: true,
    });

    currentZoom += 1


    if (currentZoom === 20) {
      clearInterval(interV);
      // set the marker
      var marker = new google.maps.Marker({
        position: {
          lat: 53.550270,
          lng: 10.025270
        },
        map: map,

        title: 'DCI Hamburg',
        label : 'DCI',
        draggable: true,
        animation: google.maps.Animation.DROP,
       
      })

       


        // set up info window
        var infowindow = new google.maps.InfoWindow({

          content: document.querySelector('#windowContainer').innerHTML //! innerText wont be able to see the image. have to use innerHTML to be able to see everything inside that container Div

        });
        // add event for the info window 
        marker.addListener('mouseover', () => { //! it is addListener here in the library and not addEventListener
          infowindow.open(map, marker);

        });



    }

  

  }, 1000);

}

window.onload






//* to create this map the google class is taking two parameters : new google.maps.Map // google.maps is the library which it is accessed from
//* first parameter is the element the second one is the object
//* zoom can take a value from 0-20

//* in the following code :
//*     var infowindow = new google.maps.InfoWindow({ 
//*   content: document.querySelector('#windowContainer').innerHTML
//*});
//? the info window is given from the google library. same as content. but in the content we want to display what we have in windowContainer.
//? so we get it with querySelector and then view it with inner.HTML.. with innerText we wouldn't be able view the images