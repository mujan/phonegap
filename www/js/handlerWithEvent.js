$(document).ready(function() {
    $(".foo").animate({left: '100%'}, "slow");
    $("#anim").click(function() {
        $(".span11").hide();
        $(".foo").show().animate({left: '0%'}, "slow");
    });
});

$(document).ready(function() {
    $(".foo ul:first-child").click(function() {
        $(".foo").animate({left: '100%'}, "slow");//class foo hide on left side window
        $("#anim").animate({left: '0'}, "slow", function() {
            $(".foo").hide();
        });//id anim folow class foo and go left with him
    });
});

$(document).ready(function() {
    $("#lookMap").click(function() {
        $("#instructions").empty();
        $(".span11").show();
        $(".foo").animate({left: '100%'}, "slow",function(){
            new userComand();
        });
        
    });
});
// data about caffe stored in DB
$(document).ready(function() {
    var i = 0;
    $("#remove_href_nerbyCoffe").click(function() {
        $(".foo").hide();
        stopAnimation();
        //start animation
        new imageLoader("css/images/sprites.gif", 'startAnimation(' + 2 + ')');
        if ($("#lat").val() === "null" || $("#lng").val() === "null") {//Ukoliko podazuje na BG id="lat" i id="lng" su iz nekog razloga setovani
            GEOlocation.getLocation();
        }
        var int = setInterval(function() {
            if ($("#lat").val() !== "null" && $("#lng").val() !== "null" && i === 0) {
                var lat = $("#lat").val();
                var lng = $("#lng").val();
                foo(lat, lng);
                clearInterval(int);
                i++;
            }
        }, 1000);
        function foo(lat, lng) {
            callAjax("http://mujangeolocation.lockernerd.co.uk/geolocation/getCoffe.php?lat=" + lat + "&lng=" + lng);
        }

    });
});

(function()
{
    setInterval(function() {
        var heig = $(window).height();
        var a = heig - 170;
        var b = heig - 178;
        $("#route_map").height(a + "px");
        $("#routeMyhome").height(b + "px");
    }, 1000);
})();

$(document).ready(function() {
    $(document).on("pagecreate", "#address_position", function(event) {
        $("#address_map").css("height", "300px");
        $("#address_map").css("width", "100%");
    });
});
