function initMap() {
  const myLatLng = { lat: 51.0447, lng: -114.0719 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: myLatLng,
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });
}