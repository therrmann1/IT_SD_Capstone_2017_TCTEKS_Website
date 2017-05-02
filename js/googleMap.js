function initMap() {
    var uluru = {lat: 44.789666, lng: -91.460420};
    var map = new google.maps.Map(document.getElementById('eauClaireMap'), {zoom: 16, center: uluru});
    var marker = new google.maps.Marker({
        position: uluru, 
        map: map});
    
    var uluru2 = {lat: 44.936879, lng: -91.393144};
    var map2 = new google.maps.Map(document.getElementById('chippewaFallsMap'), {zoom: 16, center: uluru2});
    var marker2 = new google.maps.Marker({
        position: uluru2, 
        map: map2});
}