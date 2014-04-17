var userComand = function(){
    var self = this;
    this.lat = $("#lat").val();
    this.lng = $("#lng").val();
    this.ant_lat = $("#antlat").val();
    this.ant_lng = $("#antlng").val();
    this.map = new GMaps({
        el: '#route_map',
        lat: this.lat,
        lng: this.lng
    });
    
    this.map.travelRoute({
        origin: [this.lat, this.lng],
        destination: [this.ant_lat, this.ant_lng],
        travelMode: 'driving',
        step: function(e) {
            $('#instructions').append('<li>' + e.instructions + '</li>');
            $('#instructions li:eq(' + e.step_number + ')').delay(450 * e.step_number).fadeIn(200, function() {
                self.map.drawPolyline({
                    path: e.path,
                    strokeColor: '#FF0000',
                    strokeOpacity: 0.6,
                    strokeWeight: 6
                });
            });
        }
    });
};