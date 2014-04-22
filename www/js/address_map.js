var map;
$(document).ready(function() {
    map = new GMaps({
        el: '#address_map',
        lat: -12.043333,
        lng: -77.028333
    });
    $('#geocoding_form').submit(function(e) {
        e.preventDefault();
        GMaps.geocode({
            address: $('#_address').val().trim(),
            callback: function(results, status) {
                if (status == 'OK') {
                    var latitude = results[0].geometry.location.lat();
                    var longitude = results[0].geometry.location.lng();
                    var latlng = new google.maps.LatLng(latitude, longitude);

                    var mapOptions = {
                        zoom: 18,
                        center: latlng,
                        mapTypeId: google.maps.MapTypeId.ROADMAP

                    };

                    map = new google.maps.Map(document.getElementById('address_map'), mapOptions);

                    var latlng = new google.maps.LatLng(latitude, longitude);
                    map.setCenter(latlng);
                    var marker = new google.maps.Marker({
                        map: map,
                        position: latlng,
                        title: 'Hello World!'

                    });
                }
            }
        });
        $('#geocoding_form')[0].reset();
    });
});

var user_name = [];
$(document).ready(function() {
    $("#__myhome").submit(function(event) {
        event.preventDefault();
        $("#instructionsHome li").hide();
        $("#routeMyhome").hide();
        self = this;
        var _dialog = new dialog();
        var input_data = $("#user_name").val();
        if (!input_data) {
            _dialog.empty(self,'Morate uneti korisnicko ime!');
        } else{
            check_user_name("http://mujangeolocation.lockernerd.co.uk/geolocation/test.php?inputData=" + input_data,
                    function(data) {
                        check_data(data);
                    }
            );
            function check_data(data) {
                if(data !== "false"){
                    user_name.push($("#user_name").val());
                }
                if (user_name[0] !== user_name[user_name.length - 1] && $("#routeMyhome").html().length !== 0 && data !== "false") {
                    stopAnimation();
                    $("#loaderImage3").hide();
                    $("#instructionsHome li").hide();
                    $("#routeMyhome").hide();
                    _dialog.empty(self,"Ne mozete koristiti dva korisnicka imena");
                    return;
                }
                if (data === "false") {
                    $("#foo").show();
                    _dialog.empty(self,'Da bi ste koristili ovu uslugu morate se uclaniti: <br /> <a href="#sing_form"><span style="color:red">Uclanite se!<span></a> ');
                    var hideDialog = setInterval(function() {
                        if ($.mobile.activePage.attr('id') !==  "myhome") {
                            $("#foo").hide();
                            clearInterval(hideDialog);
                        }
                    }, 1000);
                } else {
                    $("#loaderImage3").show();
                    new imageLoader("css/images/sprites.gif", 'startAnimation(' + 3 + ')');

                    $.each(data, function(key, value) {
                        var Homelat = value.lat;
                        var Homelng = value.lng;
                        $("#hidden_lat").val(Homelat);
                        $("#hidden_lng").val(Homelng);
                        onDeviceReadyHome();//myhome.js

                    });
                }
            }
        }
    });
});