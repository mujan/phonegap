function converteAddress_to_latlng(address, callback) {
    GMaps.geocode({
        address: address,
        callback: function(results, status) {
            if (status == 'OK') {
                var latitude = results[0].geometry.location.lat();
                var longitude = results[0].geometry.location.lng();
                callback(latitude, longitude);
            } else if(status == "ZERO_RESULTS") {
                callback("null", "null");
            }
        }
    });
}