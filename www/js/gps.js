       QQ = {};
       var watchID = null;
QQ.gps = function (){
     //document.addEventListener("deviceready", onDeviceReady, false);

            // device APIs are available
            //
            this.onDeviceReady = function() {
                // Get the most accurate position updates available on the
                // device.
                var options = {enableHighAccuracy: true};
                watchID = navigator.geolocation.watchPosition(this.onSuccess, this.onError, options);
            };

            // onSuccess Geolocation
            //
            this.onSuccess = function(position) {
                QQ.lat = position.coords.latitude;
                QQ.lng = position.coords.longitude;
                QQ.latlng = new google.maps.LatLng(QQ.lat, QQ.lng);
                var showMap = new QQ.showMap();
                showMap.getMap();
                showMap.createMarker();
            };
            
            // clear the watch that was started earlier
            //
            this.clearWatch = function() {
                if (watchID !== null) {
                    navigator.geolocation.clearWatch(watchID);
                    watchID = null;
                }
            };

            // onError Callback receives a PositionError object
            //
            this.onError = function(error) {
                alert('code: ' + error.code + '\n' +
                        'message: ' + error.message + '\n');
            };
            this.onDeviceReady();

};

$("document").ready(function() {
    $(document).on("pagecreate", "#mylocation", function() {
        var gps = new QQ.gps();
        gps.onDeviceReady();
    });
});

// Resize a map
(function()
{
    setInterval(function() {
        google.maps.event.trigger($("#address_map")[0], 'resize');
        google.maps.event.trigger($("#map")[0], 'resize');// resize map when is in top-left corner
        google.maps.event.trigger($("#routeMyhome")[0], 'resize');
        var heig = $(window).height();
        var a = heig - 87;
        $("#map").height(a + "px");
    }, 1000);
})();