let map;
let searchbox;



async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  const {AdvancedMarkerElement} = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
    mapId: "DEMO"
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: {lat: -35, lng: 160},
    title: "nada",
  });
}


function getPos(){
  event.preventDefault();
  let lat = document.getElementById("latitude").value;
  let lon = document.getElementById("longitude").value;
  lat = parseFloat(lat);
  lon = parseFloat(lon);
  if ((lat<-90 || lat>90) || 
      (lon<-180 || lon>180) ||
      (isNaN(lat)) ||
      (isNaN(lon))){
    alert("Invalid values.")
  }
  else{
    const marker = new google.maps.marker.AdvancedMarkerElement({
      map: map,
      position: { lat: lat, lng: lon },
      title: `Location (${lat}, ${lon})`,
      
    });
    console.log("WORKING");
  }
  
}
initMap();





